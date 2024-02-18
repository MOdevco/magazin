import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { avatar } from '../../assets'

export default function Profile() {
    return (
        <Box
            w={"300px"}
            h={"100vh"}
            bg={"#4C4C4C"}
            position={"absolute"}
            left={"0"}
        >
            <Box display='flex' alignItems='center' flexDirection='column'>
                <img src={avatar} alt="" />
                <Text fontSize='22px' color='black' fontWeight='600'>Hydra Coder</Text>
                <Box>
                    <Link to={'/ProfileName'}><Text>Account</Text></Link>
                </Box>

            </Box>
        </Box>
    )
}
