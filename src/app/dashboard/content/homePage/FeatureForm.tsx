'use client'

import { Edit } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { useMutation, useQuery } from '@tanstack/react-query'
import { api } from '~/utils/api'
import { Textarea } from '~/components/ui/textarea'
import UploadImage from './UploadImage'
import Image from 'next/image'

function FeatureForm() {
    // Fetching the data using React Query
    const { isLoading, data: homePage } = useQuery({
        queryKey: ['homePage'],
        queryFn: () => api.getHomePage(),
    });

    // State to hold the feature values
    const [featureOneTitle, setFeatureOneTitle] = useState("");
    const [featureOneBody, setFeatureOneBody] = useState("");
    const [featureOneLink, setFeatureOneLink] = useState("");
    const [featureOneImageLink, setFeatureOneImageLink] = useState("");
    // State to hold the feature 2 values
    const [featureTwoTitle, setFeatureTwoTitle] = useState("");
    const [featureTwoBody, setFeatureTwoBody] = useState("");
    const [featureTwoLink, setFeatureTwoLink] = useState("");
    const [featureTwoImageLink, setFeatureTwoImageLink] = useState("");
    const [isEditing, setIsEditing] = useState(false);

    // Use useEffect to update the state when homePage data is available
    useEffect(() => {
        if (homePage) {
            setFeatureOneTitle(homePage.featureOneTitle || "Default Title");
            setFeatureOneBody(homePage.featureOneBody || "Default Body");
            setFeatureOneLink(homePage.featureOneLink || "Default Link");
            setFeatureOneImageLink(homePage.featureOneImageLink || "Default Link");
            setFeatureTwoTitle(homePage.featureTwoTitle || "Default Title");
            setFeatureTwoBody(homePage.featureTwoBody || "Default Body");
            setFeatureTwoLink(homePage.featureTwoLink || "Default Link");
            setFeatureTwoImageLink(homePage.featureTwoImageLink || "Default Link");
        }
    }, [homePage]);

    const mutationFeatureOne = useMutation({
        mutationFn: api.updateHomePage,
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ['homePageFeatureOne'] });
        },
    });

    const mutationFeatureTwo = useMutation({
        mutationFn: api.updateHomePage,
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ['homePageFeatureTwo'] });
        },
    });

    const handleInputChange = (e, setInputValue) => {
        setInputValue(e.target.value);
    };

    if (isLoading) {
        return <div>Loading....</div>;
    }

    return (
        <>
            <Card x-chunk="dashboard-04-chunk-1">
                <CardHeader>
                    <CardTitle>Featured 1 Preview</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col flex-1 gap-7 max-w-72 relative">
                    <Edit onClick={() => setIsEditing(!isEditing)} className="absolute -right-20 cursor-pointer" />
                        <div onClick={() => setIsEditing(!isEditing)} className="absolute -right-20 cursor-pointer" />
                        <div className="flex justify-center items-center h-60 my-0 mt-4 rounded mx-auto w-full">
                            {isEditing ? (
                                <UploadImage setFeatureImageLink={setFeatureOneImageLink} />
                            ) : (
                                <div className="relative aspect-[4/3] w-full md:h-[190px]">
                                    <Image alt="featured one of salmon" src={featureOneImageLink} fill className="object-cover rounded-lg" loading="lazy" />
                                </div>
                            )}
                        </div>
                        <h4>
                            {isEditing ? <Input value={featureOneTitle} onChange={(e) => handleInputChange(e, setFeatureOneTitle)} /> : <>{featureOneTitle}</>}
                        </h4>
                        <div className="text-xs font-semibold text-slate-400">
                            {isEditing ? <Textarea className="min-h-[300px]" value={featureOneBody} onChange={(e) => handleInputChange(e, setFeatureOneBody)} /> : <>{featureOneBody}</>}
                        </div>
                        <div className="w-full flex gap-8">
                            {isEditing ? (
                                <Button variant="ghost" className="text-slate-600 w-full relative">
                                    <Input value={featureOneLink} onChange={(e) => handleInputChange(e, setFeatureOneLink)} />
                                </Button>
                            ) : (
                                <a href={featureOneLink}>
                                    <Button className="text-slate-600 bg-amber-100 hover:bg-amber-200 px-2">
                                        {featureOneLink}
                                    </Button>
                                </a>
                            )}
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                    <Button onClick={() => mutationFeatureOne.mutate({ featureOneTitle, featureOneBody, featureOneLink, featureOneImageLink })}>
                        Save
                    </Button>
                    {mutationFeatureOne.isError && <div className="text-slate-900 ml-12">Successfully updated feature</div>}
                </CardFooter>
            </Card>
            <Card x-chunk="dashboard-04-chunk-1">
                <CardHeader>
                    <CardTitle>Featured 2 Preview</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col flex-1 gap-7 max-w-72 relative">
                        <div onClick={() => setIsEditing(!isEditing)} className="absolute -right-20 cursor-pointer" />
                        <div className="flex justify-center items-center h-60 my-0 mt-4 rounded mx-auto w-full">
                            {isEditing ? (
                                <UploadImage setFeatureImageLink={setFeatureTwoImageLink} />
                            ) : (
                                <div className="relative aspect-[4/3] w-full md:h-[190px]">
                                    <Image alt="featured one of salmon" src={featureTwoImageLink} fill className="object-cover rounded-lg" loading="lazy" />
                                </div>
                            )}
                        </div>
                        <h4>
                            {isEditing ? <Input value={featureTwoTitle} onChange={(e) => handleInputChange(e, setFeatureTwoTitle)} /> : <>{featureTwoTitle}</>}
                        </h4>
                        <div className="text-xs font-semibold text-slate-400">
                            {isEditing ? <Textarea className="min-h-[300px]" value={featureTwoBody} onChange={(e) => handleInputChange(e, setFeatureTwoBody)} /> : <>{featureTwoBody}</>}
                        </div>
                        <div className="w-full flex gap-8 relative">
                            {isEditing ? (
                                <Button variant="ghost" className="text-slate-600 w-full relative">
                                    <Input value={featureTwoLink} onChange={(e) => handleInputChange(e, setFeatureTwoLink)} />
                                </Button>
                            ) : (
                                <a href={featureTwoLink}>
                                    <Button className="text-slate-600 bg-amber-100 hover:bg-amber-200 px-2">
                                        {featureTwoLink}
                                    </Button>
                                </a>
                            )}
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                    <Button disabled={mutationFeatureTwo.isPending} onClick={() => mutationFeatureTwo.mutate({ featureTwoTitle, featureTwoBody, featureTwoLink, featureTwoImageLink })}>
                        Save
                    </Button>
                    {mutationFeatureTwo.isError && <div className="text-slate-900 ml-12">Successfully updated feature</div>}
                </CardFooter>
            </Card>
        </>
    );
}

export default FeatureForm;
