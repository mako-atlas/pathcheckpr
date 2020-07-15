import React from "react";
import DefaultLayout from "../components/layouts/DefaultLayout";
import SEO from "../components/seo";
import { Box, Heading, Flex, Text, List, ListItem, ListIcon, Button, Image,  Icon, Divider, Link } from "@chakra-ui/core";

const Technology = () => (
  <DefaultLayout>
    <SEO title="Technology" />
    <Flex wrap='wrap' padding="24px">
      <Box width={{ base:"100%", lg:"60%" }}>
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
      <Box width={{ base:"100%", lg:"40%" }}>
        <Image src="https://pathcheck.org/resources/pathcheck-technology.png"/>
      </Box>
    </Flex>
    <Box bg="white" borderRadius="24px" padding={{ base:"50px", lg:"50px 100px" }}>
      <Heading as="h2" fontSize={{ base:"28px", lg:"50px" }} paddingBottom="12px" textAlign="center">
        One Platform. Many Solutions.
      </Heading>
      <Text textAlign="center">
        By working together we can contain coronavirus and restart the economy.
      </Text>
      <Flex align="center" textAlign="center" padding="50px 0" wrap="wrap">
        <Box width={{ base:"100%", lg:"33%" }}>
          <Image display={{ base: "block", lg:"none" }} padding="24px 0" src="https://pathcheck.org/resources/app_no_exposure_calendar.png"/>
          <Image display={{ base: "none", lg:"block" }} padding="24px 0" src="https://pathcheck.org/resources/app-possible-risk.png"/>  
        </Box>
        <Box width={{ base:"33%"}} display={{ base: "none", lg:"block" }}>
          <List styleType="none">
            <ListItem marginBottom="20px">WiFi Proximity*</ListItem>
            <ListItem marginBottom="20px">Testing Diary*</ListItem>
            <ListItem marginBottom="20px">Bluetooth Beacons*</ListItem>
          </List>
        </Box>
        <Box width={{ base:"100%", lg:"33%" }}>
          <Image display={{ base: "block", lg:"none" }} padding="24px 0"  src="https://pathcheck.org/resources/app_exposure_history-1.png"/>
          <Image display={{ base: "none", lg:"block" }} padding="24px 0" 
          src="https://pathcheck.org/resources/app-exposure-history-diagram.png"/>
        </Box>
      </Flex>
      <Text padding="24px 0" textAlign="center">
        Customize your solution with build-time and run-time options.
      </Text>
      <List textAlign="center" display={{ base: "block", lg:"none" }}>
        <ListItem>Location Diary</ListItem>
        <ListItem>Symptom Diary</ListItem>
        <ListItem>Exposure Notification</ListItem>
        <ListItem>GAEN Proximity</ListItem>
        <ListItem>Information Distribution</ListItem>
        <ListItem>Secure Communication</ListItem>
        <ListItem>WiFi Proximity*</ListItem>
        <ListItem>Testing Diary*</ListItem>
        <ListItem>Bluetooth Beacons*</ListItem>
      </List>
      <Flex wrap='wrap'>
        <Flex flexDirection="column" align="center" padding="24px 0" width={{ base:"100%", lg:"50%" }}>
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
        </Flex>
        <Flex flexDirection="column" align="center" padding="24px 0" width={{ base:"100%", lg:"50%" }}>
          <Heading as="h2" fontSize="25px" paddingBottom="24px">
            Run Time Choice
          </Heading>
          <List styleType="none">
            <ListItem marginBottom="20px">
              <ListIcon icon="check-circle" color="#4051db"/>Select the modules you need</ListItem>
            <ListItem marginBottom="20px">
              <ListIcon icon="check-circle" color="#4051db"/>Configure customization</ListItem>
            <ListItem marginBottom="20px">
              <ListIcon icon="check-circle" color="#4051db"/>Build your app</ListItem>
          </List>
        </Flex>
      </Flex>
      <Text textAlign="right" fontSize="14px">
        Coming soon *
      </Text>
    </Box>
    <Flex margin="80px 0" wrap='wrap'>
      <Box width={{ base:"100%", lg:"75%" }}>
        <Heading as="h2" fontSize="50px" paddingBottom="12px">
          The PathCheck GAEN Solution
        </Heading>
        <Text>
          Our end-to-end, open source Google Apple Exposure Notification (GAEN) solution includes app, server, and services.
        </Text>
      </Box>
      <Box width={{ base:"100%", lg:"25%" }} textAlign="right" marginTop={{ base:"12px", lg:"0" }}>
        <Button bg="transparent" border="2px solid #4051db" color="#4051db" padding="1.75rem 2rem" borderRadius="2rem" size="sm" _hover={{ bg:"#4051db", color:"white" }} ml="8" fontSize="20px">
          <Link href="https://pathcheck.org/en/technology/google-apple-exposure-notification-solution/">Learn More</Link>
          <Icon name="arrow-forward" size="24px"/>
        </Button>
      </Box>
    </Flex>
    <Flex marginBottom="60px" wrap='wrap'>
      <Box width={{ base:"100%", lg:"33%" }}>
        <Flex align="center" paddingBottom="12px" minHeight="75px">
          <Box marginRight="12px">
            <Image src="https://pathcheck.org/resources/pathcheck-gaen-app.png"/>
          </Box>
          <Heading as="h3" fontSize="25px" marginRight="12px">
            Customizable GAEN App
          </Heading>
        </Flex>
        <List styleType="none">
          <ListItem marginBottom="20px">
            <ListIcon icon="check" color="#4051db"/>
            Built on the PathCheck Platform
          </ListItem>
          <ListItem marginBottom="20px">
            <ListIcon icon="check" color="#4051db"/>
            Customizable
          </ListItem>
          <ListItem marginBottom="20px">
            <ListIcon icon="check" color="#4051db"/>
            Access to multiple modules
          </ListItem>
          <ListItem marginBottom="20px">
            <ListIcon icon="check" color="#4051db"/>
            100% compliant with GAEN
          </ListItem>
        </List>
      </Box>
      <Box width={{ base:"100%", lg:"33%" }}>
        <Flex align="center" paddingBottom="12px" minHeight="75px">
          <Box marginRight="12px">
            <Image src="https://pathcheck.org/resources/exposure-notification-server.png"/>
          </Box>
          <Heading as="h3" fontSize="25px" marginRight="12px">
          Exposure Notification Server
          </Heading>
        </Flex>
        <List styleType="none">
          <ListItem marginBottom="20px">
            <ListIcon icon="check" color="#4051db"/>
            Based on Google open source 
          </ListItem>
          <ListItem marginBottom="20px">
            <ListIcon icon="check" color="#4051db"/>
            Fully integrated with app
          </ListItem>
          <ListItem marginBottom="20px">
            <ListIcon icon="check" color="#4051db"/>
            Scalable
          </ListItem>
        </List>
      </Box>
      <Box width={{ base:"100%", lg:"33%" }}>
        <Flex align="center" paddingBottom="12px" minHeight="75px">
          <Box marginRight="12px">
            <Image src="https://pathcheck.org/resources/hosting-and-services.png"/>
          </Box>
          <Heading as="h3" fontSize="25px" marginRight="12px">
            Hosting and Services
          </Heading>
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
            EN server cloud solutions
          </ListItem>
          <ListItem marginBottom="20px">
            <ListIcon icon="check" color="#4051db"/>
            Fast, secure deployment
          </ListItem>
        </List>
      </Box>
    </Flex>
    <Divider/>
    <Flex margin="80px 0" wrap='wrap'>
      <Box width={{ base:"100%", lg:"75%" }}>
        <Heading as="h2" fontSize="50px" paddingBottom="12px">
        The PathCheck GPS+ Solution
        </Heading>
        <Text>
          Our end-to-end, open source GPS and multi-protocol solutions complement manual contact tracing with new capabilities.
        </Text>
      </Box>
      <Box width={{ base:"100%", lg:"25%" }} textAlign="right" marginTop={{ base:"12px", lg:"0" }}>
        <Button bg="transparent" border="2px solid #4051db" color="#4051db" padding="1.75rem 2rem" borderRadius="2rem" size="sm" _hover={{ bg:"#4051db", color:"white" }} ml="8" fontSize="20px">
          <Link href="https://pathcheck.org/en/technology/gps-digital-contact-tracing-solution/">Learn More</Link>
          <Icon name="arrow-forward" size="24px"/>
        </Button>
      </Box>
    </Flex>
    <Flex marginBottom="60px" wrap='wrap'>
      <Box width={{ base:"100%", lg:"33%" }}>
        <Flex align="center" paddingBottom="12px" minHeight="75px">
          <Box marginRight="12px">
            <Image src="https://pathcheck.org/resources/pathcheck-gaen-app.png"/>
          </Box>
          <Heading as="h3" fontSize="25px" marginRight="12px">
            PathCheck App
          </Heading>
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
        <Flex align="center" paddingBottom="12px" minHeight="75px">
          <Box marginRight="12px">
            <Image src="https://pathcheck.org/resources/safeplaces.png"/>
          </Box>
          <Heading as="h3" fontSize="25px" marginRight="12px">
            SafePlaces
          </Heading>
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
        <Flex align="center" paddingBottom="12px" minHeight="75px">
          <Box marginRight="12px">
            <Image src="https://pathcheck.org/resources/hosting-and-services.png"/>
          </Box>
          <Heading as="h3" fontSize="25px" marginRight="12px">
            Hosting and Services
          </Heading>
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