import { Box, Card, CardBody, CardFooter, Heading, Image, Img, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, Text, useDisclosure } from '@chakra-ui/react'
import { SiAcer, SiApple, SiAsus, SiLenovo, SiSamsung, SiSony, SiXiaomi } from "react-icons/si";
import './Main.css'
import { GrHpi } from 'react-icons/gr';
import Marquee from 'react-fast-marquee'
import { avatar, image, nature } from '../../assets';
import { FaStar } from 'react-icons/fa';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { api } from '../../api';
import Loading from '../skeleton';
import { FaArrowRightLong } from 'react-icons/fa6';
import NewsModal from '../../pages/Category/newsmodal';


export default function Main() {
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(true)
    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => {
        axios.get(`${api}api/news/get-data`, {
            headers: {
                "ngrok-skip-browser-warning": true,
                "Access-Control-Allow-Origin": "*",
            }
        })
            .then((res) => {
                setData(res.data)
                setLoader(false)
            })
    }, [api])
    return (
        <Box mt={90}>

            {/* for partner  */}
            <Box>
                <Marquee direction='left' >
                    <Box className='image_marquee'>
                        <GrHpi size={50} />
                    </Box>
                    <Box className='image_marquee'>
                        <SiSamsung size={70} />
                    </Box>
                    <Box className='image_marquee'>
                        <SiLenovo size={70} />
                    </Box>
                    <Box className='image_marquee'>
                        <SiAsus size={70} />
                    </Box>
                    <Box className='image_marquee'>
                        <SiAcer size={70} />
                    </Box>
                    <Box className='image_marquee'>
                        <SiSony size={70} />
                    </Box>
                    <Box className='image_marquee'>
                        <SiXiaomi size={50} />
                    </Box>
                    <Box className='image_marquee'>
                        <SiApple size={50} />
                    </Box>
                </Marquee>
            </Box>

            {/* for coment  */}
            <Box display='flex' alignItems='center' justifyContent='center' overflow='hidden' mb={20}>
                <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} flexDirection={{ xl: 'inherit', md: 'column', base: 'column' }} width={{ md: '729px', base: '100%' }} className='card_child'>
                    <Box borderRight='1px solid gray' className='border' padding='10px' >
                        <Box>
                            <Text fontSize='27px' pb='40px' fontWeight='700' textAlign={{ md: 'start', base: 'center' }}>Izohlar</Text>
                        </Box>
                        <Swiper
                            style={{
                                "--swiper-navigation-size": "30px"
                            }}
                            pagination={{
                                type: 'fraction',
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper">

                            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} w={{ md: '480px', base: '100%' }} >
                                <SwiperSlide>

                                    <Box>
                                        {/* for coment  */}
                                        <Box>
                                            <Box display={'flex'} gap='10px' flexDirection={{ md: 'inherit', base: 'column' }} alignItems={{ md: 'start', base: 'center' }} justifyContent='center'>
                                                <img src={avatar} alt="" />
                                                <Box>
                                                    <Text fontSize='18px' fontWeight='600'>Palonchi Pistonchi</Text>
                                                    <Text pt={'10px'} width={{ md: '100%', base: '300px' }} pb='20px'>Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов.</Text>
                                                    <Box pt={'10px'} display='flex' alignItems='center' justifyContent='space-between' w={{ md: '90%', base: '100%' }}>
                                                        <Box display='flex' alignItems='center' color='orange'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></Box>
                                                        <Box display='flex' gap='10px'>
                                                            <Text>2.02.2024</Text>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <Box>
                                        {/* for coment  */}
                                        <Box>
                                            <Box display={'flex'} gap='10px' flexDirection={{ md: 'inherit', base: 'column' }} alignItems={{ md: 'start', base: 'center' }} justifyContent='center'>
                                                <img src={avatar} alt="" />
                                                <Box>
                                                    <Text fontSize='18px' fontWeight='600'>Palonchi Pistonchi</Text>
                                                    <Text pt={'10px'} width={{ md: '100%', base: '300px' }} pb='20px'>Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов.</Text>
                                                    <Box pt={'10px'} display='flex' alignItems='center' justifyContent='space-between' w={{ md: '90%', base: '100%' }}>
                                                        <Box display='flex' alignItems='center' color='orange'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></Box>
                                                        <Box display='flex' gap='10px'>
                                                            <Text>2.02.2024</Text>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>

                                </SwiperSlide>

                                <SwiperSlide>
                                    <Box>
                                        {/* for coment  */}
                                        <Box>
                                            <Box display={'flex'} gap='10px' flexDirection={{ md: 'inherit', base: 'column' }} alignItems={{ md: 'start', base: 'center' }} justifyContent='center'>
                                                <img src={avatar} alt="" />
                                                <Box>
                                                    <Text fontSize='18px' fontWeight='600'>Palonchi Pistonchi</Text>
                                                    <Text pt={'10px'} width={{ md: '100%', base: '300px' }} pb='20px'>Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов.</Text>
                                                    <Box pt={'10px'} display='flex' alignItems='center' justifyContent='space-between' w={{ md: '90%', base: '100%' }}>
                                                        <Box display='flex' alignItems='center' color='orange'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></Box>
                                                        <Box display='flex' gap='10px'>
                                                            <Text>2.02.2024</Text>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </SwiperSlide>
                            </Box>
                        </Swiper>
                        <Box display='flex' alignItems='end' justifyContent={{ md: 'end', base: 'center' }} pt='20px'>
                            <Link to='/coment'><Text color='#01579B' display='flex' alignItems='center' gap='2px' className='btn'><span>Hammasini Ko'rish</span></Text></Link>
                        </Box>
                    </Box>


                </Box>
            </Box>

            {/* for novosti  */}
            <Box>
                <Box display='flex' alignItems={{ md: 'center', base: 'start' }} mt={{ md: '0', base: '70px' }} mb='40px' flexDirection={{ md: 'inherit', base: 'column' }} justifyContent='space-between' >
                    <Text fontSize='40px' fontWeight='700'>Yangiliklar</Text>
                    <Link to='/news'><Text color='#01579B' display='flex' alignItems='center' gap={2} fontWeight='500' >Hammasini Ko'rish<FaArrowRightLong /></Text></Link>
                </Box>
                {loader ? <Loading size={'300px'} height={'380px'} /> :
                    <Box display='flex' alignItems='center' flexWrap='wrap' justifyContent='space-between'>
                        {data.slice(0, 3).map((item, i) => (
                            <Card maxW='sm' mb='10px'>
                                <CardBody>
                                    <Image src={item.image} />
                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md'>{item.title}</Heading>
                                        <Text>{item.information.slice(0, 400)}</Text>
                                    </Stack>
                                </CardBody>
                                <CardFooter>
                                    <NewsModal information={item.information} title={item.title} />
                                </CardFooter>
                            </Card>

                        ))}
                    </Box>}
                </Box>
        </Box>
    )
}
