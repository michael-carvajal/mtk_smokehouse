'use client'

import { Edit } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { useQuery } from '@tanstack/react-query'
import { api } from '~/utils/api'

function FeatureForm() {
    // Fetching the data using React Query
    const { isLoading, data: homePage } = useQuery({
        queryKey: ['homePage'],
        queryFn: () => api.getHomePage(),
    });

    // Initializing state with fetched data or default values
    const [featureOneTitle, setFeatureOneTitle] = useState(homePage?.featureOneTitle || "Default Title");
    const [featureOneBody, setFeatureOneBody] = useState(homePage?.featureOneBody || "Default Body");
    const [featureOneLink, setFeatureOneLink] = useState(homePage?.featureOneLink || "SHOP FOR GOLD LABEL SMOKED SALMON");

    const [isEditing, setIsEditing] = useState(false);

    const handleSave = () => {
        // Implement save logic here
        console.log('Saved', { featureOneTitle, featureOneBody, featureOneLink });
    };

    const handleLinkChange = (e) => {
        setFeatureOneLink(e.target.value);
    };

    if (isLoading) {
        return <div>Loading....</div>;
    }

    return (
        <Card x-chunk="dashboard-04-chunk-1">
            <CardHeader>
                <CardTitle>Featured 1 Preview</CardTitle>
            </CardHeader>
            <CardContent>
                <div className='flex flex-col flex-1 gap-7 max-w-72'>
                    <div className='flex justify-center items-center h-60 my-0 mt-4 rounded mx-auto bg-red-400 w-full'>Image</div>
                    <h4>{featureOneTitle}</h4>
                    <div className='text-xs font-semibold text-slate-400 '>{featureOneBody}</div>
                    <div className="w-full flex gap-8 relative">
                        {isEditing ? (
                            <Button variant='ghost' className='text-slate-600 w-full relative'>
                                <Input value={featureOneLink} onChange={handleLinkChange} />
                            </Button>
                        ) : (
                            <a href='#'>
                                <Button variant='ghost' className='text-slate-600'>{featureOneLink}</Button>
                            </a>
                        )}
                        <Edit onClick={() => setIsEditing(!isEditing)} className="absolute -right-20 cursor-pointer" />
                    </div>
                </div>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
                <Button onClick={handleSave}>Save</Button>
            </CardFooter>
        </Card>
    )
}

export default FeatureForm;
