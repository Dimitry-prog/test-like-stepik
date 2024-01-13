import { getAllLessons } from '@/lib/actions/lesson-actions';
import LessonCard from '@/components/lessons/lesson-card';

const LessonsPage = async () => {
  const lessons = await getAllLessons();

  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-2xl font-bold text-center">Available Lessons</h2>

      {lessons && lessons.length ? (
        <ul className="w-full grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-10">
          {lessons.map((lesson) => (
            <li key={lesson.id}>
              <LessonCard lesson={lesson} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-center">
          We do not have any lessons. Come late, please or create one
        </p>
      )}
    </section>
  );
};

export default LessonsPage;
