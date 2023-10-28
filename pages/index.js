import Head from "next/head";
import {
  BuyMeCoffee,
  Cover,
  Section,
  SocialNetworks,
  Title,
} from "../components";
import { loadPosts } from "./api/posts";

const LOAD_MORE_STEP = 1;

export default function Home({}) {
  return (
    <>
      <Section>
        <Cover title="Olga<br /> Braiko" />
        <SocialNetworks />
        <BuyMeCoffee />
      </Section>

      <Section>
        <Title>New Post</Title>
      </Section>
    </>
  );
}

export const getServerSideProps = async () => {
  const { posts, total } = await loadPosts(0, LOAD_MORE_STEP);
  return { props: { initialPosts: posts, total } };
};
