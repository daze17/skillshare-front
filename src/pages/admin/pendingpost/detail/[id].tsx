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
    postTitle: "bilguun",
    email: "bilguun889@gmail.com",
    createdAt: "2020/12/17",
    followersCount: 50,
  },
];

const PendingPostDetail: NextPage = () => {
  return (
    <>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Created At</Th>
              <Th isNumeric>Followers</Th>
            </Tr>
          </Thead>
          <Tbody>
            {userData.map((data: any, index: number) => (
              <Tr key={data.userid}>
                <Td>{index + 1}</Td>
                <Td>{data.name}</Td>
                <Td>{data.email}</Td>
                <Td>{data.createdAt}</Td>
                <Td>{data.followersCount}</Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Created At</Th>
              <Th isNumeric>Followers</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
};

export default PendingPostDetail;
