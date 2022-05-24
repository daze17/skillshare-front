import type { NextPage } from "next";
import { Image, Button, Box, Flex, Text, Heading, Tag } from "@chakra-ui/react";
import { Markup } from "interweave";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { POST_DETAIL } from "@app/utils/gql";

const UserSummary = ({ postDetail }: any) => {
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
            <Text fontSize="16px">{postDetail?.User?.name}</Text>
            <Button height="25px" marginLeft="12px" colorScheme={"green"}>
              Follow
            </Button>
          </Flex>
          <Text color="#757575" fontSize="#757575">
            {postDetail?.createdAt} · 5 min read{" "}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};
const PostDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading } = useQuery(POST_DETAIL, {
    variables: { input: { postId: id } },
  });
  const postDetail = !loading ? data?.postDetail : {};
  return (
    <Box w={"650px"}>
      <UserSummary postDetail={postDetail} />
      <Box>
        <Heading>{postDetail?.title}</Heading>
        <Box>
        {postDetail?.tags?.map((tag: any, index: number) => (
          <Tag key={index}>{tag}</Tag>
          ))}
          </Box>
        <Markup content={postDetail?.description} />
      </Box>
    </Box>
  );
};

export default PostDetail;
