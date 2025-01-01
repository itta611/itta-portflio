import { Box } from "@chakra-ui/react";
import Logo from "components/ui/Logo";
import { FC } from "react";

const Header: FC = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      as="header"
      mx={11}
      py={{ sm: 9, base: 3 }}
    >
      <Logo mx="auto" cursor="pointer" />
    </Box>
  );
};

export default Header;
