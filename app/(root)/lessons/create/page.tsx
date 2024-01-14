import LessonForm from '@/features/lessons/components/lesson-form';

const CreateLessonPage = () => {
  return (
    <>
      <section>
        <h3 className="text-2xl font-bold text-center">Create Lesson</h3>
      </section>

      <section className="my-8">
        <LessonForm />
      </section>
    </>
  );
};

export default CreateLessonPage;
