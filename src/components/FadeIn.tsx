import { useInView } from "react-intersection-observer";
import "animate.css";
import { FC } from "react";

export const FadeIn: FC = ({ children }) => {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: "-50px", // ref要素が現れてから50px過ぎたら
    triggerOnce: true,
  });

  return (
    <div>
      {/* refを与えた要素がウインドウ内に現れるとinViewがtrueになります */}
      <div ref={ref}>
        {inView && (
          <div className="animate__animated animate__fadeInUp">{children}</div>
        )}
      </div>
    </div>
  );
};
