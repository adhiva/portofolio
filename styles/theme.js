// 1. Import the extendTheme function
import { extendTheme, theme } from "@chakra-ui/react"
import { theme as ChakraThemes } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

// 2. Overrides ChakraTheme
const fonts = {
    ...theme.fonts,
    body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    heading: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
}

const breakpoints = createBreakpoints({
    sm: "40em",
    md: "52em",
    lg: "64em",
    lg: "62em",
})

const overrides = {
    ...ChakraThemes,
    fonts,
    breakpoints,
    fontWeights: {
        normal: 300,
        medium: 600,
        bold: 700,
    },
    fontSizes: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "28px",
        "4xl": "36px",
        "5xl": "48px",
        "6xl": "64px",
    },
}

const customTheme = extendTheme(overrides)

// 3. Pass the `theme` prop to the `ChakraProvider`
export default customTheme