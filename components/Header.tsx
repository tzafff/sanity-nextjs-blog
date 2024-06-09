import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="https://ipfs.io/ipfs/QmZT8tgLYrjPyQdCU7wGkywuMYKRpCbGG158yDy4fuWivU?filename=log.png"
            className="rounded-full"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
        <h1>Tzaff</h1>
      </div>

      <div>
        <Link
          href="/"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full"
        >
          Sign up to Dapp of Code
        </Link>
      </div>
    </header>
  );
};

export default Header;
