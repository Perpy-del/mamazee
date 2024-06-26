/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay"
import { carouselImages } from './data';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type Props = {};

const HeroSection = (props: Props) => {
  const router = useRouter();

  const plugin = React.useRef(
    Autoplay({ delay: 3000 })
  )

  return (
    <div className="pl-[15px] flex sm:flex-col sm:pt-[85px] sm:gap-10 z-0 sm:justify-between sm:px-[20px] md:flex-row md:gap-5 md:items-center md:justify-between md:mr-[40px] lg:pt-[60px] xl:gap-5 xl:pt-[10px] 2xl:pl-[200px] mdg:pt-[40px] 2xl:gap-0 2xl:pr-[300px] 2xl:pt-[40px] 2xl:justify-around mdl:items-center">
      <div className="flex sm:flex-col gap-5 sm:items-center sm:pb-[40px] md:items-start 2xl:gap-10">
        <h1 className="sm:text-[30px] leading-tight font-[800] sm:text-center sm:w-[90%] md:text-left md:text-[25px] lg:text-[36px] xl:text-[50px] xl:w-[80%]">
          Gorgeous Hair is the Best Revenge
        </h1>
        <h4 className="text-mzTextLight text-[18px] sm:text-[16px] sm:w-[90%] smd:w-[55%] pb-3 sm:text-center md:text-left md:w-[75%] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 2xl:w-[65%]">
          Natural hair products that replenish your hair leaving it beautiful
          and soft
        </h4>
        <Button variant="mzvariant" size="mzsize" onClick={() => {router.push('/#products')}}>
          Shop now
        </Button>
      </div>
      <div className='border-mzBlack sm:ml-[-10px] sm:mr-[-1px] md:mr-[50px] xl:mr-[60px]'>
        <Carousel
          plugins={[plugin.current]}
          className="w-full md:max-w-[550px] 2xl:max-w-[700px] mdl:max-w-[500px]"
        >
          <CarouselContent className='border-mzBlack'>
            {carouselImages.map((carousel, index) => (
              <CarouselItem key={index} className='xl:w-[580px]'>
                <div className="">
                  <Card className='bg-mzBlack border-mzBlack'>
                    <CardContent className="">
                      <span className="">
                        <Image alt='carousel_image' src={carousel.image} className='border-mzBlack bg-mzBlack' width={550} height={550} priority />                        
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious variant="ghost" />
          <CarouselNext variant="ghost" />
        </Carousel>
      </div>
    </div>
  );
};

export default HeroSection;
