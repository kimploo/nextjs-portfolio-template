import Head from 'next/head';
import { ReactElement } from 'react';
import Container from '../../components/container';
import Header from '../../components/header';
import WorkContainer from '../../components/work-container';
import { getAllContents } from '../../lib/api';
import { CMS_NAME } from '../../lib/constants';
import Post from '../../types/post';

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Header />
      <WorkContainer work={allPosts} />
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllContents(['title', 'date', 'slug', 'author', 'thumbnailUrl', 'excerpt'], 'work');

  return {
    props: { allPosts },
  };
};

Index.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
      <Container>{page}</Container>
    </>
  );
};
