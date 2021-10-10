// React
import React from "react"

// Gatsby
import { Link, graphql, useStaticQuery } from "gatsby"

// Chakra-UI
import { Box, Heading, Container, Flex, Button } from "@chakra-ui/react"

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  return (
    <Box py="2" mt="4">
      <Container maxW="1200px">
        <Flex justifyContent="space-between">
          <Box>
            <Heading>{title}</Heading>
          </Box>
          <Flex justifyContent="space-between" alignItems="center">
            <Button variant="navLink">
              <Link to="/">Home</Link>
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
