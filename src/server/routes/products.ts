// src/server/routes/products.ts
import { stripe } from "libs/stripe";
import { db } from "../db";

export const getAllProducts = async () => {
  const allProducts = await db.product.findMany();
  return allProducts;
};

export const getProductById = async (id: string) => {
  const product = await db.product.findUnique({
    where: { id },
  });
  return product;
};

export const createProduct = async (body: {
  name: string;
  description?: string;
  price: string;
  imageLink: string;
  // Add other fields as necessary
}) => {
  return await db.$transaction(async (tx) => {
    // Create product in Stripe
    const stripeProduct = await stripe.products.create({
      name: body.name,
      description: body.description,
      images: [body.imageLink],
    });

    // Create price in Stripe
    const stripePrice = await stripe.prices.create({
      product: stripeProduct.id,
      unit_amount: Math.round(parseFloat(body.price) * 100), // Stripe uses cents
      currency: 'usd', // Change as needed
    });

    // Create product in database
    const newProduct = await tx.product.create({
      data: {
        ...body,
        createdBy: { connect: { email: "admin1@email.com" } },
        price: parseFloat(body.price),
        stripeProductId: stripeProduct.id,
        stripePriceId: stripePrice.id,
        imageLink: body.imageLink,
      },
    });

    return newProduct;
  });
};

export const updateProduct = async (id: string, updates: Partial<{ 
  name: string, 
  description?: string,
  price: string 
  imageLink: string
  // Add other fields as necessary
}>) => {
  return await db.$transaction(async (tx) => {
    // Get the current product
    const currentProduct = await tx.product.findUnique({
      where: { id },
      select: { stripeProductId: true, stripePriceId: true }
    });

    if (!currentProduct) {
      throw new Error('Product not found');
    }

    // Update product in Stripe
    if (updates.name || updates.description) {
      await stripe.products.update(currentProduct.stripeProductId, {
        name: updates.name,
        description: updates.description,
      });
    }

    // Update price in Stripe if changed
    if (updates.price) {
      const newStripePrice = await stripe.prices.create({
        product: currentProduct.stripeProductId,
        unit_amount: Math.round(parseFloat(updates.price) * 100),
        currency: 'usd', // Change as needed
      });
      updates.stripePriceId = newStripePrice.id;
    }

    // Update product in database
    const updatedProduct = await tx.product.update({
      where: { id },
      data: {
        ...updates,
        price: updates.price ? parseFloat(updates.price) : undefined,
      },
    });

    return updatedProduct;
  });
};

export const deleteProduct = async (id: string) => {
  return await db.$transaction(async (tx) => {
    // Get the product
    const product = await tx.product.findUnique({
      where: { id },
      select: { stripeProductId: true }
    });

    if (!product) {
      throw new Error('Product not found');
    }

    // Delete product in Stripe
    await stripe.products.del(product.stripeProductId);

    // Delete product in database
    const deletedProduct = await tx.product.delete({
      where: { id },
    });

    return deletedProduct;
  });
};