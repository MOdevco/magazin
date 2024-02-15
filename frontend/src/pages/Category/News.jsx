import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Card, CardBody, CardFooter, Heading, Image, Img, Stack, Text } from '@chakra-ui/react'
import { SiAcer, SiApple, SiAsus, SiLenovo, SiSamsung, SiSony, SiXiaomi } from "react-icons/si";
import { GrHpi } from 'react-icons/gr';
import Marquee from 'react-fast-marquee'
import { FaStar } from 'react-icons/fa';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { nature } from '../../assets';
import axios from 'axios';
import { api } from '../../api';

export default function News() {
  const [data, setData] = useState([])


  useEffect(() => {
    axios.get(`${api}api/news/get-data`, {
      headers: {
        "ngrok-skip-browser-warning": true,
        "Access-Control-Allow-Origin": "*",
      }
    })
      .then((res) => {
        setData(res.data)
      })
  }, [api])

  return (
    <Box>
      <Navbar />
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>Bosh Saxifa</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>Yangiliklar</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Box mt={20}>
        <Text fontSize='28px' fontWeight='600' color='#333'>Yangiliklar</Text>
        {data.map((item) => (
          <Box>
            {/* 1 */}
            <Card maxW='sm' mb='10px'>
              <CardBody>
                <Image src={item.image}/>
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>{item.title}</Heading>
                  <Text>{item.information.slice(0, 400)}</Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <Link to='/news'><Text display='flex' alignItems='center' gap={2} className='btn' color='#01579B'><span>Ko'proq Ko'rish</span></Text></Link>
              </CardFooter>
            </Card>
          </Box>
        ))}
        </Box>
      <Footer />
    </Box>
  )
}
