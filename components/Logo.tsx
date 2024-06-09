import Image from "next/image";

const Logo = () => {


  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover"
        height={50}
        width={50}
        src="https://ipfs.io/ipfs/QmZT8tgLYrjPyQdCU7wGkywuMYKRpCbGG158yDy4fuWivU?filename=log.png"
        alt="logo"
      />
    </div>
  );
};

export default Logo;
