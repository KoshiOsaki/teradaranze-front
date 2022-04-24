import Link from "next/link";
import style from "../styles/Header.module.css";
import { Glass } from "./Glass";

export const Header = () => {
  return (
    <div className={`max-w-[800px] ${style.container}`}>
      <Glass classAttr="xl:h-[80px] md:h-[60px] sm:h-[60px] !border-none p-2">
        <Link href="/">
          <a className="text-4xl font-bold black cursor-pointer">
            Reborn to 寺田蘭世
          </a>
        </Link>
        <div className="flex">
          <Link href="/start">
            <p className="text-pink-600 mx-2 hover:cursor-pointer">スタート</p>
          </Link>
          <Link href="/select">
            <p className="text-pink-600 mx-2 hover:cursor-pointer">セレクト</p>
          </Link>
          <Link href="/result">
            <p className="text-pink-600 mx-2 hover:cursor-pointer">リザルト</p>
          </Link>
        </div>
      </Glass>
    </div>
  );
};
