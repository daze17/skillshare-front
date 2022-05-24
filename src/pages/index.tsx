import type { NextPage } from "next";
import { Flex, Text, List, ListItem, Button, Link } from "@chakra-ui/react";
import UserCard from "@app/common/postCard";
import Routes from "@app/routes/routers";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { POST_LIST } from "@app/utils/gql";

const Home: NextPage = () => {
  const { data: postFull } = useQuery(POST_LIST, {
    variables: {
      input: { approved: true },
    },
  });
  const Router = useRouter();
  return (
    <>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Flex alignItems={"center"}>
          <Text>Total number: {postFull?.postFullList?.length}</Text>
          <Button
            marginLeft={"50px"}
            onClick={() => Router.push(Routes.User.Addpost.route)}
          >
            Add Post
          </Button>
        </Flex>
      </Flex>
      <List>
        {postFull?.postFullList.map((item: any) => {
          return (
            <ListItem key={item?.id}>
              <Link
                onClick={() =>
                  Router.push({
                    pathname: Routes.get(Routes.Main.PostDetail.route, {
                      id: item?.id,
                    }),
                  })
                }
              >
                <UserCard data={item} />
              </Link>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default Home;
