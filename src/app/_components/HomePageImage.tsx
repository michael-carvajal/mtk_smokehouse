import React from 'react'
import Image  from 'next/image'

function HomePageImage({scrollY}) {
  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.1}px)`,
  };
  return (
    <div style={parallaxStyle} className="absolute inset-0  md:block">
    <Image
      src="/mtk_photos/homePageImage.jpg"
      alt="MT Kisco Smokehouse background"
      layout="fill"
      objectFit="cover"
      priority
    />
  </div>
  )
}

export default HomePageImage