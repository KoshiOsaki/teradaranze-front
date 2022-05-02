import { FC, ReactNode } from "react";
// import style from "../styles/ToggleList.module.css";

interface Props {
  isOpen: boolean;
  children: ReactNode;
}

export const ToggleList: FC<Props> = ({ isOpen, children }) => {
  return <div>{children}</div>;
};
