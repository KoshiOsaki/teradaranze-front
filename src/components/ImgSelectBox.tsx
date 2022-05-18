import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { selectedActorsState } from "../store/selectedActorsState";
import { Img } from "../types/img";

export const ImgSelectBox = ({
  actors,
  count,
  setCount,
  selectedImage,
  setSelectedImage,
}: any) => {
  const router = useRouter();
  const [selectedActors, setSelectedActors] =
    useRecoilState(selectedActorsState);
  const _selectedImage: Img[] = [];
  const onClickSelect = async (num: number) => {
    if (count <= 3) {
      setSelectedActors([...selectedActors, actors[num]]);
      setCount(count + 1);
    } else {
      setSelectedActors([...selectedActors, actors[num]]);
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
        {actors[0] && (
          <img src={actors[0].src} alt="" className="w-[200px] inline" />
        )}
      </div>
      <div
        onClick={() => onClickSelect(1)}
        className="hover:cursor-pointer hover:bg-pink-200 mx-6 border border-gray-500"
      >
        {actors[1] && (
          <img src={actors[1].src} alt="" className="w-[200px] inline" />
        )}
      </div>
    </div>
  );
};
