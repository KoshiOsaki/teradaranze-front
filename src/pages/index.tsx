import type { NextPage } from "next";
import { Meta } from "../components/Meta";
import { Layout } from "../components/Layout";
import { Container } from "../components/Container";
import { LargeButton } from "../components/LargeButton";
import { SlideShow } from "../components/SlideShow";
import { FadeIn } from "../components/FadeIn";

const Home: NextPage = () => {
  return (
    <Layout>
      <Meta />
      <Container>
        <FadeIn>
          <div className="text-center mt-9 w-[70%] mx-auto leading-7">
            <p className="font-bold text-lg mb-6">
              このページは自分の顔を「理想の顔」と比較できるサイトです。
            </p>
            <p>人の顔の好みは人それぞれで、公正に評価するのは難しいです。</p>
            <p>
              そこでこのサイトでは、あなたの理想の顔の芸能人を数人選択することで、
              <br />
              その顔と比べた時のあなたの顔の部位別のアドバイスを得られ、理想の顔に
              <br />
              近づくための方針を得ることができます。
            </p>
          </div>
        </FadeIn>
        <SlideShow />
        <div className="mt-20">
          <LargeButton text="診断する" href="/start" />
        </div>
        <SlideShow />
        <p className="text-sm mt-5 text-center">
          ※一般公開していないので肖像権等についてはご容赦ください。
        </p>
      </Container>
    </Layout>
  );
};

export default Home;
