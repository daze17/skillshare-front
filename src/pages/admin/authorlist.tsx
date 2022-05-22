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
  Spinner,
} from "@chakra-ui/react";
import { useQuery } from "@apollo/client";
import { AUTHOR_LIST } from "@app/utils/gql";
import moment from "moment";

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
  const { data: _userList, loading }: any = useQuery(AUTHOR_LIST);
  return (
    <>
      <TableContainer>
        <Table variant="striped" colorScheme="twitter">
          <Thead>
            <Tr>
              <Th>No</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Role</Th>
              <Th>Created At</Th>
            </Tr>
          </Thead>
          <Tbody>
            {!loading &&
              _userList?.authorList.map((data: any, index: number) => (
                <Tr key={data.userid}>
                  <Td>{index + 1}</Td>
                  <Td>{data.name}</Td>
                  <Td>{data.email}</Td>
                  <Td>{data.role}</Td>
                  <Td>{moment(data.createdAt).format("MMMM Do YYYY, h:mm:ss a")}</Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AdminAuthorList;
