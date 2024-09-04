'use client'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '~/components/ui/card'
import { useQuery } from '@tanstack/react-query'
import { api } from '~/utils/api'

function DashboardContact() {
    const { isLoading, data: contactPage } = useQuery({
        queryKey: ['contactPage'],
        queryFn: () => api.getContactPage(),
    });
    if (isLoading) {
        return <div className='text-slate-800'>Loading....</div>;
    }
    console.log('contact page in dashboard =====>', contactPage);
    
  return (
    <Card className="w-[350px] ">
            <CardHeader>
                <CardTitle>Mt. Kisco, NY</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid w-full items-center gap-4">
                    <Image width={300} height={300} src='/mtk_photos/storeFront.jpg' alt='store front in mount kisco' className="flex rounded flex-col space-y-1.5">
                    </Image>
                    {/* TODO - add links for google and apple maps direction */}
                    <Link target="_blank" href="https://www.google.com/maps/dir//520+Lexington+Ave,+Mt+Kisco,+NY+10549" className="text-center">
                        <Button variant='ghost' className='text-slate-600 tracking-wider font-thin'>{contactPage.address}</Button>
                    </Link>
                    <div className="text-center font-thin">Phone: <a type="" href={`tel:+1${contactPage.phone}`}>{contactPage.phone}</a></div>
                    <div className="grid gap-4">
                        <div className="flex items-center justify-between">
                            <div className="font-medium">Monday</div>
                            <div className="text-muted-foreground">{contactPage.Monday}</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="font-medium">Tuesday</div>
                            <div className="text-muted-foreground">{contactPage.Tuesday}</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="font-medium">Wednesday</div>
                            <div className="text-muted-foreground">{contactPage.Wednesday}</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="font-medium">Thursday</div>
                            <div className="text-muted-foreground">{contactPage.Thursday}</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="font-medium">Friday</div>
                            <div className="text-muted-foreground">{contactPage.Friday}</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="font-medium">Saturday</div>
                            <div className="text-muted-foreground">{contactPage.Saturday}</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="font-medium">Sunday</div>
                            <div className="text-muted-foreground">{contactPage.Sunday}</div>
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-end">
                <Link href="/products"><Button>Shop Now</Button></Link>
            </CardFooter>
        </Card>
  )
}

export default DashboardContact