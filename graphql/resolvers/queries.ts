import prisma from "../../lib/prisma";

export const getUserDetail = async (context: any) => {
  try {
    const { user } = context;
    console.log(context.user, "user data");
    const userdata = await prisma.user.findFirst({
      where: { id: user.userId },
    });
    console.log(userdata);
    return userdata;
  } catch (error) {
    console.log(error);
  }
};

export const testLink = async (data: any, context: any) => {
  try {
    console.log(data, "data");
    // console.log(context, "ctx");
    const hehe = await prisma.link.findMany();
    return hehe;
  } catch (error) {
    console.log(error);
  }
};
