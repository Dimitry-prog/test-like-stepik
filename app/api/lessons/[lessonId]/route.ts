import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

type ParamsType = {
  params: {
    lessonId: string;
  };
};

export const GET = async (request: Request, { params }: ParamsType) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const lessonId = params.lessonId;
  const lesson = await prisma.lesson.findUnique({
    where: {
      id: lessonId,
    },
  });

  if (!lesson) {
    return NextResponse.json({
      message: 'Lesson not found',
      statusCode: 404,
    });
  }

  const data = {
    taskId: lessonId,
    task: lesson,
    userAttempts: Math.floor(Math.random() * 101),
  };

  return NextResponse.json({
    data,
    statusCode: 200,
  });
};
