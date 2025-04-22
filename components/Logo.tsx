import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="text-lg font-medium uppercase tracking-widest leading-none inline-block max-md:pt-1"
    >
      Cromax
    </Link>
  );
};

export default Logo;
