import React from "react"
import { Link as GatsbyLink } from "gatsby";
import { Text, Flex, Link, Box } from "@chakra-ui/core";

const newsList = [
  {
    title: "Contact Tracing With Your Phone: It’s Easier but There Are Tradeoffs",
    date: '06.03.2020',
    publication: 'The New York Times',
    link: 'https://www.nytimes.com/2020/06/03/health/coronavirus-contact-tracing-apps.html'
  },
  {
    title: "Surveillance and Our Privacy",
    date: '06.02.2020',
    publication: 'The Wall Street Journal',
    link: 'https://www.wsj.com/video/events/surveillance-and-our-privacy/79EDDCD4-A76A-475C-B61D-F2FAA9A304EC.html'
  },
  {
    title: "State-Based Contact Tracing Apps Could Be a Mess",
    date: '05.27.2020',
    publication: 'Wired',
    link: 'https://www.wired.com/story/covid-19-contact-tracing-app-fragmentation/'
  },
  {
    title: "Will Emerging Contact Tracing Solutions Be Put to Work?",
    date: '05.26.2020',
    publication: 'MD+DI',
    link: 'https://www.mddionline.com/will-emerging-contact-tracing-solutions-be-put-work'
  },
  {
    title: "Forbes Tech Council: Tech in the Time of a Pandemic",
    date: '05.12.2020',
    publication: 'Forbes',
    link: 'https://www.forbes.com/sites/forbestechcouncil/2020/05/12/tech-in-the-time-of-a-pandemic/#3ab808be39fc'
  },
  {
    title: "How an MIT spin-off is using contact tracing to fight COVID-19, and so can you",
    date: '05.12.2020',
    publication: 'Tech Republic',
    link: 'https://www.techrepublic.com/article/how-an-mit-spin-off-is-using-contact-tracing-to-fight-covid-19-and-so-can-you/'
  },
]

const NewsItem = ( item ) => (
  <Box width={{ base:"100%", md:"50%" }} p="20px">
    <Text fontSize="14px">{item.date} • {item.publication}</Text>
    <Link fontSize="19px" fontWeight="bold" as={GatsbyLink} to={item.link}>{item.title}</Link>
  </Box>
);

const NewsGrid = () => {
  return (
    <Flex width={{ base:"100%", lg:"80%" }} wrap="wrap">
      {newsList.map(NewsItem)}
    </Flex>
  )
}

export default NewsGrid;

