import type { NextPage } from "next";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const userData = [
  {
    postid: "asdfhaos1",
    postTitle: "Title",
    author: "bilguun",
    email: "bilguun889@gmail.com",
    createdAt: "2020/12/17",
  },
];

const AdminPendingPosts: NextPage = () => {
  return (
    <>
      <TableContainer>
        <Table variant="striped" colorScheme="linkedin">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>No</Th>
              <Th>Post Title</Th>
              <Th>Author</Th>
              <Th>Author Email</Th>
              <Th>Created At</Th>
              {/* <Th isNumeric>Followers</Th> */}
            </Tr>
          </Thead>
          <Tbody>
            {userData.map((data: any, index: number) => (
              <Tr key={data.userid}>
                <Td>{index + 1}</Td>
                <Td>{data.postTitle}</Td>
                <Td>{data.author}</Td>
                <Td>{data.email}</Td>
                <Td>{data.createdAt}</Td>
                {/* <Td>{data.followersCount}</Td> */}
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>No</Th>
              <Th>Post Title</Th>
              <Th>Author</Th>
              <Th>Author Email</Th>
              <Th>Created At</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
};

export default AdminPendingPosts;
