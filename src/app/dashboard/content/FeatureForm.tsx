'use client'

import { Edit } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { useQuery } from '@tanstack/react-query'
import { api } from '~/utils/api'
import { Textarea } from '~/components/ui/textarea'

function FeatureForm() {
    // Fetching the data using React Query
    const { isLoading, data: homePage } = useQuery({
        queryKey: ['homePage'],
        queryFn: () => api.getHomePage(),
    });

    // State to hold the feature values
    const [featureOneTitle, setFeatureOneTitle] = useState("");
    const [featureOneBody, setFeatureOneBody] = useState("");
    const [featureOneLink, setFeatureOneLink] = useState("SHOP FOR GOLD LABEL SMOKED SALMON");

    const [isEditing, setIsEditing] = useState(false);

    // Use useEffect to update the state when homePage data is available
    useEffect(() => {
        if (homePage) {
            setFeatureOneTitle(homePage.featureOneTitle || "Default Title");
            setFeatureOneBody(homePage.featureOneBody || "Default Body");
            setFeatureOneLink(homePage.featureOneLink || "SHOP FOR GOLD LABEL SMOKED SALMON");
        }
    }, [homePage]);

    const handleSave = () => {
        // Implement save logic here
        console.log('Saved', { featureOneTitle, featureOneBody, featureOneLink });
    };

    const handleInputChange = (e, setInputValue) => {
        setInputValue(e.target.value);
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
                    <h4>{isEditing ? <Input  value={featureOneTitle} onChange={(e) => handleInputChange(e, setFeatureOneTitle)} /> : <>{featureOneTitle}</>}</h4>
                    <div className='text-xs font-semibold text-slate-400 '>{isEditing ? <Textarea className='min-h-[300px]' value={featureOneBody} onChange={(e) => handleInputChange(e, setFeatureOneBody)} /> : <>{featureOneBody}</>}</div>
                    <div className="w-full flex gap-8 relative">
                        {isEditing ? (
                            <Button variant='ghost' className='text-slate-600 w-full relative'>
                                <Input value={featureOneLink} onChange={(e) => handleInputChange(e, setFeatureOneLink)} />
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
