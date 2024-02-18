import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Card, CardBody, CardFooter, Heading, Image, Img, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, Text, useDisclosure } from '@chakra-ui/react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import axios from 'axios'
import { api } from '../../api'
import { FaRegHeart, FaStar } from 'react-icons/fa';
import ModalForGamers from '../../components/Modal';
import './Category.css'
import { useEffect, useState } from 'react'
import Loading from '../../components/skeleton'
import { Link } from 'react-router-dom'
import NewsModal from './newsmodal'

export default function News() {
  const [data, setData] = useState([])
  const toast = useState()
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

  const handleBuy = () => {
    toast({
      description: `${data.name} Savatga Qo\'shildi`,
      position: 'top-right',
      isClosable: true,
      status: 'success',
      duration: '4000'
    })
  }
  return (
    <Box>
      <Navbar />

      <Box mt={20} className='keybored' w='90%' m='auto'>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Bosh Saxifa</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>Yangiliklar</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Text fontSize='32px' fontWeight='700' mt='40px' color='#333'>Yangililar</Text>

        {loader ? <Loading size={'300px'} height={'380px'} /> :
          <Box display='flex' alignItems='center' justifyContent='space-between' mt='60px' flexWrap='wrap'>
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
              <Newsmodal information={item.information} title={item.title}/> 
              </CardFooter>
            </Card>
            ))}
          </Box>}
        <br /><br /><br /><br />

        {loader ? <Loading size={'300px'} height={'380px'} /> :
          <Box display='flex' alignItems='center' justifyContent='space-between' mt='60px' flexWrap='wrap'>
            {/* 1 */}
            {data.slice(3, 6).map((item, i) => (
              <Card maxW='sm' mb='10px'>
              <CardBody>
                <Image src={item.image} />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>{item.title}</Heading>
                  <Text>{item.information.slice(0, 400)}</Text>
                </Stack>
              </CardBody>
              <CardFooter>
              <Newsmodal information={item.information} title={item.title}/> 
              </CardFooter>
            </Card>
            ))}
          </Box>}
        <br /><br /><br /><br />

        {loader ? <Loading size={'300px'} height={'380px'} /> :
          <Box display='flex' alignItems='center' justifyContent='space-between' flexWrap='wrap'>
            {/* 1 */}
            {data.slice(6, 9).map((item, i) => (
           <Card maxW='sm' mb='10px'>
           <CardBody>
             <Image src={item.image} />
             <Stack mt='6' spacing='3'>
               <Heading size='md'>{item.title}</Heading>
               <Text>{item.information.slice(0, 400)}</Text>
             </Stack>
           </CardBody>
           <CardFooter>
           <Newsmodal information={item.information} title={item.title}/> 
           </CardFooter>
         </Card>
            ))}
          </Box>}

        {loader ? <Loading size={'300px'} height={'380px'} /> :
          <Box display='flex' alignItems='center' justifyContent='space-between' flexWrap='wrap'>
            {/* 1 */}
            {data.slice(9, 12).map((item, i) => (
              <Card maxW='sm' mb='10px'>
                <CardBody>
                  <Image src={item.image} />
                  <Stack mt='6' spacing='3'>
                    <Heading size='md'>{item.title}</Heading>
                    <Text>{item.information.slice(0, 400)}</Text>
                  </Stack>
                </CardBody>
                <CardFooter>
                <NewsModal information={item.information} title={item.title}/> 
                </CardFooter>
              </Card>
            ))}
          </Box>}
      </Box>

      <Footer />
    </Box>
  )
}
