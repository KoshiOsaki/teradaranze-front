import { FC } from "react";
import Link from "next/link";
import style from "../styles/Button.module.css";
import { Glass } from "./Glass";

interface Props {
  text: string;
  href: string;
  classAttr?: string;
}

export const LargeButton: FC<Props> = ({ text, href, classAttr }) => {
  return (
    <Glass classAttr="text-center rounded-lg duration-500 hover:bg-white hover:opacity-70 w-[90%] mx-auto">
      <Link href={href}>
        <a
          className={`
          py-3
          px-4
          h-[140px]
          text-2xl
          rounded-lg
          font-bold
          border-white
          cursor-pointer
          flex
          items-center
          justify-center
          sm:h-[100px]
          sm:text-xl
          ${style.button}
          ${classAttr}
        `}
        >
          {text}
          <span className={style.arrow}>
            <p className={style.arrow}>→</p>
          </span>
        </a>
      </Link>
    </Glass>
  );
};
