'use client';

import Image from 'next/image';
import React from 'react';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation'
import RemoveItemDialog from '@/components/CartSection/RemoveItemDialog';

type Props = {};

const CartPage = (props: Props) => {
  const router = useRouter()

  const [itemNum, setItemNum] = React.useState<number>(1);
  const totalAmount = 400

  const decreaseItemNum = () => {
    if (itemNum > 1) setItemNum((prevItem) => prevItem - 1)
  };

  const increaseItemNum = () => {
    setItemNum(prevItem => prevItem + 1);
  };

  return (
    <>
    {/* Desktop */}
    <div className="pt-[65px] md:pl-5 md:pr-[60px] mdg:pl-16 mdg:pr-20 3xl:pl-48 3xl:pr-96 sm:hidden md:block md:min-h-screen 3xl:min-h-[50vh]">
      <div>
        <h1 className="text-mzLight text-3xl font-medium pb-10">Your cart</h1>
        <div className="flex md:flex-row sm:flex-col">
          <div className="md:w-[70%]">
            <table className="table-auto w-full">
              <thead className="border-collapse">
                <tr>
                  <th>Product</th>
                  <th className='md:block sm:hidden'>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="flex gap-5 pb-2">
                      <Image
                        src="/product_ex.svg"
                        alt="cart_image"
                        width={79}
                        height={74}
                        className="object-cover object-center"
                      />
                      <div className=''>
                        <h1 className="font-medium md:w-[80%] 3xl:w-full 3xl:text-2xl">
                          Natural Breather Hair Product
                        </h1>
                        <h3 className="md:text-sm 3xl:text-xl font-bold">$400</h3>
                      </div>
                    </div>
                    <RemoveItemDialog />
                  </td>
                  <td>
                    <div className="flex items-center justify-center mdg:px-2 py-1 gap-2 rounded mdg:border border-[#D9D9D9] md:w-[63%] mdg:w-[85%] 3xl:w-[50%]">
                      <span
                        className="md:text-xl 3xl:text-3xl px-2 hover:bg-mzTextBlack cursor-pointer"
                        onClick={decreaseItemNum}
                      >
                        -
                      </span>
                      <span className="p-1 3xl:text-2xl">{itemNum}</span>
                      <span
                        className="md:text-xl 3xl:text-3xl px-2 hover:bg-mzTextBlack cursor-pointer"
                        onClick={increaseItemNum}
                      >
                        +
                      </span>
                    </div>
                  </td>
                  <td>
                    <h3 className='3xl:text-2xl'>${totalAmount * itemNum}</h3>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="border-l border-white w-[30%] md:min-h-screen 3xl:min-h-[50vh]">
            <div className='mt-5 flex justify-between pt-5 pl-5 3xl:pl-10 border-t border-white'>
              <h2 className='font-medium 3xl:text-xl'>Subtotal</h2>
              <h2 className='font-medium 3xl:text-xl'>$20000</h2>
            </div>
            <h5 className='text-xs 3xl:text-lg font-medium text-[#A4A4A4] ml-5 3xl:ml-10 pb-14 pt-2.5'>Delivery fees not included</h5>
            <Button className='ml-5 3xl:ml-10 block mb-4 w-full h-12 rounded 3xl:text-xl' variant='mzvariant' onClick={() => router.push('/cart/checkout')}>Checkout</Button>
            <Button className='ml-5 3xl:ml-10 w-full h-12 border border-white bg-transparent rounded 3xl:text-xl' onClick={() => router.push('/#products')}>Continue Shopping</Button>
          </div>
        </div>
      </div>
    </div>

    {/* Mobile */}
    <div className='pt-[65px] md:hidden sm:block px-5'>
    <div>
        <h1 className="text-mzLight text-2xl font-medium pb-10">Your cart</h1>
        <div className="flex flex-col">
          <div>
            <table className="table-auto w-full">
              <thead className="border-collapse">
                <tr>
                  <th>Product</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="flex flex-col gap-2">
                      <Image
                        src="/product_ex.svg"
                        alt="cart_image"
                        width={79}
                        height={74}
                        className="object-cover object-center"
                      />
                      <div className='w-[90%]'>
                        <h1 className="font-medium pb-3">
                          Natural Breather Hair Product
                        </h1>
                        <h3 className="text-sm font-bold pb-3">$400</h3>
                      </div>
                    </div>
                    <RemoveItemDialog />
                  </td>
                  <td>
                    <div className="flex items-center px-1 py-1 gap-1 rounded border justify-center border-[#D9D9D9]-500 w-[90%]">
                      <span
                        className="text-xl px-2 hover:bg-mzTextBlack cursor-pointer"
                        onClick={decreaseItemNum}
                      >
                        -
                      </span>
                      <span className="p-1">{itemNum}</span>
                      <span
                        className="text-xl px-2 hover:bg-mzTextBlack cursor-pointer"
                        onClick={increaseItemNum}
                      >
                        +
                      </span>
                    </div>
                    <h3 className='mt-2.5 font-bold'>${totalAmount * itemNum}</h3>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="min-h-screen">
            <div className='mt-5 flex justify-between pt-5'>
              <h2 className='font-medium'>Subtotal</h2>
              <h2 className='font-medium'>$20000</h2>
            </div>
            <h5 className='text-xs font-medium text-[#A4A4A4] pb-14 pt-2.5'>Delivery fees not included</h5>
            <Button className='block mb-4 sm:w-full mdl:w-[70%] mdl:mx-auto h-12 rounded' variant='mzvariant' onClick={() => router.push('/cart/checkout')}>Checkout</Button>
            <Button className='sm:w-full mdl:w-[70%] h-12 mdl:mx-auto flex justify-center' variant='mzTrans' onClick={() => router.push('/#products')}>Continue Shopping</Button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CartPage;
