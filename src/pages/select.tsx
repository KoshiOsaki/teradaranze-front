import { NextPage } from "next";
import { Meta } from "../components/Meta";
import { Layout } from "../components/Layout";
import { Container } from "../components/Container";
import { useEffect, useState } from "react";
import axios from "axios";
import { ImgSelectBox } from "../components/ImgSelectBox";
import { Img } from "../types/img";
import { useRecoilState } from "recoil";
import { similarActorsState } from "../store/similarActorsState";

const Select: NextPage = () => {
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [similarActors, setSimilarActors] = useRecoilState(similarActorsState);

  return (
    <Layout>
      <Meta />
      <Container>
        <div className="text-center">
          <p className="font-bold  text-4xl my-6">
            なりたい方の顔を選んで下さい
          </p>
          <p className="my-6">{count}枚目/4</p>
          <ImgSelectBox
            actors={[
              similarActors[count * 2 - 2],
              similarActors[count * 2 - 1],
            ]}
            count={count}
            setCount={setCount}
          />
          {count == 4 && (
            <p className="text-4xl text-blue-700 my-6">結果を見る</p>
          )}
        </div>
      </Container>
    </Layout>
  );
};

export default Select;
