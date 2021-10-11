import React from "react"

import {
  Box,
  Flex,
  Heading,
  ListItem,
  OrderedList,
  Text,
} from "@chakra-ui/layout"

const about = () => {
  return (
    <Box py="12" minH="81vh">
      <Box mb="4">
        <Heading size="lg" fontWeight="bold" mb="2">
          About Me
        </Heading>
        <Text>
          Hi, I am a Junior Full stack Developer having experience of around 3
          years of building web apps that just work across all platforms and
          browsers mainly using JavaScript with its frameworks and many other
          modern tools and technologies with the most latest techniques.
        </Text>
      </Box>
      <Box>
        <Heading size="lg" fontWeight="bold" mb="2">
          Contact
        </Heading>
        <OrderedList listStyleType="none" margin="0" width="max-content">
          <ListItem>
            <Flex alignItems="center">
              <Text width="100px">Email:</Text>
              <a
                href="mailto:asofficial4k@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <Flex alignItems="center">
                  <Text color="secondary" ml="1">
                    asofficial4k@gmail.com
                  </Text>
                </Flex>
              </a>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex alignItems="center">
              <Text width="99px">Linkedin:</Text>
              <a
                href="https://www.linkedin.com/in/devshaikh/"
                target="_blank"
                rel="noreferrer"
              >
                <Flex alignItems="center">
                  <Text color="secondary" ml="1">
                    devshaikh
                  </Text>
                </Flex>
              </a>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex alignItems="center">
              <Text width="100px">Github:</Text>
              <a
                href="https://github.com/DevShaikh"
                target="_blank"
                rel="noreferrer"
              >
                <Flex alignItems="center">
                  <Text color="secondary" ml="1">
                    DevShaikh
                  </Text>
                </Flex>
              </a>
            </Flex>
          </ListItem>
        </OrderedList>
      </Box>
    </Box>
  )
}

export default about
