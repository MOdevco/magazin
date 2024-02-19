import { Box, Button, Text, useToast } from '@chakra-ui/react'
import React from 'react'
import { tv } from '../../assets'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function BuyurtmaMenu({ inputValue }) {
    const notify = () => toast.success("Buyurtmangiz Qabul Qilindi, Iltimos Menejer Qo'ngirog'ini Kuting");

    return (
        <Box width={{ xl: '30%', base: '100%' }} display='flex' flexDirection={'column'} gap='40px' borderRadius='8px' border='1px solid gray' height='50%' padding={'10px'} position='sticky' top='20px' mt='110px'>
            <Text fontWeight='600' fontSize='20px'>Buyurtmangiz</Text>

            <Box display='flex' flexDirection='column' gap='15px'>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                    <img src={tv} width={50} alt="" />
                    <Text>telvizor</Text>
                    <Text>100ming</Text>
                </Box>

                <Box display='flex' alignItems='center' justifyContent='space-between'>
                    <img src={tv} width={50} alt="" />
                    <Text>telvizor</Text>
                    <Text>100ming</Text>
                </Box>
                <Text textAlign='end' fontWeight='700' fontSize='20px' mt='10px' mb='10x'>Jami: 200ming</Text>
                {inputValue ? <Button disabled={!inputValue} onClick={notify} colorScheme='green'>Buyurtmani Rasmiylashtirish</Button>
                    : <Button disabled={!inputValue} isDisabled>Buyurtmani Rasmiylashtirish</Button>}
                <Text fontSize='13px'>Buyurtma berish orqali shaxsiy maʼlumotlarning bizning platformamizning Maxfiylik kelishuvi va Foydalanuvchi kelishuvi qoidalariga muvofiq qayta ishlanishiga rozilik bildirasiz.</Text>

                <Box bg='#c8c8c8' borderRadius='8px' padding='6px'>
                    <Text color='red'>Iltimos, * yulduzcha bilan belgilangan joylarni to'ldiring</Text>
                </Box>
                <ToastContainer />
            </Box>
        </Box>
    )
}
