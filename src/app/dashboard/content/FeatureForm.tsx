'use client'

import { Edit } from 'lucide-react'
import React from 'react'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { useState } from "react"

function FeatureForm() {
    const [featureOneLink, setFeatureOneLink] = useState("SHOP FOR GOLD LABEL SMOKED SALMON")
    const [isEditting, setisEditting] = useState(false)
    const handleSave = () => {
  
    }
  
    const handleLinkChange = (e, setFeatureLink) => {
      setFeatureLink(e.target.value)
    }
    return (
        <Card x-chunk="dashboard-04-chunk-1">
            <CardHeader>
                <CardTitle>Featured 1 Preview</CardTitle>
            </CardHeader>
            <CardContent>
                <div className='flex flex-col flex-1 gap-7 max-w-72'>
                    <div className='flex justify-center items-center h-60 my-0 mt-4 rounded mx-auto bg-red-400 w-full'>Imgage</div>
                    <h4>SMOKEHOUSE GOLD LABEL</h4>
                    <div className='text-xs font-semibold text-slate-400 '>Our Gold Label is what made MT. Kisco Smokehouse what it is today. With its rich, buttery texture and sweet lacing of fruit-wood smoke, it accounts for most of our smoked salmon sales. Smoked with the perfect blend of apple and cherry woods, our salmon is praised for its delicate smoked flavor and silky texture. Our salmon comes from the best aquaculture farms located in the the icy Northern Atlantic off the coast of Scotland. We receive daily deliveries of fresh Atlantic salmon flown in directly from the farms fresh, never frozen, giving it an amazingly silky texture, and rich, deep orange color.</div>
                    <div className="w-full flex gap-8 relative">
                        {isEditting ? <Button variant='ghost' className='text-slate-600 w-full relative'>
                            <Input value={featureOneLink} onChange={(e) => handleLinkChange(e, setFeatureOneLink)} />
                        </Button> : <a href='#'><Button variant='ghost' className='text-slate-600'>{featureOneLink}</Button></a>
                        }
                        <Edit onClick={() => setisEditting(!isEditting)} className="absolute -right-20 cursor-pointer" />
                    </div>
                </div>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
                <Button onClick={handleSave}>Save</Button>
            </CardFooter>
        </Card>
    )
}

export default FeatureForm