import { ReactNode } from 'react';
import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
} from '@chakra-ui/react';

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

export default function Footer() {
    return (
        <Box
            bg={"#232629"}
            color={"white"}
            zIndex={"100"}
        >
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid
                    templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
                    spacing={8}>
                    <Stack spacing={6}>
                        <Text fontSize={'sm'}>
                            © 2022 All rights reserved
                        </Text>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    );
}