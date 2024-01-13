'use client';

import { headerLinks } from '@/lib/contants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className="w-full md:justify-between flex flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <li
            key={link.route}
            className={cn('flex items-center justify-center hover:text-gray-500', {
              'font-bold': isActive,
            })}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
