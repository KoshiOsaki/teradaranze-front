import { FC, ReactNode } from "react";
import style from "../styles/Toggle.module.css";

interface Props {
  isOpen: boolean;
  children: ReactNode;
}

export const ToggleList: FC<Props> = ({ isOpen, children }) => {
  return (
    <div className={`${isOpen ? style.open : style.close}`}>{children}</div>
  );
};
