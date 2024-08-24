// src/server/routes/products.ts
import { db } from "../db";

export const getLatestProduct = async () => {
    const latestProduct = await db.product.findFirst({
      orderBy: { createdAt: "desc" },
    });
    return latestProduct;
  };
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