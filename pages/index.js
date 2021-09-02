import Container from '../components/Container'
import Head from 'next/head'
import { 
  Text,
  UseColorMode,
  Heading,
  Flex,
  Stack
} from '@chakra-ui/layout'
import { useColorMode } from '@chakra-ui/react'

export default function Index() {
  const {colorMode} = useColorMode()
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
          maxWidth="700px"
          px={2}
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
          >
            <Heading mb={2}>Hi I'm Adhitya Giva Muhammad</Heading>
            <Text color={colorSecondary[colorMode]}>Hello, World!</Text>
          </Flex>
        </Stack>
      </Container>
    </>
  )
}
