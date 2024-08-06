"use client";
import React, { useState, useEffect } from 'react';
import { api } from '~/utils/api';

export function Products() {
    const [latestProduct, setLatestProduct] = useState(null);
    const [productName, setProductName] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const fetchLatestProduct = async () => {
            try {
                const product = await api.getLatestProduct();
                setLatestProduct(product);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchLatestProduct().catch(err => {
            console.log(err);
        });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await api.createProduct(productName);
            setProductName('');
            const product = await api.getLatestProduct();
            setLatestProduct(product);
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div className="w-full max-w-xs">
            {Products ? (
                <p className="truncate">Your most recent product: {latestProduct?.name}</p>
            ) : (
                <p>You have no products yet.</p>
            )}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    // createProduct.mutate({ name: productName });
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
                // disabled={createProduct.isPending}
                >
                    {/* {createProduct.isPending ? "Submitting..." : "Submit"} */}
                </button>
            </form>
        </div>
    );
}
