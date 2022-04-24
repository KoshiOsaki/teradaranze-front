import { useRouter } from "next/router";
import { useState } from "react";

export const ImgSelectBox = ({ img, selectCount, setSelectCount }: any) => {
  const router = useRouter();

  const onClickSelect = () => {
    if (selectCount <= 3) {
      setSelectCount(selectCount + 1);
    } else {
      router.push("/result");
    }
  };
  return (
    <div className="flex justify-center">
      <div
        onClick={onClickSelect}
        className="hover:cursor-pointer hover:bg-pink-200 mx-6 border border-gray-500"
      >
        <img src={img[0]} alt="" className="w-[200px] inline" />
      </div>
      <div
        onClick={onClickSelect}
        className="hover:cursor-pointer hover:bg-pink-200 mx-6 border border-gray-500"
      >
        <img src={img[1]} alt="" className="w-[200px] inline" />
      </div>
    </div>
  );
};
