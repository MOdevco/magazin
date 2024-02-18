import { Box, Select } from '@chakra-ui/react'
import React from 'react'

export default function BuyurtmaSelect({width}) {
    return (
        <Box>
            <Select placeholder='Manzilni Tanlang' w={width}>
                <option value='option1'>Andijon</option>
                <option value='option2'>Buxoro</option>
                <option value='option3'>Farg'ona</option>
                <option value='option4'>Jizzah</option>
                <option value='option5'>Xorazm</option>
                <option value='option6'>Namangan</option>
                <option value='option7'>Navoiy</option>
                <option value='option8'>Qashqadaryo</option>
                <option value='option9'>Samarqand</option>
                <option value='option10'>Sirdaryo</option>
                <option value='option11'>Surxondaryo</option>
                <option value='option12'>Toshkent</option>
            </Select>
        </Box>
    )
}
