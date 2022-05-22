import prisma from "../../lib/prisma";

export const getUserDetail = async (context: any) => {
  try {
    const { user } = context;
    const userdata = await prisma.user.findFirst({
      where: { id: user.userId },
    });
    console.log(userdata);
    return userdata;
  } catch (error) {
    console.log(error);
  }
};

export const authorListQuery = async () => {
  try {
    const authorList = await prisma.user.findMany({
      orderBy: [
        {
          createdAt: "desc",
        },
      ],
    });
    console.log(authorList, "hehe");
    return authorList;
  } catch (error) {
    console.log(error);
  }
};

export const postFullListQuery = async (input: any) => {
  try {
    const data = {
      id: true,
      tags: true,
      title: true,
      approved: true,
      createdAt: true,
      updatedAt: true,
      description: true,
    };
    console.log(input, "input");
    const { approved } = input;
    let list;
    if (approved) {
      list = await prisma.post.findMany({
        where: { approved: true },
        select: {
          User: true,
          ...data,
        },
      });
    } else {
      list = await prisma.post.findMany({
        where: { approved: false },
        select: {
          User: true,
          ...data,
        },
      });
    }

    console.log(list, "list");
    return list;
  } catch (error) {
    console.log(error);
  }
};
