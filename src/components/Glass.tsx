import { FC, ReactNode } from "react";
import style from "../styles/Glass.module.css";

interface Props {
  classAttr?: string;
  children: ReactNode;
}

export const Glass: FC<Props> = ({ classAttr, children }) => {
  return <div className={`${classAttr} ${style.default}`}>{children}</div>;
};
