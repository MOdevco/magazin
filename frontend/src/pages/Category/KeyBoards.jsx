import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Img, Text } from '@chakra-ui/react'
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

export default function KeyBoards() {
  const [data, setData] = useState([])
  const toast = useState()
  const [loader, setLoader] = useState(true)
  const [post, setPost] = useState('')

  const savePost = () =>{
    localStorage.setItem('id', JSON.stringify(post))
  }

  useEffect(() => {
    axios.get(`${api}api/keyboard/get-data`, {
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
            <BreadcrumbLink>Klaviaturalar</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Text fontSize='32px' fontWeight='700' mt='40px' color='#333'>Klaviaturalar</Text>

        {loader ? <Loading size={'300px'} height={'380px'} /> :
          <Box display='flex' alignItems='center' justifyContent='space-between' >
            {/* 1 */}
            {data.slice(0, 4).map((item, i) => (
              <Box key={i} display='flex' flexDirection='column' gap={4} width='302px' padding='10px' mb='2px' boxShadow='rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;'>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <Box display='flex' alignItems='center' w='100%' justifyContent='end' gap={2}>
                    <FaRegHeart size={30} style={{ color: 'red', position: 'absolute', marginTop: '70px', zIndex: '999' }} />
                  </Box>
                </Box>
               <Link to={`/product/keyboard/${item._id}`}><Img src={item.image} height='300px' objectFit='cover' position='relative' /></Link>
                <Box textAlign='start'>
                  <Text fontSize='20px' color='#333' fontWeight='500'>{item.name}</Text>
                  <Text fontSize='14px' color='#999' fontWeight='400'>Sharhlar: 0</Text>
                  <Box display='flex' alignItems='center' color='orange'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></Box>
                </Box>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <Box textAlign={'start'}>
                    <Text color='#060F42' fontSize='18px' fontWeight='700'>{item.cost}</Text>
                  </Box>
                </Box>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <ModalForGamers text={item.informationMax} />
                  <Button bg='#06A56C' onClick={handleBuy} color='white'>Xarid Qilmoq</Button>
                </Box>
              </Box>
            ))}
          </Box>}
        <br /><br /><br /><br />

        {loader ? <Loading size={'300px'} height={'380px'} /> :
          <Box display='flex' alignItems='center' justifyContent='space-between' mt='60px'>
            {/* 1 */}
            {data.slice(4, 8).map((item, i) => (
              <Box key={i} display='flex' flexDirection='column' gap={4} width='302px' padding='10px' mb='2px' boxShadow='rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;'>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <Box display='flex' alignItems='center' w='100%' justifyContent='end' gap={2}>
                    <FaRegHeart size={30} style={{ color: 'red', position: 'absolute', marginTop: '70px', zIndex: '999' }} />
                  </Box>
                </Box>
                <Img src={item.image} height='300px' objectFit='cover' position='relative' />
                <Box textAlign='start'>
                  <Text fontSize='20px' color='#333' fontWeight='500'>{item.name}</Text>
                  <Text fontSize='14px' color='#999' fontWeight='400'>Sharhlar: 0</Text>
                  <Box display='flex' alignItems='center' color='orange'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></Box>
                </Box>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <Box textAlign={'start'}>
                    <Text color='#060F42' fontSize='18px' fontWeight='700'>{item.cost}</Text>
                  </Box>
                </Box>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <ModalForGamers text={item.informationMax} />
                  <Button bg='#06A56C' onClick={handleBuy} color='white'>Xarid Qilmoq</Button>
                </Box>
              </Box>
            ))}
          </Box>}
        <br /><br /><br /><br />

        {loader ? <Loading size={'300px'} height={'380px'} /> :
          <Box display='flex' alignItems='center' justifyContent='space-between'>
            {/* 1 */}
            {data.slice(8, 13).map((item, i) => (
              <Box key={i} display='flex' flexDirection='column' gap={4} width='302px' padding='10px' mb='2px' boxShadow='rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;'>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <Box display='flex' alignItems='center' w='100%' justifyContent='end' gap={2}>
                    <FaRegHeart size={30} style={{ color: 'red', position: 'absolute', marginTop: '70px', zIndex: '999' }} />
                  </Box>
                </Box>
                <Img src={item.image} height='300px' objectFit='cover' position='relative' />
                <Box textAlign='start'>
                  <Text fontSize='20px' color='#333' fontWeight='500'>{item.name}</Text>
                  <Text fontSize='14px' color='#999' fontWeight='400'>Sharhlar: 0</Text>
                  <Box display='flex' alignItems='center' color='orange'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></Box>
                </Box>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <Box textAlign={'start'}>
                    <Text color='#060F42' fontSize='18px' fontWeight='700'>{item.cost}</Text>
                  </Box>
                </Box>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <ModalForGamers text={item.informationMax} />
                  <Button bg='#06A56C' onClick={handleBuy} color='white'>Xarid Qilmoq</Button>
                </Box>
              </Box>
            ))}
          </Box>}
      </Box>
      <Footer />
    </Box>
  )
}
