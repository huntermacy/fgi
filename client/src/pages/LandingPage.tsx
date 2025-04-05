import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  useColorModeValue,
  Image,
  Flex,
} from '@chakra-ui/react';

const LandingPage: React.FC = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('gray.800', 'white');

  return (
    <Box bg={bgColor} minH="100vh">
      <Container maxW="container.xl" py={20}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align="center"
          justify="space-between"
          gap={8}
        >
          <VStack align="start" spacing={6} flex={1}>
            <Heading
              as="h1"
              size="2xl"
              bgGradient="linear(to-r, blue.400, purple.600)"
              bgClip="text"
              fontWeight="extrabold"
            >
              First Generation Investors
            </Heading>
            <Text fontSize="xl" color={textColor}>
              Empowering first-generation investors with the knowledge and tools they need to build wealth and achieve financial freedom.
            </Text>
            <Button
              size="lg"
              colorScheme="blue"
              px={8}
              py={6}
              fontSize="lg"
              _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
            >
              Get Started
            </Button>
          </VStack>
          <Box flex={1}>
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Investment illustration"
              borderRadius="lg"
              boxShadow="2xl"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default LandingPage; 