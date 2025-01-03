import { Box } from "@chakra-ui/react";
import Logo from "components/ui/Logo";
import { FC, Suspense } from "react";

const Header: FC = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      as="header"
      mx={11}
      py={{ sm: 9, base: 3 }}
    >
      <Suspense fallback={<div>サスペンドしたらこれが表示される</div>}>
        <Logo mx="auto" cursor="pointer" />
      </Suspense>
    </Box>
  );
};

export default Header;
