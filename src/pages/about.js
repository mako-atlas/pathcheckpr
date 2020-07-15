import React from "react";
import DefaultLayout from "../components/layouts/DefaultLayout";
import SEO from "../components/seo";
import NewsGrid from "../components/NewsGrid";
import { Heading, Text, Flex, List, ListItem, Divider, Link } from "@chakra-ui/core";

const About = () => (
  <DefaultLayout>
    <SEO title="About" />
    <Heading as="h1" fontSize="50px" pb="10px">Working Together to Stop COVID-19</Heading>
    <Text pb="60px" fontSize="25px" width={{ base:"100%", lg:"75%" }}>PathCheck Foundation is unleashing the power of a global community of organizations, researchers, health officials, and volunteers. We’re working together to build open source software, standards, and public health programs that help contain the pandemic, restart the economy, and protect individual freedom and privacy.</Text>
    
    <Divider width="100vw" ml="calc(50% - 50vw)"/>

    <Flex py="20px" wrap="wrap">
      <Text width={{ base:"100%", lg:"20%" }} fontSize="25px">
        Origin
      </Text>
      <Text width={{ base:"100%", lg:"80%" }} fontSize="17px">
      PathCheck was founded in February, 2020, at MIT by a passionate community of people and organizations to contain the spread of COVID-19 and help revitalize economies without sacrificing personal privacy. We’ve been pioneers in digital contact tracing and exposure notification technology. Our original technology was based on the MIT Private Kit: Safe Paths app created by Ramesh Raskar with Sandy Pentland, Kent Larson, and Kevin Esvelt.
      </Text>
    </Flex>

    <Flex py="20px" wrap="wrap"> 
      <Text width={{ base:"100%", lg:"20%" }} fontSize="25px">
        Team
      </Text>
      <Text width={{ base:"100%", lg:"80%" }} fontSize="17px">
      More than 1,600 volunteers around the world have joined the PathCheck community, many of them work with PathCheck full time to help stop the pandemic. More than 100 developers in the open source community contribute to our projects. In addition to volunteers, we have a core team of full-time software developers, and a wide range of companies donate employee time to our work. We hope you’ll <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdBg0nVcMyhuPyNUGpDydzj26CmuCjcOuR_EZ3H99XB6xyHHw/viewform" color="blue.400">join us</Link>.
      </Text>
    </Flex>

    <Flex py="20px" wrap="wrap">
      <Text width={{ base:"100%", lg:"20%" }} fontSize="25px">
      Contact Us
      </Text>
      <Flex flexDirection="column" width={{ base:"100%", lg:"80%" }} fontSize="17px">
        <Text pb="10px"> We’d love to connect with you. Here are some ways you can get in touch.</Text>
        <List pb="10px" styleType="disc">
          <ListItem><Link href="https://docs.google.com/forms/d/1l8QlNRfG2VTuoGI2sgeeZLHNfEJt701qlx7f7fy8ZUQ/edit" color="blue.400">Contact us about using our technology and services</Link></ListItem>
          <ListItem><Link href="https://docs.google.com/forms/d/e/1FAIpQLSdBg0nVcMyhuPyNUGpDydzj26CmuCjcOuR_EZ3H99XB6xyHHw/viewform" color="blue.400">Join our community as a volunteer</Link></ListItem>
          <ListItem><Link href="https://github.com/Path-Check" color="blue.400">Visit our GitHub repo</Link></ListItem>
          <ListItem><Link href="mailto:media@pathcheck.org" color="blue.400">Submit a media inquiry</Link></ListItem>
          <ListItem><Link href="https://pathcheck.org/events" color="blue.400">Attend a webinar or online symposium</Link></ListItem>
        </List>
        <Text pb="10px" fontWeight="bold">Follow Us on Social Media</Text>
      </Flex>
    </Flex>

    <Flex py="20px" wrap="wrap"> 
      <Text width={{ base:"100%", lg:"20%" }} fontSize="25px">
      Supporters
      </Text>
      <Text width={{ base:"100%", lg:"80%" }} fontSize="17px">
      Many companies are donating goods and services to PathCheck Foundation, which makes our work possible. We’re grateful for this support. Some of our supporters include:
      </Text>
      <Flex>
        <Image src="../images/cisco-logo.png"/>
      </Flex>
    </Flex>

    <Flex py="20px" wrap="wrap"> 
      <Text width={{ base:"100%", lg:"20%" }} fontSize="25px">
      In the news
      </Text>
      <NewsGrid/>
    </Flex>

  </DefaultLayout>
);

export default About;
