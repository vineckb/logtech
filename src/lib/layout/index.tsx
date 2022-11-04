import { Box, Flex } from "@chakra-ui/react";
import type { ReactNode } from "react";

import Meta from "./Meta";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex
      flexDirection="row"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Meta />
      <Flex>
        <Box width="full" as="main" p="140">
          {children}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Layout;
