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
import { useRecoilState } from "recoil";
import { selectedActorsState } from "../store/selectedActorsState";
import { useRouter } from "next/router";

const Result: NextPage = () => {
  const router = useRouter();
  const [isOpen, setOpenState] = useState(false);
  const [result, setResult] = useState<Img[]>([]);
  const [selectedActors, setSelectedActors] =
    useRecoilState(selectedActorsState);
  const [userImg, setUserImg] = useState();

  const ClickHandler = () => setOpenState(!isOpen);
  useEffect(() => {
    (async () => {
      try {
        console.log(selectedActors);
        const response = await axios.post(
          "https://whispering-hollows-31833.herokuapp.com/result",
          selectedActors,
          {
            headers: {
              "content-type": "application/json",
            },
          }
        );
        console.log(response);
        setUserImg(response.data.userImg);
        setResult(response.data.result);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const onClickRetry = () => {
    router.push("/start");
  };

  //最も近い人を取得
  let maxPercentageImage: any;
  const _result: Img[] = [...result];
  _result.sort((a, b): any => {
    if (a.percent && b.percent) {
      return b.percent - a.percent;
    }
  });
  maxPercentageImage = _result.splice(0, 1)[0];

  return (
    <Layout>
      <Meta />
      <Container>
        <p className="font-bold text-center text-blue-400 text-6xl ">
          あなたは{result[0]?.name}に{result[0]?.percent}%似ています！
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
                      src={res.src}
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
        <div className="text-center">
          <button
            onClick={onClickRetry}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-6 mx-auto"
          >
            他の顔で試す
          </button>
        </div>
        <p className="text-center mt-32">以下、実装中の機能です。</p>
        <hr
          className="bg-black"
          style={{
            display: "block",
            width: "100%",
            height: "1px",
            border: "0",
            borderTop: "1px dashed #cccccc",
          }}
        />

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
