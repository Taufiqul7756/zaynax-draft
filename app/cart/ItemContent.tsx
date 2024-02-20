"use client";

import { formatPrice } from "@/utils/formatPrice";
import { CartProductType } from "../product/[productId]/ProductDetails";
import Link from "next/link";
import { truncateText } from "@/utils/truncateText";
import Image from "next/image";
import SetQuatity from "../components/products/SetQuantity";
import { useCart } from "@/hooks/useCart";
import { RiDeleteBin6Line } from "react-icons/ri";

interface ItemContentProps {
  item: CartProductType;
}

const ItemContent: React.FC<ItemContentProps> = ({ item }) => {
  const {
    handleRemoveProductFromCart,
    handleCartQtyIncrease,
    handleCartQtyDecrease,
  } = useCart();

  console.log("itemitemitemitem", item);

  if (!item.selectedImg) {
    return null;
  }
  return (
    <div
      className="
  grid
  grid-cols-5
  text-xs
  md:text-sm
  gap-4
  border-t-[1.5px]
  border-slate-200
  py-4
  items-center
  "
    >
      <div
        className="
      col-span-2
      flex
      gap-2
      md:gap-4
      "
      >
        <Link href={`/product/${item.id}`}>
          <div className="relative w-[80px] aspect-square">
            <Image
              src={item.selectedImg.image}
              alt={item.name}
              fill
              className="object-contain"
            />
          </div>
        </Link>
        <div className="flex flex-col justify-between">
          <Link href={`/product/${item.id}`} className="font-bold text-lg">
            {truncateText(item.name)}
          </Link>
          <div className="py-5 ">
            <div className="flex gap-4 font-semibold">
              <h4>Color: {item.selectedImg.color}</h4>
              <h4>Size: XL</h4>
            </div>
            <div className="mt-3 font-semibold">
              <h4>Product Price: {formatPrice(item.price)} </h4>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex font-semibold">
          <h4>Shipping Method: EMS</h4>
        </div>
        <div className=" mt-4 font-semibold">
          <h4>Shipping Charge : {formatPrice(100)} </h4>
        </div>
      </div>

      <div className="ml-2 md:ml-5 lg:ml-10 ">
        <div className="flex gap-4 font-semibold">
          <h4>Quantity: </h4>
          <SetQuatity
            cartCounter={true}
            cartProduct={item}
            handleQtyIncrease={() => {
              handleCartQtyIncrease(item);
            }}
            handleQtyDecrease={() => {
              handleCartQtyDecrease(item);
            }}
          />
        </div>

        <div className=" font-semibold mt-4">
          Total Price: {formatPrice(item.price * item.quantity)}
        </div>
      </div>

      <div className="">
        <RiDeleteBin6Line
          className="text-slate-500 cursor-pointer ml-10"
          onClick={() => handleRemoveProductFromCart(item)}
        />
      </div>
    </div>
  );
};

export default ItemContent;
