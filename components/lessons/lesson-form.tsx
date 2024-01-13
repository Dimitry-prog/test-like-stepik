'use client';

import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { LessonFormDataType } from '@/types/lesson-types';
import { lessonDefaultValues } from '@/lib/contants';
import { zodResolver } from '@hookform/resolvers/zod';
import { lessonFormSchema } from '@/lib/validation/lesson-form-validation';
import Input from '@/components/ui/input';
import TextArea from '@/components/ui/textarea';
import { createLesson } from '@/lib/actions/lesson-actions';
import { handleError } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/button';
import Loader from '@/components/shared/loader';

const LessonForm = () => {
  const router = useRouter();
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    reset,
  } = useForm<LessonFormDataType>({
    defaultValues: lessonDefaultValues,
    resolver: zodResolver(lessonFormSchema),
  });

  const onSubmit: SubmitHandler<LessonFormDataType> = async (data) => {
    try {
      const lesson = await createLesson({
        lessonData: data,
        path: '/lessons',
      });

      if (lesson) {
        reset();
        router.push('/lessons');
      }
    } catch (e) {
      handleError(e);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      <Controller
        name="title"
        control={control}
        render={({ field }) => <Input {...field} label="Title" error={errors.title?.message} />}
      />
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <TextArea {...field} label="Description" error={errors.description?.message} />
        )}
      />

      <Button type="submit" isDisabled={isSubmitting} classes="mt-4 rounded-md">
        {isSubmitting ? (
          <div className="flex items-center justify-between gap-2">
            <p>Submitting</p>
            <Loader size="xs" />
          </div>
        ) : (
          'Submit'
        )}
      </Button>
    </form>
  );
};

export default LessonForm;
