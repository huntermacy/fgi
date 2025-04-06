import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  List,
  ListItem,
  Button,
  HStack,
  Progress,
  Icon,
} from '@chakra-ui/react';
import { useUser } from '../context/UserContext';
import { useProgress } from '../context/ProgressContext';
import { courses } from '../data/courses';
import { FaLock, FaCheck, FaPlay } from 'react-icons/fa';

const CourseDetail: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const { user } = useUser();
  const { progress } = useProgress();
  const navigate = useNavigate();

  const course = courses.find((c) => c.id === courseId);
  const courseProgress = progress[courseId || ''] || {};

  if (!user) {
    navigate('/login');
    return null;
  }

  if (!course) {
    navigate('/dashboard');
    return null;
  }

  const isModuleLocked = (moduleIndex: number) => {
    if (moduleIndex === 0) return false;
    const previousModule = course.modules[moduleIndex - 1];
    return !courseProgress[previousModule.id]?.completed;
  };

  const getModuleStatus = (moduleId: string) => {
    const moduleProgress = courseProgress[moduleId];
    if (!moduleProgress) return 'not_started';
    return moduleProgress.completed ? 'completed' : 'in_progress';
  };

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Box>
          <Heading size="xl" color="blue.900">
            {course.title}
          </Heading>
          <Text color="gray.600" mt={2}>
            {course.description}
          </Text>
        </Box>

        <Box>
          <HStack justify="space-between" mb={2}>
            <Text fontSize="sm" color="gray.600">
              Course Progress
            </Text>
            <Text fontSize="sm" color="gray.600">
              {Object.values(courseProgress).filter((m) => m.completed).length}/
              {course.modules.length} modules
            </Text>
          </HStack>
          <Progress
            value={
              (Object.values(courseProgress).filter((m) => m.completed).length /
                course.modules.length) *
              100
            }
            colorScheme="blue"
            size="sm"
            borderRadius="full"
          />
        </Box>

        <List spacing={4}>
          {course.modules.map((module, index) => {
            const status = getModuleStatus(module.id);
            const isLocked = isModuleLocked(index);

            return (
              <ListItem
                key={module.id}
                p={4}
                borderWidth="1px"
                borderRadius="lg"
                bg={isLocked ? 'gray.50' : 'white'}
              >
                <HStack justify="space-between">
                  <VStack align="start" spacing={1}>
                    <HStack>
                      <Heading size="md">{module.title}</Heading>
                      {status === 'completed' && (
                        <Icon as={FaCheck} color="green.500" />
                      )}
                      {isLocked && <Icon as={FaLock} color="gray.400" />}
                    </HStack>
                    <Text color="gray.600" fontSize="sm">
                      {status === 'completed'
                        ? 'Completed'
                        : status === 'in_progress'
                        ? 'In Progress'
                        : 'Not Started'}
                    </Text>
                  </VStack>
                  <Button
                    colorScheme="blue"
                    leftIcon={<Icon as={FaPlay} />}
                    isDisabled={isLocked}
                    onClick={() =>
                      navigate(`/course/${courseId}/module/${module.id}`)
                    }
                  >
                    {status === 'completed'
                      ? 'Review'
                      : status === 'in_progress'
                      ? 'Continue'
                      : 'Start'}
                  </Button>
                </HStack>
              </ListItem>
            );
          })}
        </List>
      </VStack>
    </Container>
  );
};

export default CourseDetail; 