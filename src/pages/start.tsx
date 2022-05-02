import { NextPage } from "next";
import { Meta } from "../components/Meta";
import { Layout } from "../components/Layout";
import { Container } from "../components/Container";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const Start: NextPage = () => {
  const router = useRouter();
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const onClickStart = async () => {
    try {
      if (acceptedFiles != undefined) {
        //画像のpathを1枚送信。人が2人いるエラー、顔認識できないエラーとかあればここで返してもらう？
        await axios.post("#", acceptedFiles[0].name);
        console.log(acceptedFiles[0].name);
        router.push("/select");
      } else {
        alert("画像がアップされていません");
      }
    } catch (error) {
      alert("画像がアップされていません");
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
              <div className="bg-red-200 m-5 p-4">
                <div {...getRootProps({ className: "dropzone" })}>
                  <input {...getInputProps()} />
                  <p>クリックしてファイルを選択</p>
                </div>
                <ul>
                  {acceptedFiles.map((file: File) => (
                    <li key="file">{file.name}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="mb-10 text-center h-[40px] w-[400px] mx-auto inline-block mt-10 mr-6">
                <label>理想の芸能人を１人入力してください</label>
                <input
                  // onChange={onChangeFindName}
                  className="shadow-md rounded-tl-lg rounded-bl-lg py-2 px-6 text-gray-700 leading-tight focus:outline-none w-[340px] h-[40px]"
                  placeholder="例)寺田蘭世"
                />
                <button
                  type="submit"
                  // onClick={onClickSearchName}
                  className={`shadow-md rounded-tr-lg rounded-br-lg float-right bg-blue-500 hover:bg-blue-700 text-white w-[60px] h-[40px]`}
                >
                  <svg
                    className="fill-current py-1 px-1 m-auto"
                    viewBox="0 0 56.966 56.966"
                    width="23px"
                    height="23px"
                  >
                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                  </svg>
                </button>
              </div>
              <div>
                <button
                  onClick={onClickStart}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
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
