import { Box, Container } from "@chakra-ui/react";
import Header from "@/components/interfaces/Header";
import AboutSection from "@/components/interfaces/AboutSection";
import ContentSections from "@/components/interfaces/ContentSections";
import LinksSection from "@/components/interfaces/LinksSection";
import ServerStatsSection from "@/components/interfaces/ServerStatsSection";
import { FC } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Itta's Portfolio",
  description: "Itta's Portfolio Site",
};

const Home: FC = () => {
  return (
    <Box bg="#1A202C" color="white" minH="100vh">
      <Container maxW="breakpoint-md" pb={15}>
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
