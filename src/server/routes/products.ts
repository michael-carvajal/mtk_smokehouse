// src/server/routes/products.ts
import { db } from "../db";

export const getLatestProduct = async () => {
    const latestProduct = await db.product.findFirst({
      orderBy: { createdAt: "desc" },
    });
    return latestProduct;
  };
  
  export const createProduct = async (name: string) => {
    const newProduct = await db.product.create({
      data: { name },
    });
    return newProduct;
  };