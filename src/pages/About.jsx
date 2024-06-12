import { Box, Text, Heading, VStack } from "@chakra-ui/react";

const About = () => (
  <Box p={4} color="white">
    <VStack spacing={4} align="start">
      <Heading>About This Site</Heading>
      <Text>
        This website is dedicated to showcasing the various Soviet sights across the former Soviet republics. Explore the rich history and culture through the monuments, buildings, and other significant landmarks.
      </Text>
    </VStack>
  </Box>
);

export default About;