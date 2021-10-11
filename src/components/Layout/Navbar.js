// React
import React from "react"

// Gatsby
import { Link, graphql, useStaticQuery } from "gatsby"

// Chakra-UI
import {
  Box,
  Heading,
  Container,
  Flex,
  Button,
  useDisclosure,
} from "@chakra-ui/react"

import SideNav from "./SideNav"

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

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
    <div style={{ padding: "8px 0px", marginBottom: "16px" }}>
      <Container maxW="1200px">
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Heading>{title}</Heading>
          </Box>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            display={["none", "none", "flex", "flex"]}
          >
            <Link to="/">
              <Button variant="navLink">Home</Button>
            </Link>
            <Link to="/projects">
              <Button variant="navLink">Projects</Button>
            </Link>
            <Link to="/about">
              <Button variant="navLink">About</Button>
            </Link>
          </Flex>
          <Box display={["none", "none", "block", "block"]}>
            <Link to="/about">
              <Button variant="primary">Contact</Button>
            </Link>
          </Box>
          <Box display={["block", "block", "none", "none"]} onClick={onOpen}>
            <Button variant="primary" fontSize="36px">
              {"="}
            </Button>
          </Box>
        </div>
      </Container>
      <SideNav isOpen={isOpen} onClose={onClose} />
    </div>
  )
}

export default Navbar
