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

const PostCard = ({ data }: any) => {
  return (
    <>
      <Box
        paddingBottom={"20px"}
        paddingTop={"20px"}
        overflow="hidden"
        w={"600px"}
      >
        <Flex>
          <Text color={"#0069ff"} fontSize={"12px"}>
            {data?.User?.name}
          </Text>
          <Text paddingLeft={2} fontSize={"12px"}>
            {data?.createdAt}
          </Text>
        </Flex>
        <Heading fontSize={"24px"}>{data?.title}</Heading>
        <Text color={"#405379"} fontSize={"14px"}>
          {" "}
          {data?.description}
        </Text>
        <Box></Box>
        <Flex>
          {data?.tags.map((tag: any, index: number) => (
            <Tag key={index}>{tag}</Tag>
          ))}
          <Text marginLeft={2}>2 min read · Selected for you</Text>
        </Flex>
      </Box>
      <Divider />
    </>
  );
};

export default PostCard;
