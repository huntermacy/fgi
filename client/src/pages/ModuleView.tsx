import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Button,
  Radio,
  RadioGroup,
  Progress,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import { useUser } from '../context/UserContext';
import { useProgress } from '../context/ProgressContext';
import { courses } from '../data/courses';

const ModuleView: React.FC = () => {
  const { courseId, moduleId } = useParams<{ courseId: string; moduleId: string }>();
  const { user } = useUser();
  const { updateModuleProgress } = useProgress();
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const course = courses.find((c) => c.id === courseId);
  const module = course?.modules.find((m) => m.id === moduleId);

  if (!user) {
    navigate('/login');
    return null;
  }

  if (!course || !module) {
    navigate('/dashboard');
    return null;
  }

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = parseInt(value);
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < module.quiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const score = answers.filter(
        (answer, index) => answer === module.quiz[index].answer
      ).length;
      updateModuleProgress(courseId || '', moduleId || '', score);
      setShowResults(true);
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const handleContinue = () => {
    navigate(`/course/${courseId}`);
  };

  const currentQuiz = module.quiz[currentQuestion];
  const score = answers.filter(
    (answer, index) => answer === module.quiz[index].answer
  ).length;

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Box>
          <Heading size="xl" color="blue.900">
            {module.title}
          </Heading>
          <Text color="gray.600" mt={2}>
            {course.title}
          </Text>
        </Box>

        <Box>
          <Progress
            value={(currentQuestion / module.quiz.length) * 100}
            colorScheme="blue"
            size="sm"
            borderRadius="full"
          />
        </Box>

        {!showResults ? (
          <>
            <Box>
              <Text fontSize="lg" mb={4}>
                {currentQuiz.question}
              </Text>
              <RadioGroup
                onChange={handleAnswer}
                value={answers[currentQuestion]?.toString() || ''}
              >
                <VStack align="stretch" spacing={3}>
                  {currentQuiz.options.map((option, index) => (
                    <Radio key={index} value={index.toString()}>
                      {option}
                    </Radio>
                  ))}
                </VStack>
              </RadioGroup>
            </Box>

            <Button
              colorScheme="blue"
              onClick={handleNext}
              isDisabled={answers[currentQuestion] === undefined}
            >
              {currentQuestion < module.quiz.length - 1 ? 'Next Question' : 'Submit'}
            </Button>
          </>
        ) : (
          <Alert
            status={score >= 2 ? 'success' : 'error'}
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            p={8}
            borderRadius="lg"
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              {score >= 2 ? 'Congratulations!' : 'Try Again'}
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              {score >= 2
                ? `You scored ${score}/3 and have completed this module!`
                : `You scored ${score}/3. You need at least 2 correct answers to pass.`}
            </AlertDescription>
            <Box mt={4}>
              {score >= 2 ? (
                <Button colorScheme="blue" onClick={handleContinue}>
                  Continue to Course
                </Button>
              ) : (
                <Button colorScheme="blue" onClick={handleRetry}>
                  Retry Quiz
                </Button>
              )}
            </Box>
          </Alert>
        )}
      </VStack>
    </Container>
  );
};

export default ModuleView; 