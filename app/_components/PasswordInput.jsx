"use client";

import { useSearchParams } from "next/navigation";

export default function PasswordInput({ type, placeholder }) {
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
      placeholder={placeholder}
      className="bg-transparent px-3 py-2 outline-none  placeholder:text-gray-400"
    />
  );
}
