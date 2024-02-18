import { Box, Input, Text } from '@chakra-ui/react'
import react, { useState } from 'react'

export default function BuyurtmaINputs({InputValue, setInputValue}) {


    return (
        <Box display='flex' flexDirection='column' gap={'20px'} >
            <Input width={{ xl: '400px', base: '57%' }} required />
            {/* 1 */}
            <Box display='flex' alignItems={{ xl: 'center', base: 'start' }} justifyContent='space-between' gap='20px' flexDirection={{ xl: 'initial', md: 'initial', base: 'column' }}>
                <Box>
                    <Text>Ko'cha *</Text>
                    <Input required />
                </Box>
                <Box>
                    <Text>Uy *</Text>
                    <Input required  />
                </Box>
            </Box>
            {/* 2 */}
            <Box display='flex' alignItems={{ xl: 'center', base: 'start' }} justifyContent='space-between' gap='20px' flexDirection={{ xl: 'initial', md: 'initial', base: 'column' }}>
                <Box>
                    <Text>Xonadon/ofis</Text>
                    <Input />
                </Box>
                <Box>
                    <Text>Yoʻlak</Text>
                    <Input />
                </Box>
            </Box>
            {/* 3 */}
            <Box display='flex' alignItems={{ xl: 'center', base: 'start' }} justifyContent='space-between' gap='20px' flexDirection={{ xl: 'initial', md: 'initial', base: 'column' }}>
                <Box>
                    <Text>Qavat</Text>
                    <Input />
                </Box>
                <Box>
                    <Text>Domofon kodi</Text>
                    <Input />
                </Box>
            </Box>
            {/* 4 */}
            <Box display='flex' alignItems={{ xl: 'center', base: 'start' }} justifyContent='space-between' gap='20px' >
                <Box >
                    <Text>Yetkazib Berish Sanasi va Vaqti</Text>
                    <Box display='flex' alignItems='center' gap='20px' flexDirection={{ xl: 'initial', md: 'initial', base: 'column' }}>
                        <Input placeholder='Misol:   14.02' />
                        <Input placeholder='10:00 - 22:00' />
                    </Box>
                </Box>
            </Box>
            <Text>Kuryer uchun izoh</Text>
            <Input width={{ xl: '400px', md: '100%' }} />

            <Text fontSize={{ xl: '28px', base: '100%' }} fontWeight='600'>Buyurtma qabul qiluvchi</Text>
            {/* 1 */}
            <Box display='flex' alignItems={{ xl: 'center', base: 'start' }} justifyContent='space-between' gap='20px' flexDirection={{ xl: 'initial', md: 'initial', base: 'column' }}>
                <Box>
                    <Text>Familiya *</Text>
                    <Input value={InputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Familiyangizni Kiriting' w='100%' required />
                </Box>
                <Box>
                    <Text>Ism *</Text>
                    <Input value={InputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Ismingizni Kiriting' w='100%' required />
                </Box>
            </Box>
            {/* 2 */}
            <Box display='flex' alignItems={{ xl: 'center', base: 'start' }} justifyContent='space-between' gap='20px' mt='10px' flexDirection={{ xl: 'initial', md: 'initial', base: 'column' }}>
                <Box>
                    <Text>Telefon raqaminigiz *</Text>
                    <Input value={InputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='+998 91 041 14 25' required />
                </Box>
            </Box>
            {/* text  */}
            <Text color='gray' fontSize='13px' mt='10px' w={{ xl: '100%', base: '50%' }}>Siz koʻrsatgan telefon raqamiga buyurtma holati haqida bildirishnoma yuboramiz. <br />
                Yetkazib berish vaqtini aniqlashtirish uchun kuryer siz bilan telefon orqali bogʻlanadi.</Text>
        </Box>
    )
}
