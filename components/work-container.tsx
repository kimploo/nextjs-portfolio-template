import Post from '../types/post';
import WorkPreview from './work-preview';

type Props = {
  work: Post[];
  // TODO: work 타입 새로 만들기
};

export default function WorkContainer({ work }: Props) {
  return (
    <section className='grid grid-cols-3 gap-2 place-items-stretch'>
      {work.map((post) => (
        <WorkPreview
          key={post.slug}
          title={post.title}
          thumbnailUrl={post.thumbnailUrl}
          date={post.date}
          author={post.author}
          slug={post.slug}
          excerpt={post.excerpt}
        />
      ))}
    </section>
  );
}
