// React
import React from "react"

// Chakra-UI
import { Box, Flex, Heading, Text } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/image"
import { Button } from "@chakra-ui/button"
import { Link } from "gatsby"

const Home = () => {
  return (
    <div style={{ height: "81vh" }}>
      <Flex
        alignItems="center"
        justifyContent={[
          "flex-start",
          "flex-start",
          "space-between",
          "space-between",
        ]}
        flexDir={["column", "column", "row", "row"]}
      >
        <Box style={{ width: "45%" }}>
          <Box mb="4">
            <Heading size="3xl" fontWeight="bold">
              Design
            </Heading>
            <Heading size="2xl" fontWeight="light" mt="2" mb="4">
              Develop & Deploy
            </Heading>
            <Text>Jr. Fullstack web developer based in Pakistan.</Text>
          </Box>
          <Link to="/projects">
            <Button variant="primary">My Portfolio & Projects</Button>
          </Link>
        </Box>
        <Box width="55%">
          <Image
            src="/svg/portfolio.svg"
            filter="drop-shadow(2px 4px 6px black) drop-shadow(2px 4px 4px #00000075)"
          />
        </Box>
      </Flex>
    </div>
  )
}
export default Home
