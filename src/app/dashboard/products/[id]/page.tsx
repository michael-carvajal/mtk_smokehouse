'use client'
import { useMutation, useQuery } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '~/components/ui/card';
import { api } from '~/utils/api';
import { Edit } from 'lucide-react';
import UploadImage from '../../content/homePage/UploadImage';
import { Input } from '~/components/ui/input';

function ProductDetails() {
  const [pageState, setPageState] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const pathname = usePathname();
  const productId = pathname.split("/").at(-1);
  console.log(productId);

  const { data: product, error, isLoading } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => api.getProductById(productId),
    enabled: !!productId,
  });


  useEffect(() => {
    if (product) {
      setPageState({
        "id": product.id,
        "name": product.name,
        "description": product.description,
        "imageLink": product.imageLink,
        "price": product.price,
        "countryCode": product.countryCode,
        "createdById": product.createdById,
        "createdAt": product.createdAt,
        "updatedAt": product.updatedAt
      });
    }
  }, [product]);
  const mutationProductUpdate = useMutation({
    mutationFn: api.updateProduct,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['updateRootsPage'] })
    },
  })
  if (isLoading) return <div className='text-slate-800'>Loading...</div>;
  if (error) return <div className='text-slate-800'>Error: {error.message}</div>;
  const setFeatureImageLink = (link) => {
    setPageState({ ...pageState, imageLink: link })
  }
  return (

    <Card className="md:w-[400px] max-w-sm mx-auto relative">
      <Edit onClick={() => setIsEditing(!isEditing)} className="absolute -left-20 cursor-pointer text-slate-900" />
      <CardHeader>
        <CardTitle className="text-lg">{isEditing ? (
          <Input
            value={pageState.name}
            onChange={(e) =>
              setPageState({ ...pageState, name: e.target.value })
            }
          />
        ) : (pageState.name)}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative aspect-[4/3] w-full">
          {isEditing ? <UploadImage setFeatureImageLink={setFeatureImageLink} /> : <Image
            src={pageState.imageLink}
            alt={"pageState image"}
            fill
            className="object-cover rounded-t-lg"
          />}
        </div>
        <div className="p-4">
          <p className="text-2xl font-bold mb-2">{isEditing ? (
          <Input
            value={pageState.price}
            onChange={(e) =>
              setPageState({ ...pageState, price: e.target.value })
            }
          />
        ) : (pageState.price)}</p>
          <p className="text-sm text-gray-600">{isEditing ? (
          <Input
            value={pageState.description}
            onChange={(e) =>
              setPageState({ ...pageState, description: e.target.value })
            }
          />
        ) : (pageState.description)}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
      <CardFooter className="border-t px-6 py-4">
        <Button onClick={() => {
          mutationProductUpdate.mutate(pageState)
        }}>Save</Button>
        {mutationProductUpdate.isError && <div className='text-slate-900 ml-12'>Successfully updated feature</div>}
      </CardFooter>
    </Card>
  );
}

export default ProductDetails;
