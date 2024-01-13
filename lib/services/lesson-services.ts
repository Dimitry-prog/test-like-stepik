import { api } from '@/lib/services/api';
import {
  GetLessonByIdDTOType,
  RequestUpdateLessonByIdType,
  UpdateLessonByIdDTOType,
} from '@/types/lesson-types';

export const lessonServices = api.injectEndpoints({
  endpoints: (builder) => ({
    getLessonById: builder.query<GetLessonByIdDTOType, string>({
      query: (lessonId) => `/lessons/${lessonId}`,
    }),
    updateLessonById: builder.mutation<UpdateLessonByIdDTOType, RequestUpdateLessonByIdType>({
      query: (data) => ({
        url: `/submissions/${data.lessonId}`,
        method: 'POST',
        body: data.body,
      }),
    }),
  }),
});

export const { useGetLessonByIdQuery, useUpdateLessonByIdMutation } = lessonServices;
