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
    userid: "asdfhaos1",
    name: "bilguun",
    email: "bilguun889@gmail.com",
    createdAt: "2020/12/17",
    Posts: 60,
    followersCount: 50,
  },
  {
    userid: "asdfhaos2",
    name: "bilguun",
    email: "bilguun889@gmail.com",
    createdAt: "2020/12/17",
    Posts: 60,
    followersCount: 50,
  },
  {
    userid: "asdfhaos3",
    name: "bilguun",
    email: "bilguun889@gmail.com",
    createdAt: "2020/12/17",
    Posts: 60,
    followersCount: 50,
  },
  {
    userid: "asdfhaos4",
    name: "bilguun",
    email: "bilguun889@gmail.com",
    createdAt: "2020/12/17",
    Posts: 60,
    followersCount: 50,
  },
];

const AdminAuthorList: NextPage = () => {
  return (
    <>
      <TableContainer>
        <Table variant="striped" colorScheme="twitter">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>No</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th isNumeric>Posts</Th>
              <Th isNumeric>Followers</Th>
              <Th>Created At</Th>
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
              <Th isNumeric>Posts</Th>
              <Th isNumeric>Followers</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
};

export default AdminAuthorList;
