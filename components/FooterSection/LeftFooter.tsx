/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { BsWhatsapp, BsInstagram } from 'react-icons/bs';
import { AiOutlineYoutube } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FiTwitter } from 'react-icons/fi';
import { TbBrandTiktok } from 'react-icons/tb';
import Image from 'next/image';

type Props = {};

const LeftFooter = (props: Props) => {
  return (
    <div className="text-mzTextFooter xl:w-[300px] sm:w-[250px] sml:w-[90vw] md:w-[70%] 3xl:w-[40%]">
      <a href="/" className="-ml-[20px]">
        <Image src="/mz_logo_white.svg" alt="Mamazee White Logo" width={135} height={48} priority />
      </a>
      <h3 className="py-[20px] pl-[20px] text-justify text-[14px] 3xl:w-[75%]">
        Our overall objective is to enhance your hair texture and length while
        making sure that your hair growth goals are met and exceeded because
        Mamazee&apos;s hair products exist to make you happy.
      </h3>
      <div className="flex gap-4 pl-[20px] items-center">
        <a href="#" className='hover:transition-transform hover:scale-110 ease-in-out duration-500'>
          <BsWhatsapp className='hover:text-mzGold' />
        </a>
        <a href="" className='hover:transition-transform hover:scale-110 ease-in-out duration-500'>
          <AiOutlineYoutube className='text-[20px] hover:text-mzGold' />
        </a>
        <a href="" className='hover:transition-transform hover:scale-110 ease-in-out duration-500'>
          <BsInstagram className='hover:text-mzGold' />
        </a>
        <a href="" className='hover:transition-transform hover:scale-110 ease-in-out duration-500'>
          <FaLinkedinIn className='hover:text-mzGold' />
        </a>
        <a href="" className='hover:transition-transform hover:scale-110 ease-in-out duration-500'>
          <FiTwitter className='hover:text-mzGold' />
        </a>
        <a href="" className='hover:transition-transform hover:scale-110 ease-in-out duration-500'>
          <TbBrandTiktok className='hover:text-mzGold' />
        </a>
      </div>
      <h5 className="pb-[50px] pt-[20px] pl-[20px] text-[10px]">
        © mamazee 2024, All Rights Reserved.
      </h5>
    </div>
  );
};

export default LeftFooter;
