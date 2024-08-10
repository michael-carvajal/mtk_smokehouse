"use client";
import { useSession } from 'next-auth/react';
import React, { useState, useEffect } from 'react';
import { api } from '~/utils/api';

export function Products() {
    const [latestProduct, setLatestProduct] = useState(null);
    const { data: session, status } = useSession()
    console.log("session =====>", session, "\n status ===>", status);


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
            console.log("session user in handle subit ---------->",  session?.user);
            
            const newestProduct = await api.createProduct(productName, session?.user.id);
            console.log("product in handle submit ==========>    ", newestProduct);

            setLatestProduct(newestProduct);
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };
    console.log(productName);

    return (
        <div className="w-full max-w-xs">
            {latestProduct ? (
                <p className="truncate">Your most recent product: {isLoading ? "Loading..." : latestProduct?.name}</p>
            ) : (
                <p>You have no products yet.</p>
            )}
            <form
                onSubmit={handleSubmit}
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
                    {isSubmitting ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    );
}
