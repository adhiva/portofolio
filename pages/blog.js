import React, { useState } from 'react'
import Head from 'next/head'
import { 
    Heading,
    Flex,
    Stack,
} from '@chakra-ui/react';
import Container from '../components/Container'
import { getAllFilesFrontMatter } from '../lib/mdx'
import BlogPost from '../components/BlogPost';
 
export default function Blog( { posts }) {
    return (
        <>
            <Head>
                <title>Blog - Adhitya Giva Muhamamd</title>
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
                        <Heading letterSpacing="tight" mb={4} as="h1" size="2xl">
                            Blog ({posts.length} posts)
                        </Heading>
                        {posts.map((frontMatter) => <BlogPost key={frontMatter.title} {...frontMatter} />)}
                    </Flex>
                </Stack>
            </Container>
        </>
    )
}

export async function getStaticProps() {
    const posts = await getAllFilesFrontMatter('blog')

    return { props: { posts } }
}