import { Box, Text, Input, Button, Spinner } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { api } from "../api/api";
import { useToast } from "@chakra-ui/react";
const News = () => {
  const [values, setValues] = useState({
    image: "",
    title: "",
    information: "",
  });
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const postHandler = () => {
    if (
      values.image.length == 0 ||
      values.title.length == 0 ||
      values.information.length == 0
    ) {
      toast({
        description: "Malumot toliq emas",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    } else {
      axios
        .post(
          `${api}/api/news/create-data`,
          {
            image: `${values.image}`,
            title: `${values.title}`,
            information: `${values.information}`,
          },
          {
            headers: {
              "ngrok-skip-browser-warning": true,
              "Access-Control-Allow-Origin": "*",
            },
          }
        )
        .then((res) => {
          setValues({
            image: "",
            title: "",
            information: "",
          });
          toast({
            description: "Malumot saqlandi",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top-right",
          });
        });
    }
  };

  const handleClick = () => {
    setLoading(true);
    setInterval(() => {
      setLoading(false);
    }, 2000);
    postHandler();
  };

  return (
    <Box pl={"300px"} h={"92vh"} w={"100%"}>
      <Box w={"95%"} m={"auto"} pt={"30px"}>
        <Text fontSize={"30px"} fontWeight={"700"}>
          Add news
        </Text>
        <Box pt={"40px"} display={"flex"} alignItems={"center"} gap={"5rem"}>
          <Box display={"flex"} flexDirection={"column"} gap={"1.5rem"}>
            <Text fontSize={"22px"} color={"#ADADAE"} fontWeight={"500"}>
              Image
            </Text>
            <Text fontSize={"22px"} color={"#ADADAE"} fontWeight={"500"}>
              Title
            </Text>
            <Text fontSize={"22px"} color={"#ADADAE"} fontWeight={"500"}>
              Information
            </Text>

          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={"1rem"}
            w={"100%"}
          >
            <Input
              value={values.image}
              onChange={(e) => setValues({ ...values, image: e.target.value })}
              placeholder="image Url"
              w={"100%"}
            />
            <Input
              value={values.badge}
              onChange={(e) => setValues({ ...values, title: e.target.value })}
              placeholder="badge"
              w={"100%"}
            />
            <Input
              value={values.informationMin}
              onChange={(e) =>
                setValues({ ...values, information: e.target.value })
              }
              placeholder="InformationMin"
              w={"100%"}
            />
          </Box>
        </Box>
        <Box display={"flex"} alignItems={"right"} justifyContent={"right"}>
          <Button
            onClick={handleClick}
            mt={"30px"}
            w={"100px"}
            h={"40px"}
            color={"white"}
            _hover={""}
            bg={"#4C4C4C"}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default News;
