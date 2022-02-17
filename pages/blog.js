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
                    alignItems="center"
                >
                    <Flex
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        px={4}
                        maxWidth={"1000px"}
                        minWidth={"1000px"}
                    >
                        <Heading textAlign="center" letterSpacing="tight" mb={4} as="h1" size="2xl">
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