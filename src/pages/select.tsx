import { NextPage } from "next";
import { Meta } from "../components/Meta";
import { Layout } from "../components/Layout";
import { Container } from "../components/Container";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { ImgSelectBox } from "../components/ImgSelectBox";

const Select: NextPage = () => {
  const [selectCount, setSelectCount] = useState(1);
  const [loading, setLoading] = useState(false);

  var img = [""];
  if (selectCount == 1) {
    img = ["/miyatamanamo.jpeg", "/moriyarena.jpeg"];
  } else if (selectCount == 2) {
    img = ["/saitouasuka.jpeg", "/yamaguchiharuyo.jpeg"];
  } else if (selectCount == 3) {
    img = ["/yodayuki.jpeg", "/moriyarena.jpeg"];
  } else if (selectCount == 4) {
    img = ["/saitouasuka.jpeg", "/kanemuramiku.jpeg"];
  }

  // var img = [];
  // const selectImg = (count: number) => {
  //   img = [...imgList[count]];
  // };

  return (
    <Layout>
      <Meta />
      <Container>
        {loading ? (
          <div></div>
        ) : (
          <div className="text-center">
            <p className="font-bold  text-4xl my-6">
              なりたい方の顔を選んで下さい
            </p>
            <p className="my-6">{selectCount}枚目/4</p>
            <ImgSelectBox
              img={img}
              selectCount={selectCount}
              setSelectCount={setSelectCount}
            />
            {selectCount == 4 && (
              <p className="text-4xl text-blue-700 my-6">結果を見る</p>
            )}
          </div>
        )}

        <p></p>
      </Container>
    </Layout>
  );
};

export default Select;
