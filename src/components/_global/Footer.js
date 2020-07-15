import React from "react";
// import { Link as GatsbyLink } from "gatsby";
import { Box, Button, Flex, Heading, Image, Text, useColorMode } from "@chakra-ui/core";

const links = [
  {
    label: 'Foundation',
    items: [
      {label: 'About', url: '/about',},
      {label: 'Services', url: '/services',},
      {label: 'Sectors', url: '/sectors',},
      {label: 'Join Us', url: '/join-us',},
    ],
  },
  {
    label: 'Technology',
    items: [
      {label: 'Overview', url: 'https://pathcheck.org/en/technology/',},
      {label: 'PathCheck GAEN', url: 'https://pathcheck.org/en/technology/google-apple-exposure-notification-solution/',},
      {label: 'PathCheck GPS+', url: 'https://pathcheck.org/en/technology/gps-digital-contact-tracing-solution/',},
      {label: 'Github', url: 'https://github.com/Path-Check',},
      {label: 'Jira', url: 'https://pathcheck.atlassian.net/secure/BrowseProjects.jspa',},
    ],
  },
  {
    label: 'Think Tank',
    items: [
      {label: 'Events', url: 'https://pathcheck.org/events/',},
      {label: 'Resources', url: 'https://pathcheck.org/en/resources/',},
      {label: 'Blog', url: 'https://pathcheck.org/en/blog',},
    ],
  },
  {
    label: 'Policies',
    items: [
      {label: 'Code of Conduct', url: 'https://pathcheck.org/en/policies/code-of-conduct',},
      {label: 'Website Terms of Service', url: 'https://pathcheck.org/en/policies/website-terms-of-use/',},
      {label: 'Website Privacy Policy', url: 'https://pathcheck.org/en/policies/website-privacy-policy',},
    ],
  },
  {
    label: 'Social Media',
    items: [
      {label: 'YouTube', url: 'https://www.youtube.com/channel/UCNoELeOfe_kGiVmus0HYANA',},
      {label: 'Facebook', url: 'https://www.facebook.com/pathcheck',},
      {label: 'Twitter', url: 'https://twitter.com/PathCheck_fnd',},
      {label: 'LinkedIn', url: 'https://www.youtube.com/redirect?event=video_description&v=MNlGQpd0KWo&q=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F65264178&redir_token=QUFFLUhqbGNuZi1fZ3N6ZFRHZEprX29RSGJvc2Vaekt1UXxBQ3Jtc0tsWi14UW5YVGdNcnZtVGFDdm0tMWtBejN2MXU5VXQ3SERaNVMzYWYwa193RGNDREJBV2dfSzg0dWN6SlQydXV4SnlRT1NUR0pxS0RmTEpqS2pGbGJITUs5WUxxLU1rbm5nTHBXRk5yWTV2RVZQMUxqZw%3D%3D',},
      {label: 'Instagram', url: 'https://www.instagram.com/pathcheck',},
    ],
  },
];

const Column = ({ label, items }) => (
  <Box key={label} width={{ base:"100%", lg:"20%" }} mt="4" pr="4">
    <Heading size="md">{label}</Heading>
      {items.map((i) => (
        <Text key={i.label} mt="2">
          {/* <Link as={GatsbyLink} to={i.url}>{i.label}</Link> */}
          {i.label}
        </Text>
      ))}
  </Box>
);

const Footer = () => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "purple.700", dark: "purple.900" };
  const color = { light: "whiteAlpha.900", dark: "whiteAlpha.900" };
  
  return (
    <Box
      as="footer"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      pt="8"
      pb="8"
    >
      <Box
        className="container container--expanded"
      >
        <Flex
          align="flex-start"
          flexDirection={{ base: "column", lg: "row" }}
        >
          {links.map(Column)}
        </Flex>
        <Box mt="16">
          <Flex alignItems="center">
            <Button
              bg="white"
              color="gray.900"
              padding="1.75rem 2rem"
              borderRadius="2rem"
              size="sm"
              _hover={{ bg:"blue.500", color:"white" }}
            >
              <Image src="https://staging-safepaths.kinsta.cloud/resources/app-store-dark.png" width="14px" mr="2" />
              App Store
            </Button>
            <Button
              bg="white"
              color="gray.900"
              padding="1.75rem 2rem"
              borderRadius="2rem"
              size="sm"
              _hover={{ bg:"blue.500", color:"white" }}
              ml="8"
            >
              <Image src="https://staging-safepaths.kinsta.cloud/resources/google-play-icon.png" width="16px" mr="2" />
              Google Play
            </Button>
          </Flex>
          <Text mt="8">
            PathCheck Foundation
            <br />
            Cambridge MA 02139-4307
            <br />
            ©{new Date().getFullYear()}. PathCheck Foundation – a 501(c)(3) nonprofit.
          </Text>
          <Text fontSize="12px" width={{ base:"100%", md:"50%" }} mt="8">
            Content is distributed under the Creative Commons CC-BY License unless otherwise stated. PathCheck is a trademark of PathCheck Foundation.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
