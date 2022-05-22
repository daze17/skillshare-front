import type { NextPage } from "next";
import { useUserContext } from "@app/config/userProvider";
import { Box, Text, Heading, List, ListItem } from "@chakra-ui/react";
import moment from "moment";

const MyDetails: NextPage = () => {
  const { user }: any = useUserContext();
  return (
    <Box>
      <Text>
        <List>
          <ListItem>
            <Heading>{user?.name}</Heading>
          </ListItem>
          <ListItem>email: {user?.email}</ListItem>
          <ListItem>role: {user?.role}</ListItem>
          <ListItem>member since: {moment(user.createdAt).format("MMMM Do YYYY")}</ListItem>
        </List>
      </Text>
    </Box>
  );
};

export default MyDetails;
