import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import Header from "components/interfaces/Header";
import AboutSection from "components/interfaces/AboutSection";
import ContentSections from "components/interfaces/ContentSections";
import LinksSection from "components/interfaces/LinksSection";
import ServerStatsSection from "components/interfaces/ServerStatsSection";
import { FC } from "react";

const Home: FC = () => {
  return (
    <Box bg="gray.800" color="white" minH="100vh">
      <Container maxW="container.md" pb={15}>
        <Head>
          <title>Itta&apos;s Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Itta's Portfolio Site" />
        </Head>
        <Header />
        <Box as="main">
          <AboutSection />
          <ContentSections />
          <ServerStatsSection />
          <LinksSection />
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
