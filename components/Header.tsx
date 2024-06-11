import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="https://ipfs.io/ipfs/QmTqG5PRZKyTkPoC4AjskX7q44wK8Wguk5azQnPwfYCCeg?filename=v5.png"
            className="rounded-full"
            width={70}
            height={70}
            alt="logo"
          />
        </Link>
        <h1
          className="text-2xl"
          style={{ fontFamily: "Georgia, serif", color: "#5f77c5" }}
        >
          Blog3
        </h1>
      </div>

      {/* <div>
        <Link
          href="/"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full"
        >
          Sign up to Dapp of Code
        </Link>
      </div> */}
    </header>
  );
};

export default Header;
