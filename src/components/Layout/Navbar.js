// React
import React from "react"

// Gatsby
import { Link } from "gatsby"

// Chakra-UI
import { Box, Heading, Container, Flex, Button } from "@chakra-ui/react"

const Navbar = () => {
  return (
    <Box py="2">
      <Container maxW="1200px">
        <Flex justifyContent="space-between">
          <Box>
            <Heading>Ahmed Shaikh</Heading>
          </Box>
          <Flex justifyContent="space-between" alignItems="center">
            <Button variant="navLink">
              <Link to="/home">Home</Link>
            </Button>
            <Button variant="navLink">
              <Link to="/projects">Projects</Link>
            </Button>
            <Button variant="navLink">
              <Link to="/about">About</Link>
            </Button>
          </Flex>
          <Box>
            <Button variant="primary">Contact</Button>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
