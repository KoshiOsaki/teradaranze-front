import type { NextPage } from "next";
import { Meta } from "../components/templates/Meta";
import { Layout } from "../components/templates/Layout";
import { Container } from "../components/templates/Container";

const Result: NextPage = () => {
  return (
    <Layout>
      <Meta />
      <Container>
        <p className="font-bold">結果ページ</p>
        <p></p>
      </Container>
    </Layout>
  );
};

export default Result;