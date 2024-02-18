import { Box, Button, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

export default function NewsModal({ information, title}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box>
            <Text display='flex' alignItems='center' gap={2} className='btn' onClick={onOpen} color='#01579B'><span>Ko'proq Ko'rish</span></Text>


            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} size='full'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        {information}
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={onClose} colorScheme='blue'>Berkittsh</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}
