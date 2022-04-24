import type { NextPage } from "next";
import { Meta } from "../components/Meta";
import { Layout } from "../components/Layout";
import { Container } from "../components/Container";
import { RankCard } from "../components/RankCard";
import { useState } from "react";
import { ToggleList } from "../components/ToggleList";
import { FadeIn } from "../components/FadeIn";

const Result: NextPage = () => {
  const [isOpen, setOpenState] = useState(false);
  const ClickHandler = () => setOpenState(!isOpen);
  return (
    <Layout>
      <Meta />
      <Container>
        <p className="font-bold text-center text-blue-400 text-6xl ">
          あなたは寺田蘭世に0.6%似ています！
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
              <span className="text-red-600">宮田愛萌</span>です。
            </p>
            <div className="flex">
              <div className="text-center">
                <img
                  src="/teradaranze.jpeg"
                  alt=""
                  className="w-[100px] inline mx-9"
                />
                <p>寺田蘭世</p>
                <p>0.6％</p>
              </div>
              <div className="text-center">
                <img
                  src="/miyatamanamo.jpeg"
                  alt=""
                  className="w-[100px] inline mx-9"
                />
                <p>宮田愛萌</p>
                <p>49％</p>
              </div>
              <div className="text-center">
                <img
                  src="/yamaguchiharuyo.jpeg"
                  alt=""
                  className="w-[100px] inline mx-9"
                />
                <p>山口陽世</p>
                <p>16％</p>
              </div>
              <div className="text-center">
                <img
                  src="/yodayuki.jpeg"
                  alt=""
                  className="w-[100px] inline mx-9"
                />
                <p>与田祐希</p>
                <p>0.03％</p>
              </div>
              <div className="text-center">
                <img
                  src="/kanemuramiku.jpeg"
                  alt=""
                  className="w-[100px] inline mx-9"
                />
                <p>金森美玖</p>
                <p>35％</p>
              </div>
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
