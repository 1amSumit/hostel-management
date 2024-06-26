"use client";

import { useSearchParams } from "next/navigation";

export default function Input({ type, placeholder }) {
  const searchParams = useSearchParams();
  const activeMode = searchParams.get("user") ?? "Admin";
  return (
    <input
      type={
        activeMode === "Admin"
          ? type
          : activeMode === "Student"
          ? "text"
          : "text"
      }
      placeholder={
        activeMode === "Admin"
          ? placeholder
          : activeMode === "Student"
          ? "Enter Hostel Id"
          : "Enter Staff Id"
      }
      className="bg-transparent px-3 py-2 outline-none  placeholder:text-gray-400"
    />
  );
}
