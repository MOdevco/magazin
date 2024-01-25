import { Box, Text, Input, Button } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
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
import { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../api/api";
const Users = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`${api}/api/auth/user/get-user`, {
      headers: {
        "ngrok-skip-browser-warning": true,
        "Access-Control-Allow-Origin": "*",
    }
    }).then((res) => {
      setData(res.data.data)
    })
  }, [api])
  console.log(data);
  return (
    <Box w={"95%"} m={"auto"} pl={"300px"} pt={"50px"}>
      <TableContainer border={"1px solid #ADADAE"} rounded={"12px"}>
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Username</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) =>(
            <Tr>
              <Td>{item.name}</Td>
              <Td>{item.username}</Td>
              <Td>
                {" "}
                <Button _hover="" bg={"red"} variant="solid">
                  <DeleteIcon />
                </Button>
              </Td>
            </Tr>

            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Users;
