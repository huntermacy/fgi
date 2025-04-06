import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardBody,
  CardHeader,
  Progress,
  Button,
  HStack,
  Badge,
} from '@chakra-ui/react';
import { useUser } from '../context/UserContext';
import { useProgress } from '../context/ProgressContext';
import { courses } from '../data/courses';

const Dashboard: React.FC = () => {
  const { user } = useUser();
  const { progress } = useProgress();
  const navigate = useNavigate();

  const getCourseProgress = (courseId: string) => {
    const courseProgress = progress[courseId] || {};
    const completedModules = Object.values(courseProgress).filter(
      (module) => module.completed
    ).length;
    const totalModules = courses.find((c) => c.id === courseId)?.modules.length || 0;
    return {
      completed: completedModules,
      total: totalModules,
      percentage: totalModules ? (completedModules / totalModules) * 100 : 0,
    };
  };

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Box>
          <Heading size="xl" color="blue.900">
            Welcome, {user.name}!
          </Heading>
          <Text color="gray.600" mt={2}>
            Continue your financial education journey
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {courses.map((course) => {
            const courseProgress = getCourseProgress(course.id);
            return (
              <Card key={course.id} variant="outline">
                <CardHeader>
                  <VStack align="start" spacing={2}>
                    <Heading size="md">{course.title}</Heading>
                    <Text color="gray.600">{course.description}</Text>
                  </VStack>
                </CardHeader>
                <CardBody>
                  <VStack align="stretch" spacing={4}>
                    <Box>
                      <HStack justify="space-between" mb={2}>
                        <Text fontSize="sm" color="gray.600">
                          Progress
                        </Text>
                        <Text fontSize="sm" color="gray.600">
                          {courseProgress.completed}/{courseProgress.total} modules
                        </Text>
                      </HStack>
                      <Progress
                        value={courseProgress.percentage}
                        colorScheme="blue"
                        size="sm"
                        borderRadius="full"
                      />
                    </Box>
                    <Button
                      colorScheme="blue"
                      onClick={() => navigate(`/course/${course.id}`)}
                    >
                      {courseProgress.completed === 0
                        ? 'Start Course'
                        : 'Continue Learning'}
                    </Button>
                    {courseProgress.completed > 0 && (
                      <Badge
                        colorScheme={
                          courseProgress.completed === courseProgress.total
                            ? 'green'
                            : 'blue'
                        }
                        alignSelf="center"
                      >
                        {courseProgress.completed === courseProgress.total
                          ? 'Completed'
                          : 'In Progress'}
                      </Badge>
                    )}
                  </VStack>
                </CardBody>
              </Card>
            );
          })}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Dashboard; 