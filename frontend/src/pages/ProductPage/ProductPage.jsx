import { Box, Text, Button, Modal, ModalHeader, ModalContent, ModalOverlay, ModalBody, useDisclosure, ModalCloseButton, Img } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Footer from '../../components/Footer';
import { laptop, } from '../../assets';
import './ProductPage.css'
import Navbar from '../../components/Navbar';
import { CiStar } from 'react-icons/ci';
import Tolov from './Tolov';
import Narx from './Narx';
import Charakter from './charakter';
import ProductAbout from './ProductAbout';
import ProductComent from './ProductComent';
import axios from 'axios';
import { api } from '../../api';
import { useParams } from 'react-router-dom';

export default function ProductPage() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null)
    const { id, type } = useParams()
    const { isOpen, onOpen, onClose } = useDisclosure()
    useEffect(() => {
        axios.get(`${api}api/product/get-data-byId/${id}`, {
            headers: {
                "ngrok-skip-browser-warning": true,
                "Access-Control-Allow-Origin": "*",
            }
        })
            .then((res) => {
                setData(res.data.data)
                setLoading(false)
            })
    }, [type, id, api])
    console.log(data);


    return (
        <>
            {
                loading ? 'keldimi' :
                    <Box>
                        <Navbar />

                        {data.map((item) => (
                            <Box>
                                <Box mt='70px' px='60px' mb='20px' width='100%'>
                                    <Text fontSize={{ md: '32px', base: '18px' }} color='#333' fontWeight='600'>{item.name}</Text>
                                    <Box display='flex' alignItems='center' justifyContent='space-between' w={{ md: '18%', base: '100%' }}>
                                        <Box display='flex' alignItems='center'><CiStar size={20} /><CiStar size={20} /><CiStar size={20} /><CiStar size={20} /><CiStar size={20} /></Box>
                                        <Text color='gray'>Ko'rilgan: 128</Text>
                                    </Box>
                                </Box>

                                <Box display='flex' alignItems='start' w='90%' m='auto' justifyContent='space-between' flexDirection={{ xl: 'inherit', md: 'column', base: 'column' }}>
                                    <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
                                        {/* swi/pper */}
                                        <Box width={{ md: '600px', base: '300px' }} className='swip_parent' >
                                            <Swiper
                                                style={{
                                                    '--swiper-navigation-color': '#fff',
                                                    '--swiper-pagination-color': '#fff',
                                                }}
                                                loop={true}
                                                spaceBetween={10}
                                                thumbs={{ swiper: thumbsSwiper }}
                                                modules={[FreeMode, Navigation, Thumbs]}
                                                className="mySwiper2"
                                            >
                                                <SwiperSlide>
                                                    <Img className='size_imgg' cursor='pointer' onClick={onOpen} src={item.image} />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Img className='size_imgg' cursor='pointer' onClick={onOpen} src={item.image} />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Img className='size_imgg' cursor='pointer' onClick={onOpen} src={item.image} />
                                                </SwiperSlide>
                                            </Swiper>
                                            <Modal isOpen={isOpen} onClose={onClose} >
                                                <ModalOverlay />
                                                <ModalContent>
                                                    <ModalHeader>item.name</ModalHeader>
                                                    <ModalCloseButton />
                                                    <ModalBody>

                                                    </ModalBody>
                                                </ModalContent>
                                            </Modal>
                                            {/* for img  */}
                                            <Swiper
                                                onSwiper={setThumbsSwiper}
                                                loop={true}
                                                spaceBetween={10}
                                                slidesPerView={4}
                                                freeMode={true}
                                                watchSlidesProgress={true}
                                                modules={[FreeMode, Navigation, Thumbs]}
                                                className="mySwiper"
                                            >
                                                <SwiperSlide>
                                                    <Img className='size_img' cursor='pointer' src={item.image} />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Img className='size_img' cursor='pointer' src={item.image} />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Img className='size_img' cursor='pointer' src={item.image} />
                                                </SwiperSlide>
                                            </Swiper>
                                        </Box>

                                        <Charakter />
                                    </Box>

                                    <Box display='flex' alignItems='center' flexDirection='column' justifyContent='center'>
                                        <Narx narx={item.currentCost} orginal={item.originalCost}/>

                                        <Tolov />
                                    </Box>
                                </Box>
                        <Box display='flex' alignItems='start' justifyContent='space-between' width='95%' m={'auto'} flexDirection={{ md: 'inherit', base: 'column' }} mt='70px'>
                            <ProductAbout about={item.informationMax}/>

                            <ProductComent />
                        </Box>
                            </Box>
                        ))}




                        <Footer />
                    </Box>
            }
        </>
    )
}
