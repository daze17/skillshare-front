import type { NextPage } from "next";
import { Image, Button, Box, Flex, Text } from "@chakra-ui/react";
import { Markup } from 'interweave';

const UserSummary = () => {
  return (
    <Flex justifyContent={"space-between"} marginBottom="30px">
      <Flex>
        <Image
          src={"/images/pfp.jpeg"}
          alt="pfp"
          width={50}
          height={50}
          borderRadius="50%"
        />
        <Box marginLeft="12px">
          <Flex>
            <Text fontSize="16px">Name bnasdf</Text>
            <Button height="25px" marginLeft="12px" colorScheme={"green"}>
              Follow
            </Button>
          </Flex>
          <Text color="#757575" fontSize="#757575">
            Jan 25 · 5 min read{" "}
          </Text>
        </Box>
      </Flex>
   
    </Flex>
  );
};
const PostDetail: NextPage = () => {
  const test = `<p>fsadfdsaf<strong>fdsafsadf</strong></p>\n`;
  return (
    <Box w={"650px"}>
      <UserSummary />
      <Image src={"/images/pfp.jpeg"} alt="pfp" />
      <Box>
        {/* <td dangerouslySetInnerHTML={{ __html: test }} /> */}
        <Markup content={test} />
      </Box>
    </Box>
  );
};

export default PostDetail;
