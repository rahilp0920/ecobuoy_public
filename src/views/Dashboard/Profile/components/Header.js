import { Flex, Text, Icon, Badge, Spacer } from "@chakra-ui/react";
import { FiSettings } from "react-icons/fi";
import logo from "../assets/logo.png"; // Place your logo image in /src/assets/logo.png

const Header = () => (
  <Flex as="header" align="center" justify="space-between" p="4" bg="white" rounded="lg" boxShadow="sm">
    <Flex align="center">
      <img src={logo} alt="EcoBuoy Logo" width="40" height="40" />
      <Text fontSize="2xl" fontWeight="bold" ml="4" color="teal.700">EcoBuoy</Text>
      <Badge ml="6" colorScheme="green" fontSize="1em">Online</Badge>
    </Flex>
    <Spacer />
    <Icon as={FiSettings} w={6} h={6} color="gray.500" cursor="pointer" />
  </Flex>
);

export default Header;
