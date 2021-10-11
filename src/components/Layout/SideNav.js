import React from "react"

import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal"
import { Link } from "gatsby"
import { Button } from "@chakra-ui/button"
import { Flex } from "@chakra-ui/react"

const SideNav = ({ isOpen, onClose }) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      background="primary"
    >
      <DrawerOverlay backdropFilter="blur(4px)" />
      <DrawerContent background="#000000a3">
        <DrawerCloseButton />
        <DrawerHeader>Menu</DrawerHeader>

        <DrawerBody>
          <Flex flexDir="column">
            <Link to="/">
              <Button variant="navLink" onClick={onClose}>
                Home
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="navLink" onClick={onClose}>
                Projects
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="navLink" onClick={onClose}>
                About
              </Button>
            </Link>
            <Link to="/about" style={{ marginTop: "16px" }}>
              <Button variant="primary" onClick={onClose}>
                Contact
              </Button>
            </Link>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default SideNav
