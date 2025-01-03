import { Box } from "@chakra-ui/react";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <Box
      as="footer"
      py={4}
      textAlign="center"
      borderTopWidth={1}
      borderColor="gray.700"
      mt={4}
    >
      © {new Date().getFullYear()} itta.dev
    </Box>
  );
};

export default Footer;
