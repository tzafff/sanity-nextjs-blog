import Image from "next/image";

const Logo = () => {


  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover"
        height={50}
        width={50}
        src="https://ipfs.io/ipfs/QmTqG5PRZKyTkPoC4AjskX7q44wK8Wguk5azQnPwfYCCeg?filename=v5.png"
        alt="logo"
      />
    </div>
  );
};

export default Logo;
