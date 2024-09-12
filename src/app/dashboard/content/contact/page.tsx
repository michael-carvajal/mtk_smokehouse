'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '~/components/ui/card'
import { useQuery } from '@tanstack/react-query'
import { api } from '~/utils/api'
import { Edit } from 'lucide-react'

function DashboardContact() {
    const [isEditing, setIsEditing] = useState(false);
    const [pageState, setPageState] = useState({});

    const { isLoading, data: contactPage } = useQuery({
        queryKey: ['contactPage'],
        queryFn: () => api.getContactPage(),
    });
    useEffect(() => {
        if (contactPage) {
            setPageState({
                "Monday": contactPage.Monday,
                "Tuesday": contactPage.Tuesday,
                "Wednesday": contactPage.Wednesday,
                "Thursday": contactPage.Thursday,
                "Friday": contactPage.Friday,
                "Saturday": contactPage.Saturday,
                "Sunday": contactPage.Sunday,
                "address": contactPage.address,
                "phone": contactPage.phone,
            });
        }
    }, [contactPage]);

    if (isLoading) {
        return <div className='text-slate-800'>Loading....</div>;
    }
    return (
        <Card className="w-[350px] relative">
            <Edit onClick={() => setIsEditing(!isEditing)} className="absolute -left-20 cursor-pointer text-slate-900" />

            <CardHeader>
                <CardTitle>Mt. Kisco, NY</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid w-full items-center gap-4">
                    <Image width={300} height={300} src='/mtk_photos/storeFront.jpg' alt='store front in mount kisco' className="flex rounded flex-col space-y-1.5">
                    </Image>
                    {/* TODO - add links for google and apple maps direction */}
                    <Link target="_blank" href="https://www.google.com/maps/dir//520+Lexington+Ave,+Mt+Kisco,+NY+10549" className="text-center">
                        <Button variant='ghost' className='text-slate-600 tracking-wider font-thin'>{pageState.address}</Button>
                    </Link>
                    <div className="text-center font-thin">Phone: <a type="" href={`tel:+1${pageState.phone}`}>{pageState.phone}</a></div>
                    <div className="grid gap-4">
                        <div className="flex items-center justify-between">
                            <div className="font-medium">Monday</div>
                            <div className="text-muted-foreground">{pageState.Monday}</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="font-medium">Tuesday</div>
                            <div className="text-muted-foreground">{pageState.Tuesday}</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="font-medium">Wednesday</div>
                            <div className="text-muted-foreground">{pageState.Wednesday}</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="font-medium">Thursday</div>
                            <div className="text-muted-foreground">{pageState.Thursday}</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="font-medium">Friday</div>
                            <div className="text-muted-foreground">{pageState.Friday}</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="font-medium">Saturday</div>
                            <div className="text-muted-foreground">{pageState.Saturday}</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="font-medium">Sunday</div>
                            <div className="text-muted-foreground">{pageState.Sunday}</div>
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