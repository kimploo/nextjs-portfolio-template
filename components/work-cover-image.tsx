import cn from 'classnames';
import Link from 'next/link';

type Props = {
  title: string;
  src: string;
  slug?: string;
};

export default function WorkCoverImage({ title, src, slug }: Props) {
  const image = <img className='object-cover' src={src} alt={title} />;
  return slug ? (
    <Link as={`/work/${slug}`} href='/work/[slug]'>
      <a className='contents' aria-label={title}>
        {image}
      </a>
    </Link>
  ) : (
    image
  );
}
