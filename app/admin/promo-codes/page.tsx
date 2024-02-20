"use client";

import { useEffect, useState } from "react";

interface PromoCode {
  code: string;
  createdDate: string;
  endDate: string;
  usages: number;
  discountRate: number;
  active: boolean;
}

const PromoCodes = () => {
  const [promoCodes, setPromoCodes] = useState<PromoCode[]>([]);

  // Example data for promo codes
  const examplePromoCodes: PromoCode[] = [
    {
      code: "PROMO123",
      createdDate: "2024-02-20",
      endDate: "2024-03-20",
      usages: 50,
      discountRate: 15,
      active: true,
    },
    {
      code: "ZAYNAX50",
      createdDate: "2024-01-15",
      endDate: "2024-02-15",
      usages: 100,
      discountRate: 20,
      active: false,
    },
    // Add more promo codes here if needed
  ];

  useEffect(() => {
    // Simulate fetching promo codes from API
    // Replace this with actual API call
    setPromoCodes(examplePromoCodes);
  }, []);

  return (
    <div className="mt-20 ml-10">
      <h1 className="text-2xl font-semibold mb-10 flex justify-center">
        Promo Codes
      </h1>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Promo Code</th>
            <th className="px-4 py-2">Created Date</th>
            <th className="px-4 py-2">End Date</th>
            <th className="px-4 py-2">Usages</th>
            <th className="px-4 py-2">Discount Rate (%)</th>
            <th className="px-4 py-2">Active Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {promoCodes.map((promoCode, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{promoCode.code}</td>
              <td className="border px-4 py-2">{promoCode.createdDate}</td>
              <td className="border px-4 py-2">{promoCode.endDate}</td>
              <td className="border px-4 py-2">{promoCode.usages}</td>
              <td className="border px-4 py-2">{promoCode.discountRate}</td>
              <td className="border px-4 py-2">
                {promoCode.active ? "Active" : "Inactive"}
              </td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 text-white py-1 px-2 rounded-md">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PromoCodes;
