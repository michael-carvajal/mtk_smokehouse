// src/utils/api.ts
export const api = {
  getLatestProduct: async () => {
    const response = await fetch("/api/products");
    if (!response.ok) throw new Error("Failed to fetch latest product");
    return response.json();
  },
  getAllProducts: async () => {
    const response = await fetch("/api/products");
    if (!response.ok) throw new Error("Failed to fetch all products");
    return response.json();
  },
  createProduct: async (name: string, createdBy: string) => {
    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, createdBy }),
    });
    if (!response.ok) throw new Error("Failed to create product");
    return response.json();
  },
  getProductById: async (id: string) => {
    const response = await fetch(`/api/products/${id}`);
    if (!response.ok) throw new Error("Failed to fetch product");
    return response.json();
  },
  getHomePage: async () => {
    const response = await fetch("/api/homePage");
    if (!response.ok) throw new Error("Failed to fetch home page");
    return response.json();
  },
  updateHomePage: async (body) => {
    const response = await fetch(`/api/homePage`, {
      method: "PATCH",
      headers : {"Content-Type" : "application/json"},
      body : JSON.stringify({...body})
    });
    if (!response.ok) throw new Error("Failed to update home page");
    return response.json();
  },
  
  getContactPage: async () => {
    const response = await fetch("/api/contactPage");
    if (!response.ok) throw new Error("Failed to fetch contact page");
    return response.json();
  },
};
