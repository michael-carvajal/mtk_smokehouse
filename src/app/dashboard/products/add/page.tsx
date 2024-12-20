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
    "name": "Title",
    "description": "Description",
    "imageLink": "",
    "price": "2.99",
  });
  const [isCreating, setIsCreating] = useState(true);
  const router = useRouter()

  const setFeatureImageLink = (link) => {
    setPageState({ ...pageState, imageLink: link })
  }
  const handleProductCreation = async () => {
    const pageStateCopy = { ...pageState }
    if (pageStateCopy.imageLink === "") {
      pageStateCopy.imageLink = "https://utfs.io/f/lYW4Ny0BCVb4wuufO82H8lgKiCLTs2YOXWort74BwqehDM5d"
    }
    try {
      const response = await api.createProduct(pageStateCopy);

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
      queryClient.invalidateQueries({ queryKey: ['handleProductCreation'] })
    },
  })
  return (

    <div className="flex flex-col gap-4 items-center">
      <h1 className="text-2xl font-bold text-slate-900">Add a new a product</h1>
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
              src={pageState.imageLink || '/mtk_photos/Image-not-found.webp'}
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
    </div>
  );
}

export default CreateProduct;
