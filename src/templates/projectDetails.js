import React from "react"

import { Box, Flex, Heading, Text } from "@chakra-ui/layout"

import projects from "../data/projects"
import { graphql } from "gatsby"
import { Image } from "@chakra-ui/image"
import { Tag } from "@chakra-ui/tag"
import { Button } from "@chakra-ui/button"

const projectDetails = ({ pageContext }) => {
  const project = projects.filter(
    data => data.title.split(" ").join("-").toLowerCase() === pageContext.slug
  )

  const { title, description, myRole, technologies, image } = project[0]

  console.log(technologies)

  return (
    <Box py="12" minH="84vh">
      {/* <a rel="noreferrer" target="_blank" href={project.link}> */}
      <Box mb="4">
        <Heading size="2xl" fontWeight="bold">
          {title}
        </Heading>
      </Box>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        py="5"
        flexDir={["column-reverse", "column-reverse", "row", "row"]}
      >
        <Box width={["100%", "100%", "45%", "45%"]}>
          <Box mb="5">
            <Text mb="1" fontWeight="bold">
              Description:
            </Text>
            <Text>{description}</Text>
          </Box>
          <Box mb="5">
            <Text mb="1" fontWeight="bold">
              My Role:
            </Text>
            <Text>{myRole}</Text>
          </Box>
          <Box mb="5">
            <Text mb="2" fontWeight="bold">
              Technologies:
            </Text>
            <Flex alignItems="center" flexWrap="wrap">
              {technologies.map((tech, key) => (
                <Tag m="1" key={key}>
                  {tech}
                </Tag>
              ))}
            </Flex>
          </Box>
          <Box mb="5">
            <Button variant="primary">Live Preview</Button>
          </Box>
        </Box>
        <Box width={["100%", "100%", "45%", "45%"]} mb={["5", "5", "0", "0"]}>
          <Image src={image} />
        </Box>
      </Flex>
    </Box>
  )
}

export const query = graphql`
  query MyQuery {
    route: sitePage {
      path
    }
  }
`

export default projectDetails
