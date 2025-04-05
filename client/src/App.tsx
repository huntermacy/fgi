import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box minH="100vh">
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </Box>
      </Router>
    </ChakraProvider>
  )
}

export default App 