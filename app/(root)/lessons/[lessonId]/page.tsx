import SingleLesson from '@/components/lessons/single-lesson';

type SingleLessonPageProps = {
  params: {
    lessonId: string;
  };
};

const SingleLessonPage = async ({ params: { lessonId } }: SingleLessonPageProps) => {
  return <SingleLesson lessonId={lessonId} />;
};

export default SingleLessonPage;
