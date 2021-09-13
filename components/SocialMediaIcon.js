import { useColorMode, IconButton } from '@chakra-ui/react'
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'

const SocialMediaIcon = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const iconColor = {
        light: 'black',
        dark: 'white'
    }
    return (
        <>
        <IconButton mr={2} icon={<FaLinkedin />} isRound='true' onClick={toggleColorMode} />
        <IconButton mr={2} icon={<FaGithub />} isRound='true' onClick={toggleColorMode} />
        </>
    )
}

export default SocialMediaIcon