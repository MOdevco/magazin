import { Box, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import React from 'react'

export default function Loading({ size, height }) {
    return (
        <Box display='flex' alignItems='center' justifyContent={{xl:'space-between', md:'center', base:'center'}}>
            <Box padding='6' boxShadow='lg' bg='white' width={size} height={height}>
                <Skeleton height={'180px'} />
                <Skeleton height={'10px'} mt='20px' />
                <Skeleton height={'10px'} mt='10px' />
                <Skeleton height={'10px'} mt='10px' />
                <Skeleton height={'10px'} mt='10px' />
                <Skeleton height={'10px'} mt='10px' />
                <Skeleton height={'10px'} mt='10px' />
                <Skeleton height={'10px'} mt='10px' />
            </Box>
            <Box padding='6' boxShadow='lg' bg='white' width={size} display={{ xl: 'block', md: 'block' }} className='end' height={height}>
                <Skeleton height={'180px'} />
                <Skeleton height={'10px'} mt='20px' />
                <Skeleton height={'10px'} mt='10px' />
                <Skeleton height={'10px'} mt='10px' />
                <Skeleton height={'10px'} mt='10px' />
                <Skeleton height={'10px'} mt='10px' />
                <Skeleton height={'10px'} mt='10px' />
                <Skeleton height={'10px'} mt='10px' />
            </Box>
            <Box padding='6' boxShadow='lg' bg='white' width={size} display={{ xl: 'block', md: 'block', base: 'none' }} height={height}>
                <Skeleton height={'180px'} />
                <Skeleton height={'10px'} mt='20px' />
                <Skeleton height={'10px'} mt='10px' />
                <Skeleton height={'10px'} mt='10px' />
                <Skeleton height={'10px'} mt='10px' />
                <Skeleton height={'10px'} mt='10px' />
                <Skeleton height={'10px'} mt='10px' />
                <Skeleton height={'10px'} mt='10px' />
            </Box>
            <Box padding='6' boxShadow='lg' bg='white' width={size} display={{ xl: 'block', md: 'none', base: 'none' }} height={height}>
                <Skeleton height={'180px'} />
                <Skeleton height={'10px'} mt='20px' />
                <Skeleton height={'10px'} mt='10px' />
                <Skeleton height={'10px'} mt='10px' />
                <Skeleton height={'10px'} mt='10px' />
                <Skeleton height={'10px'} mt='10px' />
                <Skeleton height={'10px'} mt='10px' />
                <Skeleton height={'10px'} mt='10px' />
            </Box>
        </Box>
    )
}
