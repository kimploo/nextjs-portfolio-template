import IllustrationPreview from './illustration-preview';
import Post from '../types/post';

type Props = {
  posts: Post[];
};

const IllustrationContainer = ({ posts }: Props) => {
  // TODO: Masonry..
  // TODO: 아이템의 너비는 유지, 길이는 잘려도 된다.
  // ref: https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react
  // 브라우저 viewport가 변함에 따라서, useLayoutEffect에 맞춰서 innerWIdth, innerHeight를 조정해보자
  return (
    <section className='grid grid-cols-5 grid-rows-[200px_minmax(900px,_1fr)_100px] gap-2 place-items-start'>
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
