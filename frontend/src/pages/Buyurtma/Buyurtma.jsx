import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Checkbox, Input, Select, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import BuyurtmaHaqida from './BuyurtmaHaqida'
import BuyurtmaSelect from './BuyurtmaSelect'
import BuyurtmaTolov from './buyurtmaTolov'
import BuyurtmaMenu from './BuyurtmaMenu'
import BuyurtmaInputs from './BuyurtmaInputs'

export default function Buyurtma(props) {
    const [inputValue, setInputValue] = useState("")
    return (
        <Box>
            <Navbar />

            <Breadcrumb w='84%' m='auto' mb='20px' mt='40px'>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Bosh Saxifa</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink>Buyurtma Berish</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>


            <Box width={{ xl: '80%', base: '90%' }} m='auto' display='flex' justifyContent='space-between' flexDirection={{ xl: 'inherit', md: 'column', base: 'column' }}>
                <Box position='relative'>
                    <Text fontSize='28px' fontWeight='600' mb='60px'>Buyurtmani Rasmiylashtirish</Text>

                    <Box border='1px solid gray' display='flex' alignItems='start' flexDirection='column' gap='20px' borderRadius='8px' w={{ xl: '600px', base: '100%' }} padding='20px'>
                        <Text fontSize='20px'>Qabul qilish usuli va yetkazib berish manzili:</Text>

                        <BuyurtmaSelect width={{ xl: '400px', base: '100%' }} />

                        {/* for tolov  */}
                        <BuyurtmaHaqida />

                        {/* for inputs  */}
                        <Text>Tuman</Text>
                        <BuyurtmaInputs value={inputValue} setInputValue={setInputValue} />
                    </Box>

                    <BuyurtmaTolov />
                </Box>

                <BuyurtmaMenu inputValue={inputValue} />
            </Box>

            <Footer />
        </Box>
    )
}
