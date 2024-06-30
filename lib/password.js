import bcrypt from "bcrypt";
import prisma from "./db";

export const saltAndHashPassword = (password) => {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
};

export const getUserFromDb = async (email, password) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }

    return null;
  } catch (error) {
    console.error("Error fetching user from database:", error);
    throw error;
  }
};
