import {
  Box,
  Button,
  Divider,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { FaPhoneVolume } from "react-icons/fa6";

export default function PhoneModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <FaPhoneVolume size={30} onClick={onOpen} />

      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size="sm"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Biz Bilan Aloqa</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Box>
              <Box display="flex" flexDirection="column" gap="20px">
                <Text>+998(91) 041-14-25</Text>
                <Text>+998(91) 041-14-25</Text>
                <Text pb="30px">+998(91) 041-14-25</Text>
              </Box>
              <Divider height="4px" />
              <Box display="flex" flexDirection="column" gap="10px" mt="40px">
                <Text>Biz bilan Bog'laning</Text>
               <Box display='flex' flexDirection='column' gap='20px'>
               <Input placeholder="Ismingiz" />
                <Input placeholder="Familyangiz" />
                <Input placeholder="Nomeringiz" />
               </Box>
                <Button bg="#01579B" color="white" _hover="none">
                  Yuborish
                </Button>
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
