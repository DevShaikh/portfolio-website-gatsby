// React
import React from "react"

// Chakra-UI
import { Box, Container } from "@chakra-ui/layout"

// Custom Components
import Footer from "./Footer"
import Navbar from "./Navbar"

// CSS
import "../../styles/app.css"

const Layout = ({ children }) => {
  return (
    <Box width="100%" height="100%">
      <Navbar />
      <Container maxW="1200px">
        <Box>{children}</Box>
      </Container>
      <Footer />
    </Box>
  )
}

export default Layout
