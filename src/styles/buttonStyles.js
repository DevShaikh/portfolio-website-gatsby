import { mode, whiten, darken } from "@chakra-ui/theme-tools"

const buttonStyles = {
  // 1. We can update the base styles
  baseStyle: {},
  // 2. We can add a new button size or extend existing
  sizes: {},
  // 3. We can add a new visual variant
  variants: {
    simple: props => ({
      background: "none",
      color: "white",
      _hover: {
        bg: mode(darken("primary", 20), whiten("primary", 20)),
        boxShadow: "md",
      },
    }),
    primary: props => ({
      background: "secondary",
      color: "white",
      _hover: {
        bg: mode(darken("secondary", 10), whiten("secondary", 10)),
        boxShadow: "md",
      },
    }),
    secondary: props => ({
      background: "primary",
      color: "white",
      _hover: {
        bg: mode(darken("primary", 10), whiten("primary", 10)),
        boxShadow: "md",
      },
    }),
    navLink: props => ({
      background: "none",
      color: "white",
      borderRadius: "none",
      borderBottom: "3px solid transparent",
      _hover: {
        borderColor: "#fff",
      },
    }),
  },
}

export default buttonStyles
