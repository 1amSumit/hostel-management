"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Select() {
  const [currentLogin, setCurrentLogin] = useState("Admin");
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const handleChange = (e) => {
    const newLogin = e.target.value;
    setCurrentLogin(newLogin);

    const params = new URLSearchParams(searchParams.toString());
    params.set("user", newLogin);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  };

  return (
    <select
      value={currentLogin}
      onChange={handleChange}
      className="w-full bg-transparent outline-none"
    >
      <option value="Admin">Admin</option>
      <option value="Student">Student</option>
      <option value="Staff">Staff</option>
    </select>
  );
}
