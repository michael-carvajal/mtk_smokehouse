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
      setPageState({})
    }
  }, [rootsPage]);
  console.log(rootsPage);

  return (
    <Card className="max-w-xl mx-auto">
      <CardContent className="p-0">
        <div className="relative aspect-[4/3] w-full md:h-[300px]">
          <Image
            src="https://utfs.io/f/34ac9c45-b876-4101-9d77-197cded3531b-43nwx0.jpg"
            alt="Misty forest landscape with evergreen trees"
            fill
            className="object-cover rounded-t-lg"
          />
        </div>
      </CardContent>
      <CardHeader>
        <CardTitle className="text-2xl font-extralight text-center mb-4">OUR ROOTS</CardTitle>
      </CardHeader>
      <CardContent className="text-center px-20 pb-6">
        <p className="text-sm leading-relaxed text-gray-600">
          Catsmo's founder, Robert Simon, has always been passionate about fishing. The idea of
          smoking his catch began when he would return home from fishing trips with too much
          fresh fish than his family could eat themselves. Over time, Robert perfected his smoking
          techniques and recipes and began sharing with chef friends in NYC. In time, Robert's
          little garage smoking operation grew but he never changed his fundamental principles
          of not compromising when it came to the quality of fish he chose nor his methods.
        </p>
      </CardContent>
    </Card>
  )
}