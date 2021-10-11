import React from "react"

// Chakra-UI
import { Box, Grid, Heading } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/image"
import { Button } from "@chakra-ui/button"

// Projects
import projectsData from "../data/projects"
import { Link } from "gatsby"

const projects = () => {
  return (
    <Box py="12">
      <Box textAlign="center" mb="4">
        <Heading size="3xl" fontWeight="bold">
          Portfolio
        </Heading>
        <Heading size="2xl" fontWeight="light" mt="2" mb="4">
          Projects & Websites I've Created
        </Heading>
      </Box>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(3, 1fr)",
        ]}
        py="8"
        gap="8"
      >
        {projectsData.map((project, key) => {
          const slug = project.title.split(" ").join("-").toLowerCase()
          return (
            <Box key={key} textAlign="center" my="4">
              <Link to={`/projects/${slug}`}>
                <Image src={project.image} mb="4" />
                <Button variant="link">
                  <Heading size="md">{project.title}</Heading>
                </Button>
              </Link>
            </Box>
          )
        })}
      </Grid>
    </Box>
  )
}

export default projects
