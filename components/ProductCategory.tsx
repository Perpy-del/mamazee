'use client';

import * as React from 'react';
import { productData } from '@/components/ProductSection/data';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { MoveLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import ProductDescriptionDialog from './ProductSection/ProductDescriptionDialog';

type Props = {
  productCategory: string;
};

const ProductCategory = ({ productCategory }: Props) => {
  const router = useRouter();

  const [hoveredProduct, setHoveredProduct] = React.useState<string | null>(
    null
  );

  const handleMouseEnter = (productName: string) => {
    if (!hoveredProduct) {
      setHoveredProduct(productName);
    }
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  return (
    <div className="md:pl-[40px] mdg:pl-20 mdg:pr-20 pt-20 bg-mzBlack">
      <div className="pl-10 pb-[50px]">
        <div
          className="flex gap-3 transition-all transform duration-300 ease-in-out text-mzLight items-center pb-7 hover:font-bold hover:text-mzGold cursor-pointer"
          onClick={() => router.push('/home/#explore')}
        >
          <MoveLeft size={15} />
          <h3 className="text-sm">Back to Explore Products</h3>
        </div>
        <h1 className="text-[30px] sm:text-[25px] text-mzLight font-[600]">
          {productCategory}
        </h1>
        <h4 className="text-mzLight pr-5">
          Hair products crafted for the best hair results
        </h4>
      </div>
      <div>
        <div className="flex justify-between flex-wrap pb-[70px] sm:pb-[30px]">
          {productData.map((product, index) => {
            const isProductHovered = hoveredProduct === product.productName;
            return (
              <div
                key={index}
                className="mx-auto lg:pb-[30px] sm:w-[230px] sm:pb-[60px] sml:w-[250px] smd:w-[300px] mdl:w-[220px] md:w-[260px] lg:w-[200px] xl:w-[220px] xxl:w-[250px] 2xl:w-[260px] hover:opacity-100"
                onMouseEnter={() => handleMouseEnter(product.productName)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="border rounded border-mzBlack w-[260px] sm:w-[230px] sml:w-[250px] smd:w-[300px] mdl:w-[220px] md:w-[260px] lg:w-[200px] xl:w-[220px] xxl:w-[250px] 2xl:w-[260px] lg:cursor-pointer relative">
                  <Image
                    src={product.productImage}
                    alt="Product Image"
                    className="object-cover rounded"
                    width={300}
                    height={300}
                    priority
                  />
                  <div className="absolute top-0 left-0 w-full h-full lg:flex items-center justify-center bg-mzBlack/70 opacity-0 transition duration-300 ease-in-out hover:opacity-100 rounded sm:hidden">
                    {isProductHovered && (
                      <Button
                        variant="mzvariant"
                        className="rounded w-[170px] absolute bottom-10 left-6 transition "
                      >
                        Add to cart
                      </Button>
                    )}
                  </div>
                </div>
                <ProductDescriptionDialog productName={product.productName} productAmt={product.productAmount} productDesc={product.productDescription} productImage={product.productImage} />
                <div className="flex items-center justify-between w-full">
                  <h3 className="text-mzLight">{product.productAmount}</h3>
                  <Button variant="mzvariant" className="rounded h-9 lg:hidden">
                    Add to cart
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="flex justify-between flex-wrap">
          {productData.map((product, index) => {
            const isProductHovered = hoveredProduct === product.productName;

            return (
              <div
                key={index}
                className="mx-auto lg:pb-[30px] sm:w-[230px] sm:pb-[60px] sml:w-[250px] smd:w-[300px] mdl:w-[220px] md:w-[260px] lg:w-[200px] xl:w-[220px] xxl:w-[250px] 2xl:w-[260px] hover:opacity-100"
                onMouseEnter={() => handleMouseEnter(product.productName)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="border rounded border-mzBlack w-[260px] sm:w-[230px] sml:w-[250px] smd:w-[300px] mdl:w-[220px] md:w-[260px] lg:w-[200px] xl:w-[220px] xxl:w-[250px] 2xl:w-[260px] lg:cursor-pointer relative">
                  <Image
                    src={product.productImage}
                    alt="Product Image"
                    className="object-cover rounded"
                    width={300}
                    height={300}
                    priority
                  />
                  <div className="absolute top-0 left-0 w-full h-full lg:flex items-center justify-center bg-mzBlack/70 opacity-0 transition duration-300 ease-in-out hover:opacity-100 rounded sm:hidden">
                    {isProductHovered && (
                      <Button
                        variant="mzvariant"
                        className="rounded w-[170px] absolute bottom-10 left-6 transition "
                      >
                        Add to cart
                      </Button>
                    )}
                  </div>
                </div>
                <ProductDescriptionDialog productName={product.productName} productAmt={product.productAmount} productDesc={product.productDescription} productImage={product.productImage} />
                <div className="flex items-center justify-between w-full">
                  <h3 className="text-mzLight">{product.productAmount}</h3>
                  <Button variant="mzvariant" className="rounded h-9 lg:hidden">
                    Add to cart
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
