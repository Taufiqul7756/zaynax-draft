"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const PromoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // Form submission handler
  const onSubmit = async (data: any) => {
    try {
      // Make a POST request to the API route
      // const response = await axios.post("/api/promo", data);
      // console.log("Response:", response.data);
    } catch (error) {
      console.error("Error creating promo:", error);
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold mb-10 flex justify-center">
          Add Promo Codes
        </h1>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto">
          <div className="mb-4">
            <label htmlFor="code" className="block">
              Promo Code:
            </label>
            <input
              type="text"
              {...register("code", { required: true })}
              id="code"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            {errors.code && (
              <span className="text-red-500">Promo code is required</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="startDate" className="block">
              Start Date:
            </label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              id="startDate"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="endDate" className="block">
              End Date:
            </label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              id="endDate"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="discountRate" className="block">
              Discount Rate (%):
            </label>
            <input
              type="number"
              {...register("discountRate", { required: true })}
              id="discountRate"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            {errors.discountRate && (
              <span className="text-red-500">Discount rate is required</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="useTime" className="block">
              Use Time:
            </label>
            <input
              type="number"
              {...register("useTime", { required: true })}
              id="useTime"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            {errors.useTime && (
              <span className="text-red-500">Use time is required</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block">
              In Stock:
              <input
                type="checkbox"
                {...register("inStock")}
                className="ml-2"
              />
            </label>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Create Promo
          </button>
        </form>
      </div>
    </div>
  );
};

export default PromoForm;
