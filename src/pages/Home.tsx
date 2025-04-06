import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Flex,
  Image,
  Icon,
  SimpleGrid,
  Divider,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const headingSize = useBreakpointValue({ base: '2xl', md: '4xl' });
  const textSize = useBreakpointValue({ base: 'md', md: 'lg' });

  return (
    <Box>
      <Header />

      {/* Hero Section */}
      <Box as="section" pt="100px" bg="blue.50">
        <Container maxW="container.xl" py={20}>
          <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={8}>
            <VStack align="start" spacing={6} flex={1}>
              <Heading size={headingSize} color="blue.900">
                First Generation Investors
              </Heading>
              <Text fontSize={textSize} color="gray.600">
                Empowering first-generation students with financial literacy and investment knowledge.
              </Text>
              <Button
                as={Link}
                to="/courses"
                colorScheme="blue"
                size="lg"
                px={8}
                py={6}
                fontSize="lg"
              >
                Explore Courses
              </Button>
            </VStack>
            <Box flex={1}>
              <Image
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Students learning"
                borderRadius="lg"
                boxShadow="2xl"
              />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Mission Section */}
      <Box as="section" py={20} bg="white">
        <Container maxW="container.xl">
          <VStack spacing={8} align="center">
            <Heading size="xl" color="blue.900">Our Mission</Heading>
            <Text fontSize="lg" textAlign="center" maxW="3xl">
              First Generation Investors (FGI) is a non-profit 501(c)3 organization that teaches high school students the power of investing, and brings classroom lessons to life by providing students with real money to invest.
            </Text>
            <Heading size="2xl" color="blue.600">3,000+</Heading>
            <Text fontSize="lg" color="gray.600">Students Impacted</Text>
          </VStack>
        </Container>
      </Box>

      {/* About Section */}
      <Box as="section" py={20} bg="gray.50">
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <VStack align="start" spacing={6}>
              <Heading size="xl" color="blue.900">About Us</Heading>
              <Text fontSize="lg">
                At First Generation Investors, we believe that financial education is key to unlocking a brighter future. Many high school students may not have access to investing resources — and that's where we come in.
              </Text>
              <Text fontSize="lg">
                Our 8-session course covers topics like compound interest, diversification, stocks, bonds, mutual funds, ETFs, budgeting, and credit. All graduates receive $100 to invest in a selection of ETFs or mutual funds.
              </Text>
            </VStack>
            <VStack align="start" spacing={6}>
              <Heading size="xl" color="blue.900">Our Founders</Heading>
              <Text fontSize="lg">
                Founded at the University of Pennsylvania in 2018 by Dylan Ingerman, Cole Mattox, and Alex Ingerman.
              </Text>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.900" color="white" py={12}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <VStack align="start" spacing={4}>
              <Heading size="md">Contact Us</Heading>
              <Text>48 Wall Street, Suite 1100</Text>
              <Text>New York, NY 10005</Text>
              <Text>Contact@FirstGenerationInvestors.com</Text>
            </VStack>
            <VStack align="start" spacing={4}>
              <Heading size="md">Newsletter</Heading>
              <Button colorScheme="blue">Sign Up</Button>
            </VStack>
            <VStack align="start" spacing={4}>
              <Heading size="md">Follow Us</Heading>
              <HStack spacing={4}>
                <Icon as={FaFacebook} boxSize={6} />
                <Icon as={FaTwitter} boxSize={6} />
                <Icon as={FaLinkedin} boxSize={6} />
                <Icon as={FaInstagram} boxSize={6} />
              </HStack>
            </VStack>
          </SimpleGrid>
          <Divider my={8} />
          <Text textAlign="center">
            © {new Date().getFullYear()} First Generation Investors. All rights reserved.
          </Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 