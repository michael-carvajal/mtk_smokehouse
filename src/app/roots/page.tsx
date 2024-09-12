'use client'
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { api } from "~/utils/api";

export default function OurRoots() {

  const { isLoading, data: rootsPage } = useQuery({
    queryKey: ['rootsPageFetch'],
    queryFn: () => api.getOurRootsPage(),
  });
  if (isLoading) {
    return <div className='text-slate-800'>Loading....</div>;
  }
  return (
    <div>
      <Card className="max-w-xl mx-auto relative">
        <CardContent className="p-0">
          <div className="relative aspect-[4/3] w-full md:h-[300px]">
            <Image
              src={rootsPage?.imageUrl}
              alt="Misty forest landscape with evergreen trees"
              fill
              priority
              className="object-cover rounded-t-lg"
            />
          </div>
        </CardContent>
        <CardHeader>
          <CardTitle className="text-2xl font-extralight text-center mb-4">
            {rootsPage?.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center px-20 pb-6">
          <p className="text-sm leading-relaxed text-gray-600">
            {rootsPage?.content}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
