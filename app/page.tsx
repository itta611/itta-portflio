import { Box, Container } from "@chakra-ui/react";
import Header from "@/components/interfaces/Header";
import AboutSection from "@/components/interfaces/AboutSection";
import ContentSections from "@/components/interfaces/ContentSections";
import LinksSection from "@/components/interfaces/LinksSection";
import ServerStatsSection from "@/components/interfaces/ServerStatsSection";
import { FC } from "react";
import { Metadata } from "next";
import Footer from "@/components/interfaces/Footer";

export const metadata: Metadata = {
  title: "Itta's Portfolio",
  description: "Itta's Portfolio Site",
};

const Home: FC = () => {
  return (
    <Box minH="100vh">
      <Container maxW={736} pb={15} px={0}>
        <Header />
        <Box as="main">
          <AboutSection />
          <ContentSections />
          <ServerStatsSection />
          <LinksSection />
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default Home;
