import React from 'react';
import {
  Box,
  Container,
  Button,
  HStack,
  Flex,
  Link,
  Image,
} from '@chakra-ui/react';

const Header: React.FC = () => {
  return (
    <Box as="header" position="fixed" w="100%" bg="white" zIndex={1000} boxShadow="sm">
      <Container maxW="container.xl" py={4}>
        <Flex justify="space-between" align="center">
          <Link href="/">
            <Image src="/logo.jpg" alt="First Generation Investors Logo" h="40px" />
          </Link>
          
          <HStack spacing={8}>
            {['Home', 'About', 'Classes'].map((item) => (
              <Link 
                key={item} 
                color="gray.600" 
                _hover={{ color: 'blue.600' }}
                fontWeight="medium"
              >
                {item}
              </Link>
            ))}
          </HStack>

          <Button 
            colorScheme="blue" 
            variant="outline"
            _hover={{ bg: 'blue.50' }}
          >
            Sign In / Sign Up
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;