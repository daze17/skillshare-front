import React, { ReactNode } from 'react';

import {
    Box,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';
// import LeftSideBar from "@app/common/leftSideBar";


export default function MainLayout({ children }: { children: ReactNode }) {
    const { onClose } = useDisclosure();
    return (
        <Box minH="100vh" bg={useColorModeValue('white', 'gray.900')} >
            {/* <LeftSideBar
                onClose={() => onClose}
                display={{ base: 'none', md: 'block' }}
                w={"164px"}
            /> */}
            <Box p="24px" minH={"100vh"}  >
                {children}
            </Box>
        </Box>
    );
}

