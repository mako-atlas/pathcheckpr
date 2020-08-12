import React from "react"
import PropTypes from "prop-types"
import AppLayout from "./AppLayout"
import { Box } from "@chakra-ui/core"

import "../scss/ui.scss"

const PlainLayout = ({ children, location, lang }) => {
  return (
    <AppLayout>
      <Box className="container" pt="8" pb="8">
        <main className="plain">{children}</main>
      </Box>
    </AppLayout>
  )
}

PlainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  lang: PropTypes.string.isRequired,
}

export default PlainLayout
