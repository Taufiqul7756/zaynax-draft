"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Heading from "../components/Heading";
import Button from "../components/Button";
import ItemContent from "./ItemContent";
import { formatPrice } from "@/utils/formatPrice";
import { SafeUser } from "@/types";
import { FaCheckCircle } from "react-icons/fa";

interface CartClientProps {
  currentUser: SafeUser | null;
}

const CartClient: React.FC<CartClientProps> = ({ currentUser }) => {
  const { cartProducts, handleClearCart, cartTotalAmount } = useCart();
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const router = useRouter();

  const handleCheckout = () => {
    if (!currentUser) {
      router.push("/login"); // Navigate to login page if user is not logged in
    } else if (!agreedToTerms) {
      setError("You must agree to the terms and conditions");
    } else {
      setShowPopup(true);
    }
  };
  const handleCheckboxChange = () => {
    setAgreedToTerms(!agreedToTerms);

    setError("");
  };

  const discountCal = (cartTotalAmount * 15) / 100;
  const shippingCharge = 100;
  const walletDebit = 0;

  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="flex flex-col items-center">
        <div className="text-2xl">Your cart is empty</div>
        <div>
          <Link
            href={"/"}
            className="
          text-slate-500 flex items-center gap-1
          mt-2
          "
          >
            <MdArrowBack />
            <span>Start Shopping</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Heading title="Shopping Cart" center />
      <div className=" sm:grid md:grid lg:flex">
        <div className="">
          <div>
            {cartProducts &&
              cartProducts.map((item) => {
                return <ItemContent key={item.id} item={item} />;
              })}
          </div>
        </div>
        <div className="p-6 ml-10 bg-slate-100 ">
          <div className="mb-5 font-bold flex justify-center">
            ORDER SUMMARY
          </div>

          <div className="flex">
            <div className="">
              <div className="flex sm:gap-2 md:gap-6 lg:gap-10 mb-5 border-b-[2px]">
                <div>
                  <h4 className="font-bold">Subtotal:</h4>
                  <h4 className="font-bold">Discount: </h4>
                  <h4 className="font-bold">Shipping Charge:</h4>
                  <h4 className="font-bold">Wallet Debit: </h4>
                </div>
                <div>
                  <h4 className="font-xs">{formatPrice(cartTotalAmount)}</h4>
                  <h4 className="font-xs">
                    {discountCal}{" "}
                    <span className="text-xs text-yellow-500">(15%)</span>{" "}
                  </h4>
                  <h4 className="font-xs">{shippingCharge}</h4>
                  <h4 className="font-xs">{walletDebit} </h4>
                </div>
              </div>

              <div className="flex ">
                <input
                  autoComplete="off"
                  type="text"
                  placeholder="Type your code"
                  className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:bourder-[0.5px] focus:border-slate-500"
                />
                <button className=" px-5 border-[1.5px] hover:opacity-80 text-black p-2 rounded-r-md">
                  Apply
                </button>
              </div>
              <div className="border-t-[2px] mt-5">
                <h4 className="font-bold">
                  Total Payable :{" "}
                  {cartTotalAmount - discountCal + shippingCharge + walletDebit}{" "}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t-[1.5px] border-slate-200 py-4 flex justify-between gap-4">
        <div className="grid">
          <div className="w-[100px]">
            <Button
              label="Clear Cart"
              onClick={() => {
                handleClearCart();
              }}
              small
              outline
            />
          </div>
          <div>
            {error && <p className="text-red-500 text-xs ml-5">{error}</p>}
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={agreedToTerms}
                onChange={handleCheckboxChange}
              />
              <span className="text-lg">
                I agree to the{" "}
                <Link href="/terms" className="text-red-600">
                  terms and conditions
                </Link>
              </span>
            </label>
          </div>
        </div>
        <div className="text-sm flex flex-col gap-1 items-start">
          <Button
            label={currentUser ? "Checkout" : "Login To Checkout"}
            outline={currentUser ? false : true}
            onClick={handleCheckout}
          />
          <Link
            href={"/"}
            className="
          text-slate-500 flex items-center gap-1
          mt-2
          "
          >
            <MdArrowBack />
            <span>Continue Shopping</span>
          </Link>
        </div>
      </div>
      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <div className="grid gap-5">
              <div className="flex justify-center text-2xl">
                <FaCheckCircle />
              </div>
              <div>
                <p className="text-center text-black">
                  Your order placed successfully.
                </p>
              </div>
              <div className="text-center">
                <Link
                  href="/admin"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md inline-block"
                  onClick={() => {
                    handleClearCart();
                    setShowPopup(false);
                  }}
                >
                  Go to Admin Panel
                </Link>
              </div>
            </div>
            <button
              className="mt-4 mx-auto block px-4 py-2 bg-blue-500 text-white rounded-md"
              onClick={() => {
                setShowPopup(false);
              }}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartClient;
