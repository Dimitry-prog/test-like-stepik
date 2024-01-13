'use client';

import Image from 'next/image';
import NavItems from '@/components/shared/nav-items';
import Button from '@/components/ui/button';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button onClick={handleClose} type="button" classes="p-0 ml-2 w-fit bg-white md:hidden">
        <Image
          src="/assets/icons/menu.svg"
          alt="mobile menu"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      </Button>
      <nav
        className={cn(
          'p-4 md:hidden h-screen min-w-[300px] bg-white fixed -right-[150%] top-0 z-50 transition-all duration-500',
          {
            'right-0': isOpen,
          }
        )}
      >
        <div>
          <div className="mb-2 flex justify-between">
            <Image src="/assets/images/logo.svg" alt="Stepik logo" width={38} height={38} />
            <Button onClick={handleClose} type="button" classes="w-fit bg-white justify-end">
              ✖️
            </Button>
          </div>

          <div className="md:hidden flex flex-col gap-6 bg-white">
            <hr className="border border-gray-500" />
            <NavItems />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavMobile;
