import React from 'react'
import { Button } from '~/components/ui/button'

function FeaturedOne() {
    return (
        <div className='text-slate-800 flex flex-col gap-8 justify-center items-center flex-1 mx-10'>
            <h1>OUR SMOKED SALMON</h1>
            <h3>Whole sides, sliced sides, 1lb packs, 8oz packs, 4oz packs, and smoked salmon loin</h3>
            <div className='flex gap-8'>
                <div className='flex flex-col flex-1 gap-7'>
                    <div className='flex justify-center items-center h-60 my-0 mt-4 rounded mx-auto bg-red-400 w-full'>Imgage</div>
                    <h4>SMOKEHOUSE GOLD LABEL</h4>
                    <div className='text-sm'>Our Gold Label is what made MT. Kisco Smokehouse what it is today. With its rich, buttery texture and sweet lacing of fruit-wood smoke, it accounts for most of our smoked salmon sales. Smoked with the perfect blend of apple and cherry woods, our salmon is praised for its delicate smoked flavor and silky texture. Our salmon comes from the best aquaculture farms located in the the icy Northern Atlantic off the coast of Scotland. We receive daily deliveries of fresh Atlantic salmon flown in directly from the farms fresh, never frozen, giving it an amazingly silky texture, and rich, deep orange color.</div>
                    <Button variant='ghost' className='text-slate-600'>SHOP FOR GOLD LABEL SMOKED SALMON</Button>
                </div>

                <div className='flex-1'>right side</div>
            </div>
        </div>
    )
}

export default FeaturedOne