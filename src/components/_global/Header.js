import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { Box, Heading, Flex, Text, Button, Link, useColorMode } from "@chakra-ui/core";

const MenuItem = ({ url, label }) => (
  <Text mr={{ base: 0, md: 4 }}>
    <Link as={GatsbyLink} to={url}>{label}</Link>
  </Text>
);

const Header = props => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  const bgColor = { light: "gray.50", dark: "blue.500" };
  const color = { light: "blue.400", dark: "whiteAlpha.900" };

  return (
    <Flex
      align="center"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
    >
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
          <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
            <Link as={GatsbyLink} to="/">PathCheck PR</Link>
          </Heading>
        </Flex>

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
          ].map(i => MenuItem(i))}
        </Box>

        <Box
          display={{ sm: show ? "block" : "none", md: "block" }}
          mt={{ base: 4, md: 0 }}
        >
          <Button bg="transparent" border="1px" size="sm" _hover={{ bg:"blue.500", color:"white", borderColor:"blue.500" }} onClick={toggleColorMode}>
            Toggle Mode
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Header;
