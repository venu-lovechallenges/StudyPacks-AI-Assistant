import axios from 'axios';
import { useChatStore } from '@/stores/chatStore';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

interface AIRequest {
  question: string;
  subjectId?: string;
  gradeLevel?: string;
  context?: string;
}

interface AIResponse {
  answer: string;
  sources?: string[];
  relatedTopics?: string[];
}

class AIService {
  async sendMessage(request: AIRequest): Promise<AIResponse> {
    try {
      const response = await axios.post<AIResponse>(
        `${API_BASE_URL}/ai/chat`,
        {
          question: request.question,
          subject: request.subjectId,
          grade: request.gradeLevel,
          context: request.context,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error('AI Service Error:', error);
      throw new Error('Failed to get AI response');
    }
  }

  async generateStudyPlan(
    subjectId: string,
    gradeLevel: string
  ): Promise<{ topics: string[]; estimatedDuration: number }> {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/ai/study-plan`,
        { subject: subjectId, grade: gradeLevel }
      );
      return response.data;
    } catch (error) {
      console.error('Study Plan Error:', error);
      throw error;
    }
  }

  async explainConcept(
    concept: string,
    subjectId: string,
    gradeLevel: string
  ): Promise<string> {
    try {
      const response = await axios.post(`${API_BASE_URL}/ai/explain`, {
        concept,
        subject: subjectId,
        grade: gradeLevel,
      });
      return response.data.explanation;
    } catch (error) {
      console.error('Explanation Error:', error);
      throw error;
    }
  }

  async answerQuestion(
    question: string,
    subjectId: string,
    gradeLevel: string
  ): Promise<string> {
    try {
      const response = await axios.post(`${API_BASE_URL}/ai/answer`, {
        question,
        subject: subjectId,
        grade: gradeLevel,
      });
      return response.data.answer;
    } catch (error) {
      console.error('Answer Error:', error);
      throw error;
    }
  }
}

export default new AIService();
