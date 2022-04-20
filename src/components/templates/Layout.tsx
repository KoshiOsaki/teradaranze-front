import { FC } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout: FC = ({ children }) => {
  return (
    <div className="bg-gray-300">
      <Header />
      <div className="pt-[100px]"> 
      {children}
      </div>
      <Footer />
    </div>
  );
};
