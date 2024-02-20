import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function createPromotion(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { code, startDate, endDate, discountRate, useTime, inStock } =
        req.body;

      // Create the promo in the database using Prisma
      const promotion = await prisma.promotion.create({
        data: {
          code,
          startDate,
          endDate,
          discountRate,
          useTime,
          inStock,
        },
      });

      // Respond with the created promotion
      res.status(201).json({ success: true, data: promotion });
    } catch (error) {
      console.error("Error creating promotion:", error);
      res.status(500).json({ success: false, error: "Internal server error" });
    }
  } else {
    // Handle other HTTP methods
    res.status(405).json({ success: false, error: "Method not allowed" });
  }
}
