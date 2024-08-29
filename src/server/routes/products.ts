// src/server/routes/products.ts
import { db } from "../db";


export const getAllProducts = async () => {
    const allProducts = await db.product.findMany();
    return allProducts;
  };
  
  export const createProduct = async (name: string, createdBy: string) => {
    const newProduct = await db.product.create({
      data: { name, createdBy : { connect: { id: createdBy } } }
    });
    return newProduct;
  };

  export const getProductById = async (id: string) => {
    const product = await db.product.findUnique({
        where: { id },
    });
    return product;
};

export const updateProduct = async (id: string, updates: Partial<{ name: string, createdBy: string }>) => {
  const updatedProduct = await db.product.update({
      where: { id },
      data: updates,
  });
  return updatedProduct;
};


export const deleteProduct = async (id: string) => {
  const deletedProduct = await db.product.delete({
      where: { id },
  });
  return deletedProduct;
};
