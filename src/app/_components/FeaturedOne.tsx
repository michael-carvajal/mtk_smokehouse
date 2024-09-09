import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '~/components/ui/button'
import { api } from '~/utils/api'

function FeaturedOne() {
    const { isLoading, data: homePage } = useQuery({
        queryKey: ['homePage'],
        queryFn: () => api.getHomePage(),
    })
    console.log('homepage data ====>', homePage);
    if (isLoading) {
        return <div>Loading....</div>
    }
    return (

        <div className='flex gap-8 md:gap-40 mt-12 flex-col md:flex-row'>
            <div className='flex flex-col flex-1 gap-7 max-w-72'>
                <div className="relative aspect-[4/3] w-full md:h-[190px]">
                    <Image alt='featured one of salmon' src={homePage.featureOneImageLink} fill
                        className="object-cover rounded-lg" loading='lazy' />
                </div>
                <h4>{homePage.featureOneTitle}</h4>
                <div className='text-xs font-semibold text-slate-400 '>{homePage.featureOneBody}</div>
                <Link href='/products'><Button variant='ghost' className='text-slate-600'>{homePage.featureOneLink}</Button></Link>
            </div>

            <div className='flex flex-col flex-1 gap-7 max-w-72'>
                <div className="relative aspect-[4/3] w-full md:h-[190px]">
                    <Image alt='featured one of salmon' src={homePage.featureTwoImageLink} fill
                        className="object-cover rounded-lg" loading='lazy' />
                </div>
                <h4>{homePage.featureTwoTitle}</h4>
                <div className='text-xs font-semibold text-slate-400'>{homePage.featureTwoBody}</div>
                <Link href='/products'><Button variant='ghost' className='text-slate-600'>{homePage.featureTwoLink}</Button></Link>
            </div>
        </div>
    )
}

export default FeaturedOne