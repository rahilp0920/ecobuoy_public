import {
    Box,
    Button, Flex,
    Link,
    Stack,
    Text,
    useColorModeValue,
    Image
} from "@chakra-ui/react";
import IconBox from "components/Icons/IconBox";
// import { CreativeTimLogo } from "components/Icons/Icons";
import { Separator } from "components/Separator/Separator";
import { SidebarHelp } from "components/Sidebar/SidebarHelp";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "assets/logo.png"; // <-- Import your logo

// ...rest of your code...

const SidebarContent = ({ logoText, routes }) => {
  // ...rest of your code...

  return (
    <>
      <Box pt={"25px"} mb="12px">
        <Link
          href={`${process.env.PUBLIC_URL}/#/`}
          target="_blank"
          display="flex"
          lineHeight="100%"
          mb="30px"
          fontWeight="bold"
          justifyContent="center"
          alignItems="center"
          fontSize="11px"
        >
          {/* Replace the CreativeTimLogo with your own logo */}
          <Image src={logo} alt="Ecobuoy Logo" boxSize="32px" me="10px" />
          <Text fontSize="sm" mt="3px">
            Ecobuoy
          </Text>
        </Link>
        <Separator></Separator>
      </Box>
      <Stack direction="column" mb="40px">
        <Box>{links}</Box>
      </Stack>
      <SidebarHelp />
    </>
  )
}

export default SidebarContent
