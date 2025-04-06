import React from 'react';
import { Box, Container, Flex, Text, Link, useBreakpointValue } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const direction = useBreakpointValue<'column' | 'row'>({ base: 'column', md: 'row' });
  const align = useBreakpointValue({ base: 'center', md: 'flex-start' });

  return (
    <Box as="footer" bg="blue.600" color="white" py={8}>
      <Container maxW="container.xl">
        <Flex
          direction={direction}
          justify="space-between"
          align={align}
          gap={6}
        >
          <Box>
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              First Generation Investors
            </Text>
            <Text fontSize="sm">
              Empowering first-generation students with financial literacy
            </Text>
          </Box>
          <Flex
            direction={direction}
            gap={4}
            align={align}
          >
            <Link as={RouterLink} to="/" color="white" _hover={{ color: 'blue.100' }}>
              Home
            </Link>
            <Link as={RouterLink} to="/about" color="white" _hover={{ color: 'blue.100' }}>
              About
            </Link>
            <Link as={RouterLink} to="/courses" color="white" _hover={{ color: 'blue.100' }}>
              Courses
            </Link>
            <Link as={RouterLink} to="/login" color="white" _hover={{ color: 'blue.100' }}>
              Login
            </Link>
          </Flex>
        </Flex>
        <Text mt={8} fontSize="sm" textAlign="center">
          © {new Date().getFullYear()} First Generation Investors. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer; 