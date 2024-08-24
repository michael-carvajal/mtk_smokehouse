import * as React from "react"

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import Image from "next/image"
import Link from "next/link"


export default function Contact() {
    return (
        <Card className="w-[350px] my-10">
            <CardHeader>
                <CardTitle>Mt. Kisco, NY</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid w-full items-center gap-4">
                    <Image width={300} height={300} src='/mtk_photos/storeFront.jpg' alt='store front in mount kisco' className="flex rounded flex-col space-y-1.5">
                    </Image>
                    <div className="grid gap-4">
                        <div className="flex items-center justify-between">
                            <div className="font-medium">Monday</div>
                            <div className="text-muted-foreground">9:00 AM - 4:00 PM</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="font-medium">Tuesday</div>
                            <div className="text-muted-foreground">9:00 AM - 4:00 PM</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="font-medium">Wednesday</div>
                            <div className="text-muted-foreground">9:00 AM - 4:00 PM</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="font-medium">Thursday</div>
                            <div className="text-muted-foreground">9:00 AM - 4:00 PM</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="font-medium">Friday</div>
                            <div className="text-muted-foreground">9:00 AM - 4:00 PM</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="font-medium">Saturday</div>
                            <div className="text-muted-foreground">9:00 AM - 4:00 PM</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="font-medium">Sunday</div>
                            <div className="text-muted-foreground">9:00 AM - 12:00 PM</div>
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
