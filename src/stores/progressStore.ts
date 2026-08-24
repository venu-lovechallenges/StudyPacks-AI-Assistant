import { create } from 'zustand';

interface StudentProgress {
  userId: string;
  subjectId: string;
  lessonId: string;
  completionPercentage: number;
  testScores: { [testId: string]: number };
  lastAccessed: string;
  totalTimeSpent: number; // in minutes
}

interface ProgressState {
  progress: StudentProgress[];
  
  // Actions
  addProgress: (progress: StudentProgress) => void;
  updateProgress: (userId: string, subjectId: string, lessonId: string, completion: number) => void;
  addTestScore: (userId: string, testId: string, score: number) => void;
  getProgress: (userId: string, subjectId: string) => StudentProgress | undefined;
  getAverageScore: (userId: string, subjectId: string) => number;
}

export const useProgressStore = create<ProgressState>((set, get) => ({
  progress: [],
  
  addProgress: (progress) => set((state) => ({
    progress: [...state.progress, progress],
  })),
  
  updateProgress: (userId, subjectId, lessonId, completion) => set((state) => ({
    progress: state.progress.map((p) =>
      p.userId === userId && p.subjectId === subjectId && p.lessonId === lessonId
        ? { ...p, completionPercentage: completion, lastAccessed: new Date().toISOString() }
        : p
    ),
  })),
  
  addTestScore: (userId, testId, score) => set((state) => ({
    progress: state.progress.map((p) =>
      p.userId === userId
        ? { ...p, testScores: { ...p.testScores, [testId]: score } }
        : p
    ),
  })),
  
  getProgress: (userId, subjectId) => {
    const state = get();
    return state.progress.find((p) => p.userId === userId && p.subjectId === subjectId);
  },
  
  getAverageScore: (userId, subjectId) => {
    const state = get();
    const userProgress = state.progress.find((p) => p.userId === userId && p.subjectId === subjectId);
    if (!userProgress) return 0;
    
    const scores = Object.values(userProgress.testScores);
    if (scores.length === 0) return 0;
    
    return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  },
}));
