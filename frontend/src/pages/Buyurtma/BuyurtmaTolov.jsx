import { Box, Checkbox, Radio, RadioGroup, Text } from '@chakra-ui/react'
import React from 'react'
import { BsFillCreditCard2FrontFill } from 'react-icons/bs'
import { FaCcMastercard } from 'react-icons/fa'
import { HiCreditCard } from 'react-icons/hi2'
import { IoCardOutline } from 'react-icons/io5'

export default function BuyurtmaTolov() {
    return (
        <Box mt='20px' w={{ xl: '600px', base: '100%' }} border='1px solid gray' padding='20px' borderRadius='8px'>
            {/* 1 */}
            <Box bg='#F4F4F7' padding='20px' borderRadius='8px'>
                <Text fontWeight='600' fontSize='20px'>Karta orqali Onlayn To'lov</Text>
                <Text>UZCARD, HUMO, Visa, MasterCard</Text>
                <Box display='flex' alignItems={'center'} gap='5px'>
                    <FaCcMastercard size={30} style={{ color: 'orange' }} />
                    <HiCreditCard size={32} style={{ color: 'green' }} />
                    <BsFillCreditCard2FrontFill size={30} style={{ color: 'blue' }} />
                    <IoCardOutline size={32} style={{ color: 'gray' }} />
                </Box>
            </Box>

            {/* 2 */}
            <Box mt='30px' bg='#F4F4F7' padding='20px'>
                <Text fontWeight={'600'} fontSize='20px'>Uzum Nasiya</Text>
                <RadioGroup display='flex' flexDirection='column' gap='10px'>
                    {/* 1 */}
                    <Box display='flex' alignItems='center' justifyContent='space-between' bg='white' padding='10px' borderRadius='8px'>
                        <Radio value='1'>3 oy</Radio>
                        <Text>260 000 sumdan</Text>
                    </Box>
                    {/* 2 */}
                    <Box display='flex' alignItems='center' justifyContent='space-between' bg='white' padding='10px' borderRadius='8px'>
                        <Radio value='2'>6 oy</Radio>
                        <Text>470 000 sumdan</Text>
                    </Box>
                    {/* 3 */}
                    <Box display='flex' alignItems='center' justifyContent='space-between' bg='white' padding='10px' borderRadius='8px'>
                        <Radio value='3'>12 oy</Radio>
                        <Text>620 000 sumdan</Text>
                    </Box>
                </RadioGroup>
            </Box>
            {/* 3 */}
            <Box display='flex' flexDirection='column' bg='#F2F4F7' padding='20px' mt='20px'>
                <Checkbox fontWeight={'600'} isInvalid colorScheme='red'>Naqd pul yoki karta orqali qabul qilganda</Checkbox>
                <Text fontSize='15px'>Buyurtmani qabul qilish ofisida yoki kuryerdan olganda to'lash</Text>
            </Box>
        </Box>
    )
}
