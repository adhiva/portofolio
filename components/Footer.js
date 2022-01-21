import {
  Box,
  Container,
  Stack,
  Text,
  useColorMode,
  Image,
} from "@chakra-ui/react";
import SocialMediaIcon from "./SocialMediaIcon";

const Logo = ({colorMode}) => {
    
    return (
        <Image
            w="100px"
            h="50px"
            objectFit="cover"
            src={colorMode === 'dark' ? "/images/dark-theme-logo.png" : "/images/light-theme-logo.png"}
            alt="Profile Picture"
            fallbackSrc="https://via.placeholder.com/150"
        />
    );
};

const Footer = () => {
  const { colorMode } = useColorMode();

  const bgColor = {
    light: "gray.50",
    dark: "gray.900",
  };

  const fontColor = {
    light: "gray.700",
    dark: "gray.200",
  };

  return (
    <Box
      bg={bgColor[colorMode]}
      color={fontColor[colorMode]}
      position={"absolute"}
      left={0}
      bottom={0}
      right={0}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Logo colorMode={colorMode} />
        <Text>
          © {new Date().getFullYear()} Adhitya Giva Muhammad. All rights
          reserved
        </Text>
        <Stack direction={"row"} spacing={3}>
          <SocialMediaIcon />
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
