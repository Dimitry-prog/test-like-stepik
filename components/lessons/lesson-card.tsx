import { LessonType } from '@/types/lesson-types';
import Link from 'next/link';

type LessonCardProps = {
  lesson: LessonType;
};

const LessonCard = ({ lesson }: LessonCardProps) => {
  return (
    <Link
      href={`/lessons/${lesson.id}`}
      className="w-full h-full max-w-[300px] p-4 flex flex-col gap-2 shadow-md rounded-md transition-all hover:shadow-lg"
    >
      <h3 className="text-xl text-center line-clamp-2">{lesson.title}</h3>
      <p className="line-clamp-6">{lesson.description}</p>
    </Link>
  );
};

export default LessonCard;
