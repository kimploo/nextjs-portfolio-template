import Head from 'next/head';
import Header from '../components/header';
import { CMS_NAME } from '../lib/constants';
import { getAllContents } from '../lib/api';
import type Post from '../types/post';
import Footer from '../components/footer';

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const coverPost = allPosts[0];
  const { title, coverImage } = coverPost;

  return (
    <>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
      <Header />
      <a className='' href='/illustration'>
        <img className='w-full' src={coverImage} alt={title} />
      </a>
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllContents(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt'], 'cover');

  return {
    props: { allPosts },
  };
};
