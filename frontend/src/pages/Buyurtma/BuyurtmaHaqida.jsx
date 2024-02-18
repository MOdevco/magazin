import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { FaCheck } from 'react-icons/fa'

export default function BuyurtmaTolov() {
    return (
        <Box display='flex' flexDirection='column' gap='20px'>
            <Text mt='20px'>Olish Usuli</Text>
            <Box bg='#F2F4F7' padding='20px' borderRadius='8px'>
                <Text fontWeight='600' mb='8px'>Pochtagacha</Text>
                <Box display='flex' alignItems='center' gap='10px'><FaCheck style={{ color: 'green' }} /> Mahsulotni tekshirish va kiyib koʻrish mumkin</Box>
                <Box display='flex' alignItems='center' gap='10px'><FaCheck style={{ color: 'green' }} /> Buyurtmani saqlash muddati – 5 kun</Box>
                <Box display='flex' alignItems='center' gap='10px'><FaCheck style={{ color: 'green' }} /> Mahsulotlarning tez va muammosiz qaytarib olinishi</Box>
            </Box>
            <Box bg='#F2F4F7' padding='20px' borderRadius='8px'>
                <Text fontWeight='600' mb='8px'>Kuryer Orqali Uyingizgacha</Text>
                <Box display='flex' alignItems='center' gap='10px'><FaCheck style={{ color: 'green' }} /> Yetkazib beramiz ertaga, 30 000 so'm</Box>
                <Box display='flex' alignItems='center' gap='10px'><FaCheck style={{ color: 'green' }} /> Mahsulotlarning tez va muammosiz qaytarib olinishi</Box>
            </Box>
        </Box>
    )
}
