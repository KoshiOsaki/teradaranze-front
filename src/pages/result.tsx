import type { NextPage } from "next";
import { Meta } from "../components/Meta";
import { Layout } from "../components/Layout";
import { Container } from "../components/Container";
import { RankCard } from "../components/RankCard";
import { useEffect, useState } from "react";
import { ToggleList } from "../components/ToggleList";
import { FadeIn } from "../components/FadeIn";
import { Img } from "../types/img";
import axios from "axios";

const Result: NextPage = () => {
  const [isOpen, setOpenState] = useState(false);
  const ClickHandler = () => setOpenState(!isOpen);
  useEffect(() => {
    try {
      //Img[]の型で寺田蘭世＋選択した4人の結果、本人画像を赤枠で囲った画像のpathを取得
      const _image: Promise<Img[]> = axios.get("#").then((res) => {
        return res.data;
      });
      // await setImage(_image)
    } catch (error) {
      console.log(error);
    }
  }, []);

  //仮データ
  const result: Img[] = [
    {
      path: "/teradaranze.jpeg",
      name: "寺田蘭世",
      percent: 1,
    },
    {
      path: "/miyatamanamo.jpeg",
      name: "宮田まほの",
      percent: 2,
    },
    {
      path: "/yamaguchiharuyo.jpeg",
      name: "山口はるよ",
      percent: 3,
    },
    {
      path: "/yodayuki.jpeg",
      name: "与田祐希",
      percent: 4,
    },
    {
      path: "kanemuramiku.jpeg",
      name: "金村美玖",
      percent: 5,
    },
  ];

  //最も近い人を取得
  let maxPercentageImage: any;
  const _result: Img[] = [...result];
  _result.sort((a, b): any => {
    if (a.percent && b.percent) {
      return b.percent - a.percent;
    }
  });
  maxPercentageImage = _result.splice(0, 1)[0];
  console.log(maxPercentageImage);

  return (
    <Layout>
      <Meta />
      <Container>
        <p className="font-bold text-center text-blue-400 text-6xl ">
          あなたは{result[0].name}に{result[0].percent}%似ています！
        </p>
        <div className="text-center">
          <img
            src="/kaede_result.png"
            alt=""
            className="w-[300px] inline mx-9"
          />
          <img
            src="/teradaranze.jpeg"
            alt=""
            className="w-[200px] inline mx-9"
          />
        </div>
        <FadeIn>
          <div className="bg-blue-400 my-9 p-3">
            <p className="text-center mt-8 font-bold text-4xl">
              選んだ5人のうち、最も近いのは
              <span className="text-red-600">
                {maxPercentageImage && maxPercentageImage.name}
              </span>
              です。
            </p>
            <div className="flex">
              {result &&
                result.map((res: Img) => (
                  <div key={res.name} className="text-center">
                    <img
                      src={res.path}
                      alt=""
                      className="w-[100px] inline mx-9"
                    />
                    <p>{res.name}</p>
                    <p>{res.percent}％</p>
                  </div>
                ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="bg-gray-200 my-9">
            <p>あなたの理想の顔と比べた時のポイントはコチラ</p>
            <p className="text-red-500">Good</p>
            <p>・目の左右バランスがよい</p>
            <p>・目の左右バランスがよい</p>
            <p className="text-blue-600">Bad</p>
            <div className="flex">
              <p className="mr-5">・顔の幅が広い</p>
              <div>
                <p>他のユーザーはこんなサイトを見ています</p>
                <p>html://aaaaaa</p>
                <p>html://aaaaaa</p>
                <p>html://aaaaaa</p>
              </div>
            </div>
            <div className="flex">
              <p className="mr-5">・顔の幅が広い</p>
              <div>
                <p>他のユーザーはこんなサイトを見ています</p>
                <p>html://aaaaaa</p>
                <p>html://aaaaaa</p>
                <p>html://aaaaaa</p>
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="mt-20 bg-blue-400">
            <span onClick={ClickHandler}>+評価の詳細を見る</span>
            <ToggleList isOpen={isOpen}>
              <p>顔全体の評価</p>
              <div className="grid grid-cols-4 sm:block">
                <RankCard />
                <RankCard />
                <RankCard />
                <RankCard />
              </div>
              <p>目の評価</p>
              <div className="grid grid-cols-4 sm:block">
                <RankCard />
                <RankCard />
                <RankCard />
                <RankCard />
              </div>
              <p>鼻の評価</p>
              <div className="grid grid-cols-4 sm:block">
                <RankCard />
                <RankCard />
                <RankCard />
                <RankCard />
              </div>
              <p>口元の評価</p>
              <div className="grid grid-cols-4 sm:block">
                <RankCard />
                <RankCard />
                <RankCard />
                <RankCard />
              </div>
            </ToggleList>
          </div>
        </FadeIn>
      </Container>
    </Layout>
  );
};

export default Result;
