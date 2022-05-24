import type { NextPage } from "next";
import { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Tag,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  // Lorem,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useQuery, useMutation } from "@apollo/client";
import { POST_LIST, APPROVE_POST } from "@app/utils/gql";
import moment from "moment";

const AdminPendingPosts: NextPage = () => {
  const [postId, setPostId] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: postFull, refetch } = useQuery(POST_LIST, {
    variables: {
      input: { approved: false },
    },
  });
  const [approvePost] = useMutation(APPROVE_POST, {
    fetchPolicy: "no-cache",
    onCompleted: async () => {
      refetch()
      onClose()
    },
    onError: (error) => console.log(error, "login failed"),
  });

  const onConfirm = () => {
    approvePost({
      variables: {
        input: {
          postId: postId,
        },
      },
    });
  };

  const modalClick = (data: any) => {
    onOpen();
    setPostId(data?.id);
  };
  return (
    <>
      <TableContainer>
        <Table variant="striped" colorScheme="linkedin">
          <Thead>
            <Tr>
              <Th>No</Th>
              <Th>Post title</Th>
              <Th>Author name</Th>
              <Th>Author email</Th>
              <Th>Post tags</Th>
              <Th>Approval status</Th>

              <Th>Created At</Th>
              {/* <Th isNumeric>Followers</Th> */}
            </Tr>
          </Thead>
          <Tbody>
            {postFull?.postFullList.map((data: any, index: number) => (
              <Tr key={data.userid} onClick={() => modalClick(data)}>
                <Td>{index + 1}</Td>
                <Td>{data?.title}</Td>
                <Td>{data?.User?.name}</Td>
                <Td>{data?.User?.email}</Td>
                <Td>
                  {data?.tags.map((tag: any, index: number) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </Td>
                <Td>{data?.approved.toString()}</Td>
                <Td>
                  {moment(data.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
                </Td>

                {/* <Td>{data.followersCount}</Td> */}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Hello</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Lorem count={2} /> */}
            Approve post
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" onClick={onConfirm}>
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AdminPendingPosts;
