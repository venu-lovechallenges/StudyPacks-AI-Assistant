import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

export interface TestResult {
  testId: string;
  userId: string;
  score: number;
  totalMarks: number;
  answers: { [questionId: string]: string };
  completedAt: string;
}

class TestService {
  async submitTest(testData: TestResult): Promise<{ success: boolean; result: TestResult }> {
    try {
      const response = await axios.post(`${API_BASE_URL}/tests/submit`, testData);
      return response.data;
    } catch (error) {
      console.error('Test Submission Error:', error);
      throw error;
    }
  }

  async getTestResults(userId: string): Promise<TestResult[]> {
    try {
      const response = await axios.get(`${API_BASE_URL}/tests/results/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Fetch Results Error:', error);
      throw error;
    }
  }

  async getTestByLesson(lessonId: string): Promise<any> {
    try {
      const response = await axios.get(`${API_BASE_URL}/tests/lesson/${lessonId}`);
      return response.data;
    } catch (error) {
      console.error('Fetch Test Error:', error);
      throw error;
    }
  }
}

export default new TestService();
