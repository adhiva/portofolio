import React from 'react'
import { 
    useColorMode,
    Button,
    Flex,
    Box
} from '@chakra-ui/react';

import NextLink from 'next/link'
import styled from '@emotion/styled'

import DarkModeSwitch from './DarkModeSwitch';

const Container = ({ children }) => {
    const { colorMode } = useColorMode();
    
    const bgColor = {
        light: 'gray.50',
        dark: 'gray.900'
    }

    const navHoverBg = {
        light: 'gray.300',
        dark: 'gray.600'
    }

    const color = {
        light: 'black',
        dark: 'white',
    }

    const StickNav = styled(Flex)`
        position: sticky;
        z-index: 10;
        top: 0;
        backdrop-filter: saturate(180%) blur(20px);
        transition: height .5s, line-height .5s;
    `
    return (
        <>
            <StickNav
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                minWidth="356px"
                width="100%"
                bg={bgColor[colorMode]}
                as="nav"
                px={[2, 6, 6]}
                py={2}
                mb={[0, 0, 8]}
                mx="auto"
            >
                <Box
                    alignItems="center"
                >
                    <NextLink href="/" passHref>
                        <Button
                            as="a" variant="ghost" p={[1,2,4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}
                        >
                            Home
                        </Button>
                    </NextLink>
                    <NextLink href="/blog" passHref>
                        <Button
                            as="a" variant="ghost" p={[1,2,4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}
                        >
                            Blog
                        </Button>
                    </NextLink>
                    <NextLink href="/portofolio" passHref>
                        <Button
                            as="a" variant="ghost" p={[1,2,4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}
                        >
                            Portofolio
                        </Button>
                    </NextLink>
                    <DarkModeSwitch />
                </Box>
            </StickNav>
            <Flex
                as="main"
                justifyContent="center"
                flexDirection="column"
                color={color[colorMode]}
                px={[0, 4, 4]}
                mt={[4, 8, 8]}
            >
                {children}
            </Flex>
        </>
    )
}

export default Container