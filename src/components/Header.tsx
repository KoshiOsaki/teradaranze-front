import Link from "next/link";
import style from "../styles/Header.module.css";
import { Glass } from "./Glass";

export const Header = () => {
  return (
    <div className={style.container}>
      <Glass classAttr="xl:h-[80px] md:h-[60px] sm:h-[60px] !border-none">
        {/* <div className="bg-black mb-16 h-24 pl-8 pt-5 w-full max-w-[800px] "> */}
        <Link href="/">
          <a className="text-4xl font-bold black cursor-pointer">
            寺田蘭世になれるかも？？サイト
          </a>
        </Link>
        <div className="flex">
          <Link href="/start">
            <p className="text-pink-600 mx-2">スタート</p>
          </Link>
          <Link href="/select">
            <p className="text-pink-600 mx-2">セレクト</p>
          </Link>
          <Link href="/result">
            <p className="text-pink-600 mx-2">リザルト</p>
          </Link>
        </div>
        {/* </div> */}
      </Glass>
    </div>
    // <div className="bg-black mb-16 h-24 pl-8 pt-5 w-full max-w-[800px] fixed z-10">
    //   <Link href="/">
    //     <a className="text-4xl font-bold text-pink-600 cursor-pointer">
    //       寺田蘭世になれるかも？？サイト
    //     </a>
    //   </Link>
    //   <div className="flex">
    //     <Link href="/start">
    //       <p className="text-pink-600 mx-2">スタート</p>
    //     </Link>
    //     <Link href="/select">
    //       <p className="text-pink-600 mx-2">セレクト</p>
    //     </Link>
    //     <Link href="/result">
    //       <p className="text-pink-600 mx-2">リザルト</p>
    //     </Link>
    //   </div>
    // </div>
  );
};
// import React, { FC, useState, useEffect } from 'react';
// import Glass from '../atoms/Glass';
// import NavBar from '../organisms/NavBar';
// import HumbergerMenu from '../organisms/HumbergerMenu';
// import style from '../../styles/templates/Header.module.css';

// export const Header: FC = () => {
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const [bgGlass, setBgGlass] = useState<boolean>(false);

//   useEffect(() => {
//     window.addEventListener('scroll', () => {
//       if (window.pageYOffset > 60) {
//         setBgGlass(true);
//       } else {
//         setBgGlass(false);
//       }
//     });
//   }, []);

//   return (
//     <>
//       <div className={style.container}>
//         {bgGlass && (
//           <Glass classAttr="xl:h-[80px] md:h-[60px] sm:h-[60px] !border-none">
//             <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
//           </Glass>
//         )}
//         {!bgGlass && <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />}
//       </div>
//       {isOpen && (
//         <div className={style.menu}>
//           <HumbergerMenu />
//         </div>
//       )}
//     </>
//   );
// };

// export default Header;
