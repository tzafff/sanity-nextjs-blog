const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1
          className="text-3xl"
          style={{ fontFamily: "Georgia, serif", color: "#5f77c5" }}
        >
          Daily Web3 Blog Posts
        </h1>

        <h2 className="mt-10 md:mt-5">
          Welcome to{" "}
          <span className="underline decoration-4 decoration-[#5f77c5]">
            The Blockchain Enthusiast&apos;s Hub
          </span>{" "}
          in the Cryptoverse.
        </h2>
      </div>

      <p
        className="mt-5 md:mt-2 text-[#5f77c5] max-w-sm"
        style={{ fontFamily: "Georgia, serif" }}
      >
        Stay ahead with the latest blockchain innovations | Unveiling the future
        of decentralized finance | Exploring the blockchain revolution & More!
      </p>
    </div>
  );
};

export default Banner;
