import React from "react"
// import { Link as GatsbyLink } from "gatsby"
import { Heading, Flex, useColorMode } from "@chakra-ui/core"
// import LanguageSelector from "./LanguageSelector"

// const MenuItem = ({ url, label }, lang) => (
//   <Text key={label} mr={{ base: 0, md: 4 }}>
//     <Link as={GatsbyLink} to={lang === "en" ? url : `/${lang}${url}`}>
//       {label}
//     </Link>
//   </Text>
// )

const Header = props => {
  const { colorMode } = useColorMode()
  // const [show, setShow] = React.useState(false)
  // const handleToggle = () => setShow(!show)
  const bgColor = { light: "gray.50", dark: "blue.500" }
  const color = { light: "blue.400", dark: "whiteAlpha.900" }

  return (
    <Flex align="center" bg={bgColor[colorMode]} color={color[colorMode]}>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem 0"
        {...props}
        className="container container--expanded"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg">
            Rastrea el Virus
          </Heading>
        </Flex>

        {/* 
        <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
          <svg
            fill="white"
            width="12px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Box>

        <Box
          display={{ sm: show ? "block" : "none", md: "flex" }}
          width={{ sm: "full", md: "auto" }}
          alignItems="center"
          justifyContent="flex-end"
          flexGrow={1}
          color={color[colorMode]}
        >
          {[
            {url: '/about', label: 'About'},
            {url: '/technology', label: 'Technology'},
            {url: '/resources', label: 'Resources'},
          ].map(i => MenuItem(i, props.lang))}
        </Box>

        <Box>
          <LanguageSelector location={props.location} lang={props.lang} />
        </Box>
        */}
      </Flex>
    </Flex>
  )
}

export default Header
