import React from "react";
import {
  Box,
  Image,
  Flex,
  Text,
  Heading,
  Tag,
  Divider,
} from "@chakra-ui/react";

const PostCard = () => {
  return (
    <>
      <Box paddingBottom={"20px"} paddingTop={"20px"} overflow="hidden">
        <Flex>
          <Text color={"#0069ff"} fontSize={"12px"}>
            User name{" "}
          </Text>
          <Text paddingLeft={2} fontSize={"12px"}>
            {" "}
            Jan 4
          </Text>
        </Flex>
        <Heading fontSize={"24px"}>
          How To Install the Django Web Framework on Ubuntu 22.04
        </Heading>
        <Text color={"#405379"} fontSize={"14px"}>
          {" "}
          Description
        </Text>
        <Box></Box>
        <Flex>
          <Tag>tag</Tag>
          <Text marginLeft={2}>2 min read · Selected for you</Text>
        </Flex>
      </Box>
      <Divider />
    </>
  );
};

export default PostCard;
