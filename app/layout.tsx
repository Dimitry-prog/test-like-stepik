import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import { ClerkProvider } from '@clerk/nextjs';
import StoreProvider from '@/components/shared/store-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Like Stepik',
  description: 'online platform',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <StoreProvider>
      <ClerkProvider>
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      </ClerkProvider>
    </StoreProvider>
  );
}
