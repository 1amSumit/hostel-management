"use server";

import prisma from "@/lib/db";
import { redirect } from "next/navigation";

export const login = async (formData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  const existingUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!existingUser) {
    throw new Error("User not found");
  }

  redirect("/");
};

export const register = async (formData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  const existingUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  await prisma.user.create({
    data: {
      email: email,
      password: password,
      role: "student",
      created_at: new Date(),
    },
  });
};
