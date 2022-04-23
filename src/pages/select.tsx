import { NextPage } from "next";
import { Meta } from "../components/Meta";
import { Layout } from "../components/Layout";
import { Container } from "../components/Container";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Select: NextPage = () => {
  const router = useRouter();
  const [selectCount, setSelectCount] = useState(1);
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
          <p>{selectCount}枚目/5</p>
          <div className="flex ">
            {/* <div className="hover:bg-pink-200 w-[320px] mx-auto mt-2 border border-gray-500 inline-block">
                  <a target="_blank" rel="noreferrer" href={link}>
                    <img
                      className="w-[300px] h-auto p-2 m-auto "
                      src={img}
                      alt=""
                    />
                  </a>
                </div> */}
            <div
              onClick={onClickSelect}
              className="hover:cursor-pointer hover:bg-pink-200 mx-6 border border-gray-500"
            >
              <img src="/shikaruneko.png" alt="" className="w-[200px] inline" />
            </div>
            <div
              onClick={onClickSelect}
              className="hover:cursor-pointer hover:bg-pink-200 mx-6 border border-gray-500"
            >
              <img src="/shikaruneko.png" alt="" className="w-[200px] inline" />
            </div>
          </div>
          {selectCount <= 4 ? (
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
