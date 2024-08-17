// src/utils/api.ts
export const api = {
  getLatestProduct: async () => {
    const response = await fetch("/api/products");
    if (!response.ok) throw new Error("Failed to fetch latest product");
    return response.json();
  },
  createProduct: async (name: string, createdBy: string) => {
    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        createdBy,
      }),
    });
    if (!response.ok) throw new Error("Failed to create product");
    return response.json();
  },
};
