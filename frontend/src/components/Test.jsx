import { Box } from '@chakra-ui/react';
import React from 'react'
import ReactImageMagnify from 'react-image-magnify';

export default function Test() {
    const tvimage = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
    return (
        <Box w='800px' height='800px'>
            <ReactImageMagnify {...{
                smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    isFluidWidth: true,
                    src: tvimage
                },
                largeImage: {
                    src: tvimage,
                    width: 1429,
                    height: 950
                },
                shouldUsePositiveSpaceLens:true
            }} />
        </Box>
    )
}
