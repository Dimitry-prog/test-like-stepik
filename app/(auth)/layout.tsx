import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white bg-cover bg-fixed bg-center">
      {children}
    </div>
  );
}
