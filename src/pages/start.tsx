import { NextPage } from "next";
import { Meta } from "../components/Meta";
import { Layout } from "../components/Layout";
import { Container } from "../components/Container";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { useRecoilState } from "recoil";
import { similarActorsState } from "../store/similarActorsState";
import { Img } from "../types/img";
import { selectedActorsState } from "../store/selectedActorsState";

const Start: NextPage = () => {
  const router = useRouter();
  const [image, setImage] = useState<any>("");
  const [similarActors, setSimilarActors] =
    useRecoilState<Img[]>(similarActorsState);
  const [selectedActors, setSelectedActors] =
    useRecoilState(selectedActorsState);

  const handleSubmit = async () => {
    const files = new FormData();
    files.append("img", image[0]);
    try {
      console.log(files);
      const response = await axios.post(
        "https://whispering-hollows-31833.herokuapp.com/start",
        files,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      );
      if (response.data.error) {
        alert(response.data.error);
      } else {
        setSimilarActors(response.data.similarActors);
        setSelectedActors([]);
        router.push("/select");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <Meta />
      <Container>
        <div className="text-center">
          <p className="font-bold mt-8">※写真は処理後、自動的に削除されます</p>
          <div className="flex">
            <div className="w-[50%] mt-10">
              <p>自分の写真をアップロードしてください↓</p>
              <input
                className="mt-10"
                accept="image/*"
                type="file"
                onChange={(event) => setImage(event.target.files)}
              />
            </div>

            <div>
              <div className="mb-10 text-center h-[40px] w-[400px] mx-auto inline-block mt-10 mr-6">
                <p>理想の芸能人を１人入力してください</p>
                <p className="text-sm">※現在、寺田蘭世のみの対応です。</p>
                <input
                  type="text"
                  className="shadow-md rounded-lg py-2 px-6 my-4 text-gray-700 leading-tight focus:outline-none w-[340px] h-[40px]"
                  placeholder="例)寺田蘭世"
                  value="寺田蘭世"
                />
              </div>
              <div>
                <button
                  onClick={handleSubmit}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-6"
                >
                  START
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};
export default Start;
