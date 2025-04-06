import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { HelmetProvider } from 'react-helmet-async';
import { UserProvider } from './context/UserContext';
import { ProgressProvider } from './context/ProgressContext';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CourseDetail from './pages/CourseDetail';
import ModuleView from './pages/ModuleView';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ChakraProvider>
        <UserProvider>
          <ProgressProvider>
            <Router>
              <ScrollToTop />
              <Box minH="100vh" display="flex" flexDirection="column">
                <Header />
                <Box flex="1" bg="gray.50">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/courses" element={<Dashboard />} />
                    <Route path="/course/:courseId" element={<CourseDetail />} />
                    <Route
                      path="/course/:courseId/module/:moduleId"
                      element={<ModuleView />}
                    />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Box>
                <Footer />
              </Box>
            </Router>
          </ProgressProvider>
        </UserProvider>
      </ChakraProvider>
    </HelmetProvider>
  );
};

export default App;