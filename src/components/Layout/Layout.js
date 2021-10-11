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
    <Box width="100%">
      <Navbar />
      <Container maxW="1200px">{children}</Container>
      <Footer />
    </Box>
  )
}

export default Layout
