'use server';

import { LessonFormDataType } from '@/features/lessons/lesson-types';
import { handleError } from '@/lib/utils';
import prisma from '../../lib/prisma';
import { revalidatePath } from 'next/cache';

export const createLesson = async ({
  lessonData,
  path,
}: {
  lessonData: LessonFormDataType;
  path: string;
}) => {
  try {
    const lesson = await prisma.lesson.create({
      data: lessonData,
    });
    revalidatePath(path);
    return lesson;
  } catch (e) {
    handleError(e);
  }
};

export const getAllLessons = async () => {
  try {
    const lessons = await prisma.lesson.findMany();
    return lessons;
  } catch (e) {
    handleError(e);
  }
};

export const getLessonById = async (lessonId: string) => {
  try {
    const lesson = await prisma.lesson.findUnique({
      where: {
        id: lessonId,
      },
    });
    return lesson;
  } catch (e) {
    handleError(e);
  }
};
