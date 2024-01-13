'use client';

import Button from '@/components/ui/button';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import { useGetLessonByIdQuery, useUpdateLessonByIdMutation } from '@/lib/services/lesson-services';
import Loader from '@/components/shared/loader';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import AceEditor from 'react-ace';
import { CodeLessonFormDataType, UpdateLessonByIdDTOType } from '@/types/lesson-types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { codeLessonFormSchema } from '@/lib/validation/lesson-form-validation';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-github';

type SingleLessonProps = {
  lessonId: string;
};

const SingleLesson = ({ lessonId }: SingleLessonProps) => {
  const [response, setResponse] = useState<UpdateLessonByIdDTOType | null>(null);
  const { data: lesson, isLoading } = useGetLessonByIdQuery(lessonId);
  const [updateLesson, { isLoading: isUpdateLoading }] = useUpdateLessonByIdMutation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CodeLessonFormDataType>({
    defaultValues: {
      code: '',
    },
    resolver: zodResolver(codeLessonFormSchema),
  });

  const onSubmit: SubmitHandler<CodeLessonFormDataType> = async (data) => {
    setResponse(null);

    const updateLessonData = {
      body: data,
      lessonId,
    };

    await updateLesson(updateLessonData)
      .unwrap()
      .then((res) => {
        setResponse(res);
      });
  };

  return (
    <section className="flex flex-col gap-2">
      {isLoading && <Loader />}
      {lesson && (
        <>
          <h3>{lesson.data.task.title}</h3>
          <p>{lesson.data.task.description}</p>

          <div className="mt-6 flex flex-col gap-2">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
              <p>Write code below</p>

              <Controller
                name="code"
                control={control}
                render={({ field }) => (
                  <div className="w-full max-w-2xl flex flex-col gap-2">
                    <AceEditor
                      mode="javascript"
                      theme="github"
                      onChange={field.onChange}
                      value={field.value}
                      className="rounded-md shadow-md"
                      style={{ width: '100%', height: '250px' }}
                    />
                    <span className="text-xs text-red-500">{errors.code?.message}</span>
                  </div>
                )}
              />
              <SignedIn>
                <Button type="submit" isDisabled={isUpdateLoading}>
                  {isUpdateLoading ? <Loader size="xs" /> : 'Submit'}
                </Button>
              </SignedIn>

              <SignedOut>
                <Button href="/sign-in">Submit</Button>
              </SignedOut>

              {response !== null && (
                <div>
                  {response?.data.submissionResult ? (
                    <span className="text-green-600">Done! 😀</span>
                  ) : (
                    <span className="text-red-500">Fail 🥲</span>
                  )}
                </div>
              )}
            </form>
          </div>
        </>
      )}
    </section>
  );
};

export default SingleLesson;
