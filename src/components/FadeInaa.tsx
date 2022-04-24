import { FC, ReactNode } from "react";
// import InViewMonitor from "react-inview-monitor";

interface Props {
  isActive: boolean;
  children: ReactNode;
}

export const FadeIn: FC = ({ children }) => (
  <div></div>
  // <InViewMonitor childPropsInView={{ isActive: true }} intoViewMargin="-20%">
  //   <Div isActive={false}>{children}</Div>
  // </InViewMonitor>
);

const Div: FC<Props> = ({ isActive, children }) => (
  <div
    style={{
      opacity: isActive ? 1 : 0,
      transition: "opacity 1s ease, transform 1s ease",
      transform: isActive ? "translateY(0px)" : "translateY(70px)",
    }}
  >
    {children}
  </div>
);
