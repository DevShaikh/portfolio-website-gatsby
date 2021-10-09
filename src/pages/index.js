// React
import React from "react"

// Chakra-UI
import { Box, Flex, Heading, Text } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/image"
import { Button } from "@chakra-ui/button"

export default function Home() {
  return (
    <Flex alignItems="center" height="81vh" justifyContent="space-between">
      <Box width="45%">
        <Box mb="4">
          <Heading size="3xl" fontWeight="bold">
            Design
          </Heading>
          <Heading size="2xl" fontWeight="light" mt="2" mb="4">
            Develop & Deploy
          </Heading>
          <Text>Jr. Fullstack web developer based in Pakistan.</Text>
        </Box>
        <Button variant="primary">My Portfolio & Projects</Button>
      </Box>
      <Box width="55%">
        <Image
          src="/svg/portfolio.svg"
          filter="drop-shadow(2px 4px 6px black) drop-shadow(2px 4px 4px #00000075)"
        />
      </Box>
    </Flex>
  )
}
