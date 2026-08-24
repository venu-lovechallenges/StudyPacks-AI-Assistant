import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  name: string;
  email: string;
  gradeLevel: 'grade10' | 'grade11' | 'university';
  joinedDate: string;
}

interface AppState {
  user: User | null;
  theme: 'light' | 'dark';
  isLoading: boolean;
  selectedCategory: string | null;
  selectedSubject: string | null;
  selectedLesson: string | null;
  notificationsEnabled: boolean;
  language: 'en' | 'si';
  
  // Actions
  setUser: (user: User | null) => void;
  setTheme: (theme: 'light' | 'dark') => void;
  setLoading: (loading: boolean) => void;
  selectCategory: (categoryId: string) => void;
  selectSubject: (subjectId: string) => void;
  selectLesson: (lessonId: string) => void;
  setNotifications: (enabled: boolean) => void;
  setLanguage: (language: 'en' | 'si') => void;
}

export const useAppStore = create<AppState>()()
  .default(
    persist(
      (set) => ({
        user: null,
        theme: 'light',
        isLoading: false,
        selectedCategory: null,
        selectedSubject: null,
        selectedLesson: null,
        notificationsEnabled: true,
        language: 'en',
        
        setUser: (user) => set({ user }),
        setTheme: (theme) => set({ theme }),
        setLoading: (loading) => set({ isLoading: loading }),
        selectCategory: (categoryId) => set({ selectedCategory: categoryId }),
        selectSubject: (subjectId) => set({ selectedSubject: subjectId }),
        selectLesson: (lessonId) => set({ selectedLesson: lessonId }),
        setNotifications: (enabled) => set({ notificationsEnabled: enabled }),
        setLanguage: (language) => set({ language }),
      }),
      {
        name: 'studypacks-store',
      }
    )
  );
