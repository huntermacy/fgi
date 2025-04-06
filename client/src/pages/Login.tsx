import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  VStack,
  Heading,
  Input,
  Button,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useUser } from '../context/UserContext';

const Login: React.FC = () => {
  const [name, setName] = useState('');
  const { login } = useUser();
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter your name',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    login(name);
    navigate('/dashboard');
  };

  return (
    <Container maxW="container.sm" py={20}>
      <VStack spacing={8} align="stretch">
        <Heading textAlign="center" color="blue.900">
          Welcome to Financial Literacy Classes
        </Heading>
        <Text textAlign="center" color="gray.600">
          Please enter your name to get started
        </Text>
        <Box as="form" onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <Input
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              size="lg"
              autoFocus
            />
            <Button
              type="submit"
              colorScheme="blue"
              size="lg"
              width="full"
            >
              Start Learning
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Login; 