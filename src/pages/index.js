import React from "react";
import DefaultLayout from "../components/layouts/DefaultLayout";
import SEO from "../components/seo";
import { Grid, Heading, List, ListItem, Link, Icon } from "@chakra-ui/core";

const Homepage = () => (
  <DefaultLayout>
    <SEO title="Homepage" />
    <Heading as="h1" fontSize="6xl" marginTop="40px">Contain COVID-19 and <br></br>Restart the Economy <br></br>Without Sacrificing Privacy</Heading>

    <Grid templateColumns="repeat(2, 1fr)" gap={6} marginTop="50px">
      <Grid>
        <Heading as="h4" size="md">GPS+ Digital Contact Tracing</Heading>
        <List styleType="disc">
          <ListItem>Exposure notification with Bluetooth</ListItem>
          <ListItem>Flexible customization for each health department</ListItem>
          <ListItem>Full, end-to-end solution</ListItem>
          <ListItem>Free and open source software</ListItem>
        </List>
        <Link href="#">Learn More <Icon name="arrow-forward" mx="2px" /></Link>

        <Heading as="h4" size="md" marginTop="20px">Google Apple Exposure Notification</Heading>
        <List styleType="disc">
          <ListItem>Exposure notification with Bluetooth</ListItem>
          <ListItem>Flexible customization for each health department</ListItem>
          <ListItem>Full, end-to-end solution</ListItem>
          <ListItem>Free and open source software</ListItem>
        </List>
        <Link href="#">Learn More <Icon name="arrow-forward" mx="2px" /></Link>
      </Grid>
      <Grid>
        {/* Here goes the phone image as a grid background */}
      </Grid>
    </Grid>
  </DefaultLayout >
);

export default Homepage;
