"use server";
import { getAllStoresByUserId } from "@/data/store";

export const isAdmin = async (
  id: string | undefined | null,
  userId: string | undefined
) => {
  if (!userId) return { error: "Not Authenticated!" };
  const stores = await getAllStoresByUserId(userId);
  const bool = stores.some((store) => store.id === id);
  console.log("Bool:", bool);
  return bool;
};
