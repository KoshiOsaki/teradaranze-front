import type { NextPage } from "next";
import { Meta } from "../components/templates/Meta";
import { Layout } from "../components/templates/Layout";
import { Container } from "../components/templates/Container";
import style from "../styles/index.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Layout>
      <Meta />
      <Container>
        <p>このページは〜</p>
        <div>
          <img src="/shikaruneko.png" alt="" className="w-[200px] inline" />
          <img src="/shikaruneko.png" alt="" className="w-[200px] inline" />
          <img src="/shikaruneko.png" alt="" className="w-[200px] inline" />
        </div>

        <Link href="/result">
          <div>
            <p className={`text-blue-300 ${style.link}`}>診断する</p>
            <span></span>
          </div>
        </Link>
        <div>
          <img src="/shikaruneko.png" alt="" className="w-[200px] inline" />
          <img src="/shikaruneko.png" alt="" className="w-[200px] inline" />
          <img src="/shikaruneko.png" alt="" className="w-[200px] inline" />
        </div>
      </Container>
    </Layout>
  );
};

export default Home;
