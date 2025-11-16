import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 cursor-pointer">
      <div className="leading-tight">
        <div className="font-semibold text-2xl winky-font">
          Michelle Nieto
        </div>
      </div>
    </Link>
  );
};

export default Logo;
