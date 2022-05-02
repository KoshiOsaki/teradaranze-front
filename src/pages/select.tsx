import { NextPage } from "next";
import { Meta } from "../components/Meta";
import { Layout } from "../components/Layout";
import { Container } from "../components/Container";
import { useEffect, useState } from "react";
import axios from "axios";
import { ImgSelectBox } from "../components/ImgSelectBox";
import { Img } from "../types/img";

const Select: NextPage = () => {
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState([]);
  const [image, setImage] = useState<Img[]>([]);

  useEffect(() => {
    try {
      //Img[]の型で8枚の画像を取得
      const _image: Promise<Img[]> = axios.get("#").then((res) => {
        return res.data;
      });
      // await setImage(_image)
    } catch (error) {
      console.log(error);
    }
  }, []);

  //仮データ
  useEffect(() => {
    setImage([
      {
        path: "/miyatamanamo.jpeg",
        name: "宮田まほの",
      },
      {
        path: "/moriyarena.jpeg",
        name: "森屋れな",
      },
      {
        path: "/saitouasuka.jpeg",
        name: "齋藤飛鳥",
      },
      {
        path: "/yamaguchiharuyo.jpeg",
        name: "山口はるよ",
      },
      {
        path: "/yodayuki.jpeg",
        name: "与田祐希",
      },
      {
        path: "/moriyarena.jpeg",
        name: "森屋れな",
      },
      {
        path: "/saitouasuka.jpeg",
        name: "齋藤飛鳥",
      },
      {
        path: "kanemuramiku.jpeg",
        name: "金村美玖",
      },
    ]);
  }, []);

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
            <p className="my-6">{count}枚目/4</p>
            <ImgSelectBox
              image={[image[count * 2 - 2], image[count * 2 - 1]]}
              count={count}
              setCount={setCount}
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
            />
            {count == 4 && (
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
