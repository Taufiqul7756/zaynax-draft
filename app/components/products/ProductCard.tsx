"use client";

import { useState } from "react";
import { formatPrice } from "@/utils/formatPrice";
import { truncateText } from "@/utils/truncateText";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  data: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();

  console.log("Data", data);

  return (
    <div>
      <div
        onClick={() => router.push(`/product/${data.id}`)}
        className="col-span-1
    cursor-pointer
    border-[1.2px]
    border-slate-200
    bg-slate-50
    rounded-sm
    p-2
    transition
    hover:scale-105
    text-center
    text-sm
    "
      >
        <div
          className="
      flex
      flex-col
      items-center
      w-full
      gap-1
      "
        >
          <div className="aspect-square overflow-hidden relative w-full">
            <Image
              fill
              src={data.images[0].image}
              alt={data.name}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="mb-4">{truncateText(data.name)}</div>
        </div>
        <div className="flex justify-between p-2">
          <div className="font-semibold">{formatPrice(data.price)}</div>
          <div className="bg-yellow-500 px-2">
            <h1>15%</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
