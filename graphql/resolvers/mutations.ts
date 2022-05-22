import prisma from "../../lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ApolloError } from "apollo-server";
import { config } from "@app/config";

export const addUserMutation = async (data: any) => {
  const { name, email, password } = data;

  const passwordHash = await bcrypt.hash(password, 10);
  try {
    const duplicatedEmail = await prisma.user.findMany({
      where: { email },
    });
    console.log(duplicatedEmail, "duplicatedEmail");
    if (duplicatedEmail.length) throw new ApolloError("duplicated email");
    const addedUserData = await prisma.user.create({
      data: { name, email, password: passwordHash },
    });
    console.log(addedUserData, "addedUserData");
    return true;
  } catch (error) {
    console.log(error);
    throw new ApolloError("system error");
  }
};
export const loginMutation = async (data: any) => {
  try {
    const { email, password } = data;
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    console.log(user, "test");
    if (!user) throw new ApolloError("user not found");
    const passwordMatch = await bcrypt.compare(password, user?.password);
    console.log(!passwordMatch);
    if (!passwordMatch) throw new ApolloError("wrong password");
    console.log(user, "user");
    const accessToken = jwt.sign(
      {
        userId: user?.id,
        name: user?.name,
      },
      config.APP_SECRET,
      {
        expiresIn: 7 * 24 * 60 * 60 * 1000,
      }
    );
    console.log(accessToken);
    return { accessToken };
  } catch (error) {
    console.log(error);
    throw new ApolloError("system error");
  }
};
