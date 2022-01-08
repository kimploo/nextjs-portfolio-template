import { ReactElement } from 'react';
// import { useRouter } from 'next/router';
// import ErrorPage from 'next/error';
import Head from 'next/head';
import { join } from 'path';

import Container from '../../components/container';
import Header from '../../components/header';
import WorkDetail from '../../components/work-detail';

import { getAllContents, getAllDetails } from '../../lib/api';
import { CMS_NAME } from '../../lib/constants';
import markdownToHtml from '../../lib/markdownToHtml';

// TODO: Detail 타입 결정
type Props = {
  imgs: string[];
  content: string;
  src: string;
  title: string;
};

export default function Detail({ imgs, content, src, title }: Props) {
  // TODO: useRouter 학습
  // const router = useRouter();
  // if (!router.isFallback && !details?.slug) {
  //   return <ErrorPage statusCode={404} />;
  // }
  return (
    <>
      <Header />
      <WorkDetail imgs={imgs} content={content} src={src} title={title} />
    </>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const title = params.slug;
  const imgs = getAllDetails([], 'work', params.slug);
  const src = `/${join('work', 'assets', title)}`;
  const content = await markdownToHtml('contents to be followed up' || '');

  return {
    props: {
      imgs,
      title,
      content,
      src,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllContents(['slug'], 'work');

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

Detail.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
      <Container>{page}</Container>
    </>
  );
};
