import z from 'zod';

export const lessonFormSchema = z.object({
  title: z
    .string()
    .min(3, {
      message: 'Title must be at least 3 characters.',
    })
    .max(50, {
      message: 'Title must be less than 50 characters.',
    }),
  description: z
    .string()
    .min(3, {
      message: 'Description must be at least 3 characters.',
    })
    .max(400, {
      message: 'Description must be less than 400 characters.',
    }),
});

export const codeLessonFormSchema = z.object({
  code: z.string().min(3, {
    message: 'Code must be at least 3 characters.',
  }),
});
