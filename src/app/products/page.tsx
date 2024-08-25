import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Table, TableBody, TableHead, TableHeader, TableRow } from '~/components/ui/table'
import { Tabs, TabsContent } from '~/components/ui/tabs'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import ProductsList from './ProductsList'
import { api } from '~/utils/api'

export default async function PostsPage() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['products'],
    queryFn: api.getAllProducts,
  })

  return (
    // Neat! Serialization is now as easy as passing props.
    // HydrationBoundary is a Client Component, so hydration will happen there.
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Products />
    </HydrationBoundary>
  )
}
function Products() {
  return (
    <Tabs value='all'>
      <TabsContent value="all">
        <Card x-chunk="dashboard-06-chunk-0">
          <CardHeader>
            <CardTitle className='text-slate-800'>Products</CardTitle>
            <CardDescription>
              Manage your products and view their sales performance.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="hidden w-[100px] sm:table-cell">
                    <span className="sr-only">Image</span>
                  </TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="hidden md:table-cell">
                    Price
                  </TableHead>
                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <ProductsList />
              </TableBody>
            </Table>
          </CardContent>
          {/* <CardFooter>
            <div className="text-xs text-muted-foreground">
              Showing <strong>1-10</strong> of <strong>32</strong>{" "}
              products
            </div>
          </CardFooter> */}
        </Card>
      </TabsContent>
    </Tabs>
  )
}

