import { extendTheme } from "@chakra-ui/react"

import buttonStyles from "./buttonStyles"

const theme = extendTheme({
  colors: {
    primary: "#845EC2",
    primaryLight: "#be5dd6",
    secondary: "#D42990",
  },
  components: {
    Button: buttonStyles,
  },
})

export default theme
