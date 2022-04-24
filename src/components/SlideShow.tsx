import { FC } from "react";
import style from "../styles/RecruitSlideShow.module.css";

export const SlideShow: FC = () => {
  return (
    <div className={`${style.default}`}>
      <div className={`${style.wrap}`}>
        <ul className={`${style.slideshow}`}>
          <li className={`${style.content}`}>
            <img src="/teradaranze.jpeg" />
          </li>
          <li className={`${style.content}`}>
            <img src="/miyatamanamo.jpeg" />
          </li>
          <li className={`${style.content}`}>
            <img src="/saitouasuka.jpeg" />
          </li>
          <li className={`${style.content}`}>
            <img src="/teradaranze.jpeg" />
          </li>
          <li className={`${style.content}`}>
            <img src="/yamaguchiharuyo.jpeg" />
          </li>
          <li className={`${style.content}`}>
            <img src="/yodayuki.jpeg" />
          </li>
          <li className={`${style.content}`}>
            <img src="/moriyarena.jpeg" />
          </li>
        </ul>
        <ul className={`${style.slideshow}`}>
          <li className={`${style.content}`}>
            <img src="/teradaranze.jpeg" />
          </li>
          <li className={`${style.content}`}>
            <img src="/miyatamanamo.jpeg" />
          </li>
          <li className={`${style.content}`}>
            <img src="/saitouasuka.jpeg" />
          </li>
          <li className={`${style.content}`}>
            <img src="/teradaranze.jpeg" />
          </li>
          <li className={`${style.content}`}>
            <img src="/yamaguchiharuyo.jpeg" />
          </li>
          <li className={`${style.content}`}>
            <img src="/yodayuki.jpeg" />
          </li>
          <li className={`${style.content}`}>
            <img src="/moriyarena.jpeg" />
          </li>
        </ul>
      </div>
    </div>
  );
};
