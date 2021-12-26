import IllustrationPreview from './illustration-preview';
import Post from '../types/post';

type Props = {
  posts: Post[];
};

const IllustrationContainer = ({ posts }: Props) => {
  // TODO: Masonry..
  return (
    <section className='grid grid-cols-6 gap-2 place-items-stretch'>
      {posts.map((post) => (
        <IllustrationPreview
          key={post.slug}
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          slug={post.slug}
          excerpt={post.excerpt}
        />
      ))}
    </section>
  );
};

export default IllustrationContainer;
