import React from 'react'
import Head from 'next/head'
import { 
    Flex,
    Stack,
} from '@chakra-ui/react';
import Container from '../components/Container'
 
export default function Portofolio() {
    return (
        <>
            <Head>
                <title>Portofolio - Adhitya Giva Muhamamd</title>
            </Head>
            <Container>
                <Stack
                    as="main"
                    spacing={8}
                    justifyContent="center"
                    alignItems="flex-start"
                    m="0 auto 4rem auto"
                    maxWidth="700px"
                >
                    <Flex
                        flexDirection="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        maxWidth="700px"
                        px={4}
                    >

                    </Flex>
                </Stack>
            </Container>
        </>
    )
}