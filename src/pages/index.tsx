import PostCard from "@app/common/postCard";
import type { NextPage } from "next";
import {
  Box,
  Flex,
  Heading,
  Grid,
  GridItem,
  Text,
  List,
  ListItem,
  Button,
  Link,
} from "@chakra-ui/react";
import UserCard from "@app/common/postCard";
import Head from "next/head";
import Image from "next/image";
import Routes from "@app/routes/routers";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const Router = useRouter();
  return (
    <>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Flex alignItems={"center"}>
          <Text>Tutorial number</Text>
          <Button
            marginLeft={"50px"}
            onClick={() => Router.push(Routes.User.Addpost.route)}
          >
            Add Post
          </Button>
        </Flex>
        <Text>bas bus</Text>
      </Flex>
      <List>
        <ListItem>
          <Link
            onClick={() =>
              Router.push({
                pathname: Routes.get(Routes.Main.PostDetail.route, {
                  id: "item?.id",
                }),
              })
            }
          >
            <UserCard />
          </Link>
        </ListItem>
        <ListItem>
          <Link
            onClick={() =>
              Router.push({
                pathname: Routes.get(Routes.Main.PostDetail.route, {
                  id: "item?.id",
                }),
              })
            }
          >
            <UserCard />
          </Link>
        </ListItem>
      </List>
    </>
  );
};

export default Home;
