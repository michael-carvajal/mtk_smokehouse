import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import React from 'react'
import { Button } from '~/components/ui/button'
import { api } from '~/utils/api'

function FeaturedOne() {
    const { isLoading, data: homePage } = useQuery({
        queryKey: ['homePage'],
        queryFn: () => api.getHomePage(),
    })
    console.log('homepage data ====>' ,homePage);
    if (isLoading) {
        return <div>Loading....</div>
    }
    return (
        
            <div className='flex gap-8 flex-col md:flex-row'>
                <div className='flex flex-col flex-1 gap-7 max-w-72'>
                    <div className='flex justify-center items-center h-60 my-0 mt-4 rounded mx-auto bg-red-400 w-full'>Imgage</div>
                    <h4>{homePage.featureOneTitle}</h4>
                    <div className='text-xs font-semibold text-slate-400 '>{homePage.featureOneBody}</div>
                    <Link href='/products'><Button variant='ghost' className='text-slate-600'>{homePage.featureOneLink}</Button></Link>
                </div>

                <div className='flex flex-col flex-1 gap-7 max-w-72'>
                    <div className='flex justify-center items-center h-60 my-0 mt-4 rounded mx-auto bg-red-400 w-full'>Imgage</div>
                    <h4>{homePage.featureTwoTitle}</h4>
                    <div className='text-xs font-semibold text-slate-400'>{homePage.featureTwoBody}</div>
                    <Link href='/products'><Button variant='ghost' className='text-slate-600'>{homePage.featureTwoLink}</Button></Link>
                </div>
            </div>
    )
}

export default FeaturedOne