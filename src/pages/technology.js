import React from "react";
import DefaultLayout from "../components/layouts/DefaultLayout";
import SEO from "../components/seo";
import { Box, Heading, Flex, Text, List, ListItem, ListIcon, Button, Icon} from "@chakra-ui/core";

const Technology = () => (
  <DefaultLayout>
    <SEO title="Technology" />
    <Flex padding="24px">
      <Box width={{ base:"100%", lg:"65%" }}>
        <Heading as="h1" fontSize="50px" paddingBottom="36px">
          A Platform for Digital Contact Tracing and Exposure Notification
        </Heading>
        <Text paddingBottom="24px">
          The PathCheck suite of open source software gives public and private sector organizations solutions for digital contact tracing and exposure notification.
        </Text>
        <List styleType="disc">
          <ListItem marginBottom="20px">Designed for privacy</ListItem>
          <ListItem marginBottom="20px">End to end solutions</ListItem>
          <ListItem marginBottom="20px">GAEN or GPS+</ListItem>
          <ListItem marginBottom="20px">Adaptable to your needs</ListItem>
        </List>
      </Box>
      <Box><span>Image</span></Box>
    </Flex>
    <Box bg="white" borderRadius="lg" padding="50px 100px">
      <Heading as="h2" fontSize="50px" paddingBottom="12px" textAlign="center">
        One Platform. Many Solutions.
      </Heading>
      <Text textAlign="center">
        By working together we can contain coronavirus and restart the economy.
      </Text>
      <Flex align="center" textAlign="center" padding="50px 0">
        <Box width={{ base:"100%", lg:"33%" }}><span>Image</span></Box>
        <Box width={{ base:"100%", lg:"33%" }}>
          <List styleType="none">
            <ListItem marginBottom="20px">WiFi Proximity*</ListItem>
            <ListItem marginBottom="20px">Testing Diary*</ListItem>
            <ListItem marginBottom="20px">Bluetooth Beacons*</ListItem>
          </List>
        </Box>
        <Box width={{ base:"100%", lg:"33%" }}><span>Image</span></Box>
      </Flex>
      <Text textAlign="center">
        Customize your solution with build-time and run-time options.
      </Text>
      <Flex padding="50px 0">
        <Box width={{ base:"100%", lg:"50%" }}>
          <Heading as="h2" fontSize="25px" paddingBottom="24px">
            Build Time Choice
          </Heading>
          <List styleType="none">
            <ListItem marginBottom="20px">
              <ListIcon icon="check-circle" color="#4051db" />Select the modules you need</ListItem>
            <ListItem marginBottom="20px">
              <ListIcon icon="check-circle" color="#4051db" />Configure customization</ListItem>
            <ListItem marginBottom="20px">
              <ListIcon icon="check-circle" color="#4051db" />Build your app</ListItem>
          </List>
        </Box>
        <Box width={{ base:"100%", lg:"50%" }}>
          <Heading as="h2" fontSize="25px" paddingBottom="24px">
            Run Time Choice
          </Heading>
          <List styleType="none">
            <ListItem marginBottom="20px">
              <ListIcon icon="check-circle" color="#4051db" />Select the modules you need</ListItem>
            <ListItem marginBottom="20px">
              <ListIcon icon="check-circle" color="#4051db" />Configure customization</ListItem>
            <ListItem marginBottom="20px">
              <ListIcon icon="check-circle" color="#4051db" />Build your app</ListItem>
          </List>
        </Box>
      </Flex>
    </Box>
    <Flex margin="80px 0">
      <Box>
        <Heading as="h2" fontSize="50px" paddingBottom="12px">
          The PathCheck GAEN Solution
        </Heading>
        <Text>
          Our end-to-end, open source Google Apple Exposure Notification (GAEN) solution includes app, server, and services.
        </Text>
      </Box>
      <Box>
        <Button
          bg="white"
          color="blue.500"
          padding="1.75rem 2rem"
          borderRadius="2rem"
          size="sm"
          _hover={{ bg:"blue.500", color:"white" }}
          ml="8"
        >
          Learn More <Icon name="arrow-forward" size="24px" />
        </Button>
      </Box>
    </Flex>
    <Flex>
      <Box width={{ base:"100%", lg:"33%" }}>
        <Flex>
          <Heading as="h3" fontSize="25px" paddingBottom="12px">
            PathCheck App
          </Heading>
          <Box><span>Image</span></Box>
        </Flex>
        <List styleType="none">
          <ListItem marginBottom="20px">
            <ListIcon icon="check" color="#4051db"/>
            Built on the PathCheck Platform
          </ListItem>
          <ListItem marginBottom="20px">
            <ListIcon icon="check" color="#4051db"/>
            One app globally
          </ListItem>
          <ListItem marginBottom="20px">
            <ListIcon icon="check" color="#4051db"/>
            Adapts to each context
          </ListItem>
          <ListItem marginBottom="20px">
            <ListIcon icon="check" color="#4051db"/>
            iOS and Android
          </ListItem>
          <ListItem marginBottom="20px">
            <ListIcon icon="check" color="#4051db"/>
            GPS + (other protocols coming soon)
          </ListItem>
        </List>
      </Box>
      <Box width={{ base:"100%", lg:"33%" }}>
        <Flex>
          <Heading as="h3" fontSize="25px" paddingBottom="12px">
            SafePlaces
          </Heading>
          <Box><span>Image</span></Box>
        </Flex>
        <List styleType="none">
          <ListItem marginBottom="20px">
            <ListIcon icon="check" color="#4051db"/>
            Enhanced contact tracing interviews
          </ListItem>
          <ListItem marginBottom="20px">
            <ListIcon icon="check" color="#4051db"/>
            Location recording
          </ListItem>
          <ListItem marginBottom="20px">
            <ListIcon icon="check" color="#4051db"/>
            Ingestion of location diary data
          </ListItem>
          <ListItem marginBottom="20px">
            <ListIcon icon="check" color="#4051db"/>
            Publication of hot spot maps
          </ListItem>
        </List>
      </Box>
      <Box width={{ base:"100%", lg:"33%" }}>
        <Flex>
          <Heading as="h3" fontSize="25px" paddingBottom="12px">
            Hosting and Services
          </Heading>
          <Box><span>Image</span></Box>
        </Flex>
        <List styleType="none">
          <ListItem marginBottom="20px">
            <ListIcon icon="check" color="#4051db"/>
            Program design services
          </ListItem>
          <ListItem marginBottom="20px">
            <ListIcon icon="check" color="#4051db"/>
            Broad partner network
          </ListItem>
          <ListItem marginBottom="20px">
            <ListIcon icon="check" color="#4051db"/>
            SafePlaces CT cloud solutions
          </ListItem>
          <ListItem marginBottom="20px">
            <ListIcon icon="check" color="#4051db"/>
            Fast, secure deployment
          </ListItem>
        </List>
      </Box>
    </Flex>
  </DefaultLayout>
);

export default Technology;