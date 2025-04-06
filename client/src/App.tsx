import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { UserProvider } from './context/UserContext';
import { ProgressProvider } from './context/ProgressContext';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CourseDetail from './pages/CourseDetail';
import ModuleView from './pages/ModuleView';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <UserProvider>
        <ProgressProvider>
          <Router>
            <Box minH="100vh" bg="gray.50">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/course/:courseId" element={<CourseDetail />} />
                <Route
                  path="/course/:courseId/module/:moduleId"
                  element={<ModuleView />}
                />
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Box>
          </Router>
        </ProgressProvider>
      </UserProvider>
    </ChakraProvider>
  );
};

export default App;