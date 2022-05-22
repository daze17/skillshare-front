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
  Divider,
} from "@chakra-ui/react";
import PostCardUser from "@app/common/postCardUser";
import Routes from "@app/routes/routers";
import { useRouter } from "next/router";

const MyPostList: NextPage = () => {
  const Router = useRouter();
  return (
    <>
      <Heading>USER NAME</Heading>
      <Divider marginBottom={5} marginTop={5} />
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
            <PostCardUser />
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
            <PostCardUser />
          </Link>
        </ListItem>
      </List>
    </>
  );
};

export default MyPostList;
