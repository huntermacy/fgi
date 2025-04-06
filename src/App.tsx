import { Box, Container, Heading, Text, Button, VStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()

  return (
    <Box minH="100vh" bg="gray.50">
      <Container maxW="container.xl" py={20}>
        <VStack spacing={8} textAlign="center">
          <Heading
            as="h1"
            size="2xl"
            bgGradient="linear(to-r, blue.400, purple.600)"
            bgClip="text"
          >
            First Generation Investors
          </Heading>
          <Text fontSize="xl" color="gray.600" maxW="2xl">
            Empowering first-generation investors with the tools and knowledge they need to succeed in the financial markets.
          </Text>
          <Button
            size="lg"
            colorScheme="blue"
            onClick={() => navigate('/dashboard')}
          >
            Get Started
          </Button>
        </VStack>
      </Container>
    </Box>
  )
}

export default App 