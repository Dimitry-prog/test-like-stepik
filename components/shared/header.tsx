import Link from 'next/link';
import Image from 'next/image';
import { SignedOut, UserButton } from '@clerk/nextjs';
import NavItems from '@/components/shared/nav-items';
import NavMobile from '@/components/shared/nav-mobile';
import Button from '@/components/ui/button';

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex justify-between items-center">
        <Link href="/">
          <Image src="/assets/images/logo.svg" alt="stepik logo" width={38} height={38} />
        </Link>

        <nav className="w-full max-w-xs hidden justify-between md:flex ">
          <NavItems />
        </nav>

        <div className="w-32 flex justify-end">
          <SignedOut>
            <Button href="/sign-in">Login</Button>
          </SignedOut>

          <UserButton afterSignOutUrl="/" />
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
