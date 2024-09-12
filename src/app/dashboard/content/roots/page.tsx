'use client'
import { useQuery } from "@tanstack/react-query";
import Image from "next/image"
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { api } from "~/utils/api";

export default function OurRoots() {
  const [pageState, setPageState] = useState({});
  const { isLoading, data: rootsPage } = useQuery({
    queryKey: ['rootsPageFetch'],
    queryFn: () => api.getOurRootsPage(),
  });
  // Use useEffect to update the state when homePage data is available
  useEffect(() => {
    if (rootsPage) {
      setPageState({
        "title": rootsPage.title,
        "content": rootsPage.content,
        "imageUrl": rootsPage.imageUrl,
      })
    }
  }, [rootsPage]);
  console.log(rootsPage);

  return (
    <Card className="max-w-xl mx-auto">
      <CardContent className="p-0">
        <div className="relative aspect-[4/3] w-full md:h-[300px]">
          <Image
            src={pageState.imageUrl}
            alt="Misty forest landscape with evergreen trees"
            fill
            className="object-cover rounded-t-lg"
          />
        </div>
      </CardContent>
      <CardHeader>
        <CardTitle className="text-2xl font-extralight text-center mb-4">{pageState.title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center px-20 pb-6">
        <p className="text-sm leading-relaxed text-gray-600">
          {pageState.content}
        </p>
      </CardContent>
    </Card>
  )
}