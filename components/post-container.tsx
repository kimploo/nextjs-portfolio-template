import PostPreview from './post-preview';
import Post from '../types/post';

type Props = {
  posts: Post[];
};

const PostContainer = ({ posts }: Props) => {
  return (
    <section className='grid grid-cols-3 gap-2 place-items-stretch'>
      {posts.map((post) => (
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
    </section>
  );
};

export default PostContainer;
