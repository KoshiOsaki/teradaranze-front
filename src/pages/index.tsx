import type { NextPage } from "next";
import { Meta } from "../components/templates/Meta";
import { Layout } from "../components/templates/Layout";
import { Container } from "../components/templates/Container";

const Home: NextPage = () => {
  return (
    <Layout>
      <Meta />
      <Container></Container>
    </Layout>
  );
};

export default Home;
