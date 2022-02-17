import Container from '../components/Container'
import Head from 'next/head'
import {
    Text,
    Heading,
    Flex,
    Box,
    Stack
} from '@chakra-ui/layout'
import { useColorMode, Image } from '@chakra-ui/react'

export default function Index() {
    const { colorMode } = useColorMode()
    const colorSecondary = {
        light: 'gray.700',
        dark: 'gray.400',
    }

    return (
        <>
            <Container>
                <Head>
                    <title>Home - Adhitya Giva Muhammad</title>
                </Head>
                <Stack
                    as="main"
                    spacing={8}
                    justifyContent="center"
                    alignItems="flex-start"
                    m="0 auto 4rem auto"
                    maxWidth="900px"
                    px={2}
                >
                    <Flex maxWidth="750px">
                        <Box
                            maxWidth="550px">
                            <Heading mb={2}>Hi, I'm Adhitya Giva Muhammad</Heading>
                            <Text color={colorSecondary[colorMode]}>
                                Anyeong aseo yorobun, Konnichiwa mina-san, Halo semua 👋
                            </Text>
                            <Text color={colorSecondary[colorMode]}>
                                I'm Adhitya Giva Muhammad, someone interested to Tech and Software Engineering
                            </Text>
                        </Box>
                        <Box maxWidth="200px" pl={8}>
                            <Image
                                boxSize="150px"
                                objectFit="cover"
                                borderRadius="full"
                                src="/images/profile.jpg"
                                alt="Adhitya Giva Muhammad"
                                fallbackSrc="https://via.placeholder.com/150"
                            />
                        </Box>
                    </Flex>
                </Stack>
            </Container>
        </>
    )
}

export async function getStaticProps() {
    // Getting started to load the .env    
    return { props: {} }
}