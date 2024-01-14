import z from 'zod';
import { codeLessonFormSchema, lessonFormSchema } from '@/lib/validation/lesson-form-validation';

export type LessonType = {
  id: string;
  title: string;
  description: string;
};

export type LessonFormDataType = z.infer<typeof lessonFormSchema>;

export type GetLessonByIdDTOType = {
  data: {
    task: LessonType;
    taskId: string;
    userAttempts: number;
  };
  statusCode: number;
};

export type UpdateLessonByIdDTOType = {
  data: {
    submissionResult: boolean;
  };
  statusCode: number;
};

export type RequestUpdateLessonByIdType = {
  body: {
    code: string;
  };
  lessonId: string;
};

export type CodeLessonFormDataType = z.infer<typeof codeLessonFormSchema>;
