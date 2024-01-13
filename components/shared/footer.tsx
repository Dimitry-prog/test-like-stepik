import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="wrapper flex items-center justify-between flex-col gap-4 text-center sm:flex-row">
        <Link href="/">
          <Image src="/assets/images/logo.svg" alt="Stepik logo" width={38} height={38} />
        </Link>

        <p>2024 Stepik. All Rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
