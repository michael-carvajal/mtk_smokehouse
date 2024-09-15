'use client'
import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '~/components/ui/card';
import { api } from '~/utils/api';
import { Edit } from 'lucide-react';
import UploadImage from '../../content/homePage/UploadImage';
import { Input } from '~/components/ui/input';
import { useRouter } from 'next/navigation';

function CreateProduct() {
  const [pageState, setPageState] = useState({
    "name": "",
    "description": "",
    "imageLink": "",
    "price": "",
  });
  const [isCreating, setIsCreating] = useState(false);
  const router = useRouter()

  const setFeatureImageLink = (link) => {
    setPageState({ ...pageState, imageLink: link })
  }
  const handleProductCreation = async () => {
    try {
      const response = await api.createProduct(pageState);

      router.push("/dashboard/products")
      return response
    } catch (error) {
      console.log('cresation error', error);
      
    }
  }

  const mutationProductCreation = useMutation({
    mutationFn: handleProductCreation,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['updateRootsPage'] })
    },
  })
  return (

    <Card className="md:w-[400px] max-w-sm mx-auto relative">
      <Edit onClick={() => setIsCreating(!isCreating)} className="absolute -left-20 cursor-pointer text-slate-900" />
      <CardHeader>
        <CardTitle className="text-lg">{isCreating ? (
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
          {isCreating ? <UploadImage setFeatureImageLink={setFeatureImageLink} /> : <Image
            src={pageState.imageLink}
            alt={"pageState image"}
            fill
            className="object-cover rounded-t-lg"
          />}
        </div>
        <div className="p-4">
          <p className="text-2xl font-bold mb-2">{isCreating ? (
            <Input
              value={pageState.price}
              onChange={(e) =>
                setPageState({ ...pageState, price: e.target.value })
              }
            />
          ) : (pageState.price)}</p>
          <p className="text-sm text-gray-600">{isCreating ? (
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
          mutationProductCreation.mutate(pageState)
        }}>Save</Button>
        {mutationProductCreation.isError && <div className='text-slate-900 ml-12'>Successfully updated feature</div>}
      </CardFooter>
    </Card>
  );
}

export default CreateProduct;
