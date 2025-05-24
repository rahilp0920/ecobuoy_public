import { Box, Text, Flex, Link } from "@chakra-ui/react";

const Footer = () => (
  <Box as="footer" w="100%" mt="8" py="4" bg="gray.50" borderTop="1px solid #e2e8f0">
    <Flex align="center" justify="center" direction="column">
      <Text fontSize="sm" color="gray.500">
        EcoBuoy Dashboard &copy; {new Date().getFullYear()} &mdash; Built by{" "}
        <Link href="https://github.com/rahilp0920" color="teal.500" isExternal>
          rahilp0920
        </Link>
      </Text>
      <Text fontSize="xs" color="gray.300" mt="1">
        For demo purposes only. Data is mocked.
      </Text>
    </Flex>
  </Box>
);

export default Footer;
