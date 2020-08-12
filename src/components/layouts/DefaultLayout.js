import React from "react"
import PropTypes from "prop-types"
import AppLayout from "./AppLayout"
import { Header } from "../_global"
import { Box } from "@chakra-ui/core"

import "../scss/ui.scss"

const DefaultLayout = ({ children, location, lang }) => {
  return (
    <AppLayout>
      <Header location={location} lang={lang} />
      <Box className="container" pt="8" pb="8">
        <main>{children}</main>
      </Box>
      {/* <Footer /> */}
    </AppLayout>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  lang: PropTypes.string.isRequired,
}

export default DefaultLayout
