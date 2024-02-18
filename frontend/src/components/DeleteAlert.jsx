import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, Text, useDisclosure, useToast } from '@chakra-ui/react'
import React from 'react'
import { MdDeleteForever } from 'react-icons/md'

export default function DeleteAlert() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const toast = useToast()

    const showToast = () => {
        toast({
            description: "Mahsulot Muvafaqiyatli olib tashlandi",
            status: 'success',
            duration: 4000,
            position: 'top-right',
            isClosable: true,
        })
    }

    return (
        <Box>
            <Button color='red' onClick={onOpen}><MdDeleteForever size={20} /></Button>

            <AlertDialog motionPreset='slideInBottom' leastDestructiveRef={cancelRef} onClose={onClose} isOpen={isOpen} isCentered>
                <AlertDialogOverlay />

                <AlertDialogContent>
                    <AlertDialogHeader>Bu Mahsulotni Olib Tashlamoqchimisz?</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>
                        <Text>Agar Siz Bu Mahsulotni Olib Tashlamoqchi Bolsangiz "Ha" ni Agar Xatolik Tufayli Bo'lsa "Yo'q" ni bosing</Text>
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            Yo'q
                        </Button>
                        <Button colorScheme='red' ml={3} onClick={showToast} >
                            Ha
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </Box>
    )
}
