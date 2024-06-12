import { Box, Flex, Link, useColorModeValue } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const bg = useColorModeValue("gray.800", "gray.900");
  const color = useColorModeValue("white", "gray.200");

  return (
    <Box bg={bg} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <Link as={NavLink} to="/" color={color} px={2}>
            Home
          </Link>
          <Link as={NavLink} to="/about" color={color} px={2}>
            About
          </Link>
          <Link as={NavLink} to="/contact" color={color} px={2}>
            Contact
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;