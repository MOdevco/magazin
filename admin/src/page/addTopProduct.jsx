import { Box, Text, Input, Button, Spinner } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { api } from "../api/api";
import { useToast } from "@chakra-ui/react";
const AddTopProduct = () => {
  const [values, setValues] = useState({
    image: "",
    badge: "",
    name: "",
    informationMin: "",
    informationMax: "",
    originalCost: "",
    currentCost: "",
    rate: "",
  });
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const postHandler = () => {
    if (
      values.image.length == 0 ||
      values.badge.length == 0 ||
      values.name.length == 0 ||
      values.informationMin.length == 0 ||
      values.informationMax.length == 0 ||
      values.originalCost.length == 0 ||
      values.currentCost.length == 0 ||
      values.rate.length == 0
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
          `${api}/api/product/create-data`,
          {
            image: `${values.image}`,
            badge: `${values.badge}`,
            name: `${values.name}`,
            informationMin: `${values.informationMin}`,
            informationMax: `${values.informationMax}`,
            originalCost: `${values.originalCost}`,
            currentCost: `${values.currentCost}`,
            rate: `${values.rate}`,
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
            badge: "",
            name: "",
            informationMin: "",
            informationMax: "",
            originalCost: "",
            currentCost: "",
            rate: "",
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
          Add top product
        </Text>
        <Box pt={"40px"} display={"flex"} alignItems={"center"} gap={"5rem"}>
          <Box display={"flex"} flexDirection={"column"} gap={"1.5rem"}>
            <Text fontSize={"22px"} color={"#ADADAE"} fontWeight={"500"}>
              Image
            </Text>
            <Text fontSize={"22px"} color={"#ADADAE"} fontWeight={"500"}>
              Badge
            </Text>
            <Text fontSize={"22px"} color={"#ADADAE"} fontWeight={"500"}>
              Name
            </Text>
            <Text fontSize={"22px"} color={"#ADADAE"} fontWeight={"500"}>
              InformationMin
            </Text>
            <Text fontSize={"22px"} color={"#ADADAE"} fontWeight={"500"}>
              InformationMax
            </Text>
            <Text
              fontSize={"22px"}
              color={"#ADADAE"}
              fontWeight={"500"}
              w={"140px"}
            >
              Original cost
            </Text>
            <Text fontSize={"22px"} color={"#ADADAE"} fontWeight={"500"}>
              Current cost
            </Text>
            <Text fontSize={"22px"} color={"#ADADAE"} fontWeight={"500"}>
              Rate
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
              onChange={(e) => setValues({ ...values, badge: e.target.value })}
              placeholder="badge"
              w={"100%"}
            />
            <Input
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              placeholder="product Name"
              w={"100%"}
            />
            <Input
              value={values.informationMin}
              onChange={(e) =>
                setValues({ ...values, informationMin: e.target.value })
              }
              placeholder="InformationMin"
              w={"100%"}
            />
            <Input
              value={values.informationMax}
              onChange={(e) =>
                setValues({ ...values, informationMax: e.target.value })
              }
              placeholder="InformationMax"
              w={"100%"}
            />
            <Input
              value={values.originalCost}
              onChange={(e) =>
                setValues({ ...values, originalCost: e.target.value })
              }
              placeholder="Original cost"
              w={"100%"}
            />
            <Input
              value={values.currentCost}
              onChange={(e) =>
                setValues({ ...values, currentCost: e.target.value })
              }
              placeholder="Current cost"
              w={"100%"}
            />
            <Input
              value={values.rate}
              onChange={(e) => setValues({ ...values, rate: e.target.value })}
              placeholder="Rate"
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
            {loading ? <Spinner /> : ""} Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddTopProduct;
