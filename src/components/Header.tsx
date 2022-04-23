import Link from "next/link";
import style from "../../styles/Container.module.css";

export const Header = () => {
  return (
    <div className="bg-black mb-16 h-24 pl-8 pt-5 w-full fixed">
      <Link href="/">
        <a className="text-4xl font-bold text-pink-600 cursor-pointer">
          寺田蘭世になれるかも？？サイト
        </a>
      </Link>
      <div className="flex">
        <Link href="/start">
          <p className="text-pink-600 mx-2">スタート</p>
        </Link>
        <Link href="/select">
          <p className="text-pink-600 mx-2">セレクト</p>
        </Link>
        <Link href="/result">
          <p className="text-pink-600 mx-2">リザルト</p>
        </Link>
      </div>
    </div>
  );
};
