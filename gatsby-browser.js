const React = require("react")

const { ChakraProvider } = require("@chakra-ui/react")
const { default: Layout } = require("./src/components/Layout/Layout")
const { default: theme } = require("./src/styles/theme")

// Wraps every page in a component
exports.wrapPageElement = ({ element }) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>{element}</Layout>
    </ChakraProvider>
  )
}
