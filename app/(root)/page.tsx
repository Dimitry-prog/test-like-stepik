import Button from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col gap-6 items-center">
      <h1 className="text-2xl text-center font-bold ">Welcome to online platform!</h1>
      <p className="text-center">Wanna see what we have in our school?</p>
      <Button href="/lessons" classes="sm:w-fit">
        Click!
      </Button>
    </div>
  );
}
