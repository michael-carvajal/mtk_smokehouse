"use client";

import { useState } from "react";

import { api } from "~/trpc/react";

export function Products() {
  const Products = api.product.getLatestProduct.useQuery()
  const utils = api.useUtils();
  const [productName, setProductName] = useState("");
  const createProduct = api.product.create.useMutation({
    onSuccess: async () => {
      await utils.product.invalidate();
      setProductName("");
    },
  });
console.log(Products);
  return (
    <div className="w-full max-w-xs">
    {/* // {Products ? (
    //     <p className="truncate">Your most recent product: {Products.name}</p>
    //   ) : (
    //     <p>You have no products yet.</p>
    //   )} */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createProduct.mutate({ name : productName });
        }}
        className="flex flex-col gap-2"
      >
        <input
          type="text"
          placeholder="Title"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="w-full rounded-full px-4 py-2 text-black"
        />
        <button
          type="submit"
          className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
          disabled={createProduct.isPending}
        >
          {createProduct.isPending ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
