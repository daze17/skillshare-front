import React, { ReactNode } from "react";

import { Box, Flex, useColorModeValue, useDisclosure } from "@chakra-ui/react";
// import LeftSideBar from "@app/common/leftSideBar";

export default function MainLayout({ children }: { children: ReactNode }) {
  const { onClose } = useDisclosure();
  return (
    <Box bg={useColorModeValue("white", "gray.900")} p="24px" minH="100vh">
      {/* <LeftSideBar
                onClose={() => onClose}
                display={{ base: 'none', md: 'block' }}
                w={"164px"}
            /> */}
      <Flex justifyContent={"center"}>
        <Box
          maxW={"1000px"}
          paddingLeft={{ base: '20px', md: '50px', lg: '100px' }}
          paddingRight={{ base: '20px', md: '50px', lg: '100px' }}
        //   bg="blue"
        >
          {children}
        </Box>
      </Flex>
    </Box>
  );
}
