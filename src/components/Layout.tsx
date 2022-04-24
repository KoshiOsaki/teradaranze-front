import { FC } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import style from "../styles/Layout.module.css";

export const Layout: FC = ({ children }) => {
  return (
    <div className=" max-w-[800px] mx-auto">
      <div className="relative overflow-hidden">
        <Header />
        <div className="pt-[100px]">{children}</div>
        <Footer />
        <>
          <div className={style.circle1} />
          <div className={style.circle2} />
        </>

        <div className={style.circle3} />
        <div className={style.circle4} />

        <div
          style={{
            position: "absolute",
            zIndex: -100,
            top: String(2400) + "px",
            right: "-150px",
            margin: "auto",
            width: "650px",
            height: "650px",
            background:
              "radial-gradient(circle farthest-side, #4de189, transparent)",
          }}
        />

        <div className={style.circle7} />
        <div className={style.circle8} />
        <div className={style.circle9} />
      </div>
    </div>
  );
};
