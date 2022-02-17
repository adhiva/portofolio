import { useColorMode, IconButton, Link } from '@chakra-ui/react'
import { FiTwitter, FiInstagram, FiGithub, FiLinkedin } from 'react-icons/fi'

const SocialMediaIcon = () => {
    const { colorMode } = useColorMode()
    const iconColor = {
        light: 'black',
        dark: 'white'
    }
    
    const footerHoverBg = {
        light: 'gray.100',
        dark: 'gray.700',
    }

    return (
        <>
            <Link href={process.env.LINKEDIN_URL} isExternal>
                <IconButton 
                    icon={<FiLinkedin />} 
                    variant="ghost"
                    color={iconColor[colorMode]}
                    _hover={{ backgroundColor: footerHoverBg[colorMode] }}
                />
            </Link>
            <Link href={process.env.GITHUB_URL} isExternal>
                <IconButton 
                    icon={<FiGithub />} 
                    variant="ghost"
                    color={iconColor[colorMode]}
                    _hover={{ backgroundColor: footerHoverBg[colorMode] }}
                />
            </Link>
            <Link href={process.env.INSTAGRAM_URL} isExternal>
                <IconButton 
                    icon={<FiInstagram />} 
                    variant="ghost"
                    color={iconColor[colorMode]}
                    _hover={{ backgroundColor: footerHoverBg[colorMode] }}
                />
            </Link>
            <Link href={process.env.TWITTER_URL} isExternal>
                <IconButton 
                    icon={<FiTwitter />} 
                    variant="ghost"
                    color={iconColor[colorMode]}
                    _hover={{ backgroundColor: footerHoverBg[colorMode] }}
                />
            </Link>
        </>
    )
}

export default SocialMediaIcon