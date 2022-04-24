import { FC } from "react";
import style from "../styles/RecruitSlideShow.module.css";

export const SlideShow: FC = () => {
  return (
    <div className={`${style.default}`}>
      <div className={`${style.wrap}`}>
        <ul className={`${style.slideshow}`}>
          <li className={`${style.content}`}>
            <img src="/shikaruneko.png" />
          </li>
          <li className={`${style.content}`}>
            <img src="/shikaruneko.png" />
          </li>
          <li className={`${style.content}`}>
            <img src="/shikaruneko.png" />
          </li>
          <li className={`${style.content}`}>
            <img src="/shikaruneko.png" />
          </li>
          <li className={`${style.content}`}>
            <img src="/shikaruneko.png" />
          </li>
          <li className={`${style.content}`}>
            <img src="/shikaruneko.png" />
          </li>
          <li className={`${style.content}`}>
            <img src="/shikaruneko.png" />
          </li>
        </ul>
        <ul className={`${style.slideshow}`}>
          <li className={`${style.content}`}>
            <img src="/shikaruneko.png" />
          </li>
          <li className={`${style.content}`}>
            <img src="/shikaruneko.png" />
          </li>
          <li className={`${style.content}`}>
            <img src="/shikaruneko.png" />
          </li>
          <li className={`${style.content}`}>
            <img src="/shikaruneko.png" />
          </li>
          <li className={`${style.content}`}>
            <img src="/shikaruneko.png" />
          </li>
          <li className={`${style.content}`}>
            <img src="/shikaruneko.png" />
          </li>
          <li className={`${style.content}`}>
            <img src="/shikaruneko.png" />
          </li>
        </ul>
      </div>
    </div>
  );
};
