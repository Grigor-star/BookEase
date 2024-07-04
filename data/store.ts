import { db } from "@/lib/db";

export const getStoreById = async (id: string | null) => {
  if (!id) return { error: "Something went wrong!" };
  const response = await db.store.findUnique({ where: { id } });
  return response;
};

export const getAllStoresByUserId = async (userId: string) => {
  return await db.store.findMany({ where: { userId } });
};
