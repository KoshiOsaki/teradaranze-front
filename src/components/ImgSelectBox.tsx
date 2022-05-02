import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { Img } from "../types/img";

export const ImgSelectBox = ({
  image,
  count,
  setCount,
  selectedImage,
  setSelectedImage,
}: any) => {
  const router = useRouter();

  const _selectedImage: Img[] = [];
  const onClickSelect = async (num: number) => {
    if (count <= 3) {
      setSelectedImage([...selectedImage, image[num]]);
      setCount(count + 1);
    } else {
      setSelectedImage([...selectedImage, image[num]]);
      setTimeout(() => {
        console.log(selectedImage);
      }, 400);
      //選択した4人のImg[]型データを送信
      await axios.post("#", selectedImage);
      await router.push("/result");
    }
  };
  return (
    <div className="flex justify-center">
      <div
        onClick={() => onClickSelect(0)}
        className="hover:cursor-pointer hover:bg-pink-200 mx-6 border border-gray-500"
      >
        {image[0] && (
          <img src={image[0].path} alt="" className="w-[200px] inline" />
        )}
      </div>
      <div
        onClick={() => onClickSelect(1)}
        className="hover:cursor-pointer hover:bg-pink-200 mx-6 border border-gray-500"
      >
        {image[1] && (
          <img src={image[1].path} alt="" className="w-[200px] inline" />
        )}
      </div>
    </div>
  );
};
