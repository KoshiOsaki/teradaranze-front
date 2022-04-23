import type { NextPage } from "next";
import { Meta } from "../components/Meta";
import { Layout } from "../components/Layout";
import { Container } from "../components/Container";
import { RankCard } from "../components/RankCard";
import { useState } from "react";
import { ToggleList } from "../components/ToggleList";

const Result: NextPage = () => {
  const [isOpen, setOpenState] = useState(true);
  const ClickHandler = () => setOpenState(!isOpen);
  return (
    <Layout>
      <Meta />
      <Container>
        <p className="font-bold">結果ページ</p>
        <p className="font-bold text-center text-pink-400 text-6xl ">
          あなたは寺田蘭世に78%似ています！
        </p>
        <div className="text-center">
          <img
            src="/shikaruneko.png"
            alt=""
            className="w-[200px] inline mx-9"
          />
          <img
            src="/shikaruneko.png"
            alt=""
            className="w-[200px] inline mx-9"
          />
        </div>
        <div className="bg-pink-100 my-9">
          <p className="text-center mt-8">
            選んだ5人のうち、最も近いのは白石麻衣です。
          </p>
          <div className="flex">
            <div className="text-center">
              <img
                src="/shikaruneko.png"
                alt=""
                className="w-[100px] inline mx-9"
              />
              <p>45％</p>
            </div>
            <div className="text-center">
              <img
                src="/shikaruneko.png"
                alt=""
                className="w-[100px] inline mx-9"
              />
              <p>45％</p>
            </div>
            <div className="text-center">
              <img
                src="/shikaruneko.png"
                alt=""
                className="w-[100px] inline mx-9"
              />
              <p>45％</p>
            </div>
            <div className="text-center">
              <img
                src="/shikaruneko.png"
                alt=""
                className="w-[100px] inline mx-9"
              />
              <p>45％</p>
            </div>
            <div className="text-center">
              <img
                src="/shikaruneko.png"
                alt=""
                className="w-[100px] inline mx-9"
              />
              <p>45％</p>
            </div>
          </div>
        </div>
        <div className="bg-pink-100 my-9">
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

        <div>
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
              <div className="rounded-lg shadow-xl border bg-slate-50 w-[95%] mb-7 ">
                <p>縦比</p>
                <p>A</p>
                <button>詳細</button>
              </div>
              <div className="rounded-lg shadow-xl border bg-slate-50 w-[95%] mb-7 ">
                <p>縦比</p>
                <p>A</p>
                <button>詳細</button>
              </div>
              <div className="rounded-lg shadow-xl border bg-slate-50 w-[95%] mb-7 ">
                <p>縦比</p>
                <p>A</p>
                <button>詳細</button>
              </div>
              <div className="rounded-lg shadow-xl border bg-slate-50 w-[95%] mb-7 ">
                <p>縦比</p>
                <p>A</p>
                <button>詳細</button>
              </div>
            </div>
            <p>鼻の評価</p>
            <div className="grid grid-cols-4 sm:block">
              <div className="rounded-lg shadow-xl border bg-slate-50 w-[95%] mb-7 ">
                <p>縦比</p>
                <p>A</p>
                <button>詳細</button>
              </div>
              <div className="rounded-lg shadow-xl border bg-slate-50 w-[95%] mb-7 ">
                <p>縦比</p>
                <p>A</p>
                <button>詳細</button>
              </div>
              <div className="rounded-lg shadow-xl border bg-slate-50 w-[95%] mb-7 ">
                <p>縦比</p>
                <p>A</p>
                <button>詳細</button>
              </div>
              <div className="rounded-lg shadow-xl border bg-slate-50 w-[95%] mb-7 ">
                <p>縦比</p>
                <p>A</p>
                <button>詳細</button>
              </div>
            </div>
            <p>口元の評価</p>
            <div className="grid grid-cols-4 sm:block">
              <div className="rounded-lg shadow-xl border bg-slate-50 w-[95%] mb-7 ">
                <p>縦比</p>
                <p>A</p>
                <button>詳細</button>
              </div>
              <div className="rounded-lg shadow-xl border bg-slate-50 w-[95%] mb-7 ">
                <p>縦比</p>
                <p>A</p>
                <button>詳細</button>
              </div>
              <div className="rounded-lg shadow-xl border bg-slate-50 w-[95%] mb-7 ">
                <p>縦比</p>
                <p>A</p>
                <button>詳細</button>
              </div>
              <div className="rounded-lg shadow-xl border bg-slate-50 w-[95%] mb-7 ">
                <p>縦比</p>
                <p>A</p>
                <button>詳細</button>
              </div>
            </div>
          </ToggleList>
        </div>
      </Container>
    </Layout>
  );
};

export default Result;
