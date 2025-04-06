import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  VStack,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container maxW="container.sm" py={20}>
      <VStack spacing={8} align="center">
        <Heading size="2xl" color="blue.900">
          404
        </Heading>
        <Text fontSize="xl" textAlign="center" color="gray.600">
          Oops! The page you're looking for doesn't exist.
        </Text>
        <Button
          colorScheme="blue"
          onClick={() => navigate('/dashboard')}
        >
          Go to Dashboard
        </Button>
      </VStack>
    </Container>
  );
};

export default NotFound; 