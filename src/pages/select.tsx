import { NextPage } from "next";
import { Meta } from "../components/templates/Meta";
import { Layout } from "../components/templates/Layout";
import { Container } from "../components/templates/Container";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Select: NextPage = () => {
  const router = useRouter();
  const [selectCount, setSelectCount] = useState(0);
  const onClickSelect = () => {
    if (selectCount <= 4) {
      setSelectCount(selectCount + 1);
    } else {
      router.push("/result");
    }
  };

  return (
    <Layout>
      <Meta />
      <Container>
        <div>
          <p className="font-bold text-purple-400 text-4xl">
            なりたい方の顔を選んで下さい
          </p>
          <p>{selectCount}/5</p>
          <div className="flex">
            <div onClick={onClickSelect} className="">
              <img src="/shikaruneko.png" alt="" className="w-[200px] inline" />
            </div>

            <img src="/shikaruneko.png" alt="" className="w-[200px] inline" />
          </div>
          {selectCount <= 5 ? (
            <button>次へ</button>
          ) : (
            <button>結果を見る</button>
          )}
        </div>

        <p></p>
      </Container>
    </Layout>
  );
};

export default Select;
