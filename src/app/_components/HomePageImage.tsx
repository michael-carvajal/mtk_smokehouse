import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import HomePageBGImage from "public/mtk_photos/homePageImage.jpg"

function HomePageImage() {
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.addEventListener('scroll', handleScroll);
        } else {
          window.removeEventListener('scroll', handleScroll);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(imageRef.current);

    function handleScroll() {
      const offset = window.scrollY * 0.05;
      setParallaxOffset(offset);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const parallaxStyle = {
    transform: `translateY(${parallaxOffset}px)`,
  };

  return (
    <div ref={imageRef} style={parallaxStyle} className="absolute inset-0">
      <Image
        src={HomePageBGImage}
        alt="MT Kisco Smokehouse background"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}

export default HomePageImage;
