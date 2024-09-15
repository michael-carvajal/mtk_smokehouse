// src/server/routes/products.ts
import { db } from "../db";


export const getAllProducts = async () => {
    const allProducts = await db.product.findMany();
    return allProducts;
  };
  
  export const createProduct = async (body) => {
    const newProduct = await db.product.create({
      data: {...body, createdBy : {connect : {email : "admin1@example.com"}}, price : parseFloat(body.price)} ,
       
    });
    return newProduct;
  };

  export const getProductById = async (id: string) => {
    const product = await db.product.findUnique({
        where: { id },
    });
    return product;
};

export const updateProduct = async (id: number, updates: Partial<{ name: string, createdBy: string, price : string }>) => {
  const updatedProduct = await db.product.update({
      where: { id },
      data: {...updates, price : parseFloat(updates.price!)},
  });
  return updatedProduct;
};


export const deleteProduct = async (id: string) => {
  const deletedProduct = await db.product.delete({
      where: { id },
  });
  return deletedProduct;
};
