"use client";
import { useSearchParams } from "next/navigation";

export default function NewVerifiationPage() {
  const params = useSearchParams();
  const token = params.get("token");
  return <div></div>;
}
