import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Container, Heading, Text, VStack, useBreakpointValue } from '@chakra-ui/react';

const About: React.FC = () => {
  const headingSize = useBreakpointValue({ base: '2xl', md: '3xl' });
  const textSize = useBreakpointValue({ base: 'md', md: 'lg' });

  return (
    <>
      <Helmet>
        <title>About Us - First Generation Investors</title>
        <meta
          name="description"
          content="Learn about First Generation Investors and our mission to empower first-generation students with financial literacy."
        />
      </Helmet>
      <Box minH="100vh" bg="gray.50" py={20}>
        <Container maxW="container.xl">
          <VStack spacing={8} align="stretch">
            <Heading size={headingSize} color="blue.600" textAlign="center">
              About First Generation Investors
            </Heading>
            <Text fontSize={textSize} color="gray.600">
              First Generation Investors (FGI) is a non-profit organization dedicated to
              providing financial education and investment knowledge to first-generation
              students. Our mission is to bridge the gap in financial literacy and empower
              students to make informed financial decisions.
            </Text>
            <Text fontSize={textSize} color="gray.600">
              Through our comprehensive courses and interactive modules, we aim to:
            </Text>
            <Box as="ul" pl={6}>
              <Text as="li" fontSize={textSize} color="gray.600">
                Provide accessible financial education
              </Text>
              <Text as="li" fontSize={textSize} color="gray.600">
                Teach practical investment strategies
              </Text>
              <Text as="li" fontSize={textSize} color="gray.600">
                Build confidence in financial decision-making
              </Text>
              <Text as="li" fontSize={textSize} color="gray.600">
                Create a supportive community of learners
              </Text>
            </Box>
          </VStack>
        </Container>
      </Box>
    </>
  );
};

export default About; 