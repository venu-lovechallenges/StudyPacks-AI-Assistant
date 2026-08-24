import { CATEGORIES, OL_SUBJECTS, SPOKEN_ENGLISH_LEVELS } from '@/data/syllabus';

export const fetchCategories = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(CATEGORIES), 500);
  });
};

export const fetchSubjects = async (categoryId: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const category = CATEGORIES.find((c) => c.id === categoryId);
      resolve(category?.subjects || []);
    }, 500);
  });
};

export const fetchLessons = async (subjectId: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Return lessons for the subject
      resolve([]);
    }, 500);
  });
};

export const fetchSpokenEnglishLevels = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(SPOKEN_ENGLISH_LEVELS), 500);
  });
};
