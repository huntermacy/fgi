import React, { createContext, useContext, useState, useEffect } from 'react';

interface ModuleProgress {
  completed: boolean;
  score: number;
  attempts: number;
}

interface CourseProgress {
  [moduleId: string]: ModuleProgress;
}

interface ProgressContextType {
  progress: { [courseId: string]: CourseProgress };
  updateModuleProgress: (courseId: string, moduleId: string, score: number) => void;
  getModuleProgress: (courseId: string, moduleId: string) => ModuleProgress | undefined;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<{ [courseId: string]: CourseProgress }>({});

  useEffect(() => {
    const storedProgress = localStorage.getItem('courseProgress');
    if (storedProgress) {
      setProgress(JSON.parse(storedProgress));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('courseProgress', JSON.stringify(progress));
  }, [progress]);

  const updateModuleProgress = (courseId: string, moduleId: string, score: number) => {
    setProgress(prev => ({
      ...prev,
      [courseId]: {
        ...prev[courseId],
        [moduleId]: {
          completed: score >= 2,
          score,
          attempts: (prev[courseId]?.[moduleId]?.attempts || 0) + 1,
        },
      },
    }));
  };

  const getModuleProgress = (courseId: string, moduleId: string) => {
    return progress[courseId]?.[moduleId];
  };

  return (
    <ProgressContext.Provider value={{ progress, updateModuleProgress, getModuleProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}; 