import { useColorMode, IconButton, Link } from '@chakra-ui/react'
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'

const SocialMediaIcon = () => {
    const { toggleColorMode } = useColorMode()

    return (
        <>
            <Link href={process.env.LINKEDIN_URL} isExternal>
                <IconButton mr={2} icon={<FaLinkedin />} isRound='true' />
            </Link>
            <Link href={process.env.GITHUB_URL} isExternal>
                <IconButton mr={2} icon={<FaGithub />} isRound='true' onClick={toggleColorMode} />
            </Link>
            <Link href={process.env.INSTAGRAM_URL} isExternal>
                <IconButton mr={2} icon={<FaInstagram />} isRound='true' onClick={toggleColorMode} />
            </Link>
            <Link href={process.env.TWITTER_URL} isExternal>
                <IconButton mr={2} icon={<FaTwitter />} isRound='true' onClick={toggleColorMode} />
            </Link>
        </>
    )
}

export default SocialMediaIcon