import Head from 'next/head';
import Container from '../components/container';
import PostPreview from '../components/post-preview';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import { CMS_NAME } from '../lib/constants';
import Post from '../types/post';

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  // const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <Layout>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
      <Container>
        <Intro />
        {morePosts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </Container>
    </Layout>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt']);

  return {
    props: { allPosts },
  };
};
