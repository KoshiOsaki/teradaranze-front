import Link from "next/link";

export const Header = () => {
  return (
    <div className="bg-black mb-16 h-24 pl-8 pt-5 w-full fixed">
      <Link href="/">
        <a className="text-4xl font-bold text-blue-600 cursor-pointer">Next.js</a>
      </Link>
    </div>
  );
};
