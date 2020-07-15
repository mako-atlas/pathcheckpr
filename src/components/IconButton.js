import React from "react"
import { PseudoBox, Box } from "@chakra-ui/core";
import * as FontAwesomeIcons from "react-icons/fa";

const IconButton = (props) => {
  return (
    <PseudoBox
      as="a"
      bg={props.iconObject.buttonColor}
      rounded="md"
      width="32px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="32px"
      mr="10px"
      href={props.iconObject.link}
    >
      <Box as={FontAwesomeIcons[props.iconObject.icon]} color={props.iconObject.iconColor}/>
    </PseudoBox>
  )
}

export default IconButton

