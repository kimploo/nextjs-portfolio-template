/* eslint-disable react/no-unused-prop-types */

import Link from 'next/link';
import Avatar from './avatar';
import DateFormatter from './date-formatter';
import CoverImage from './work-cover-image';
import Author from '../types/author';

type Props = {
  title: string;
  thumbnailUrl: string;
  date?: string;
  excerpt?: string;
  author?: Author;
  slug: string;
};

const PostPreview = ({ title, thumbnailUrl, slug }: Props) => {
  return <CoverImage slug={slug} title={title} src={thumbnailUrl} />;
};

export default PostPreview;

/* <h3 className='text-3xl mb-3 leading-snug'>
        <Link as={`/posts/${slug}`} href='/posts/[slug]'>
          <a className='hover:underline'>{title}</a>
        </Link>
      </h3>
      <div className='text-lg mb-4'>
        <DateFormatter dateString={date} />
      </div>
      <p className='text-lg leading-relaxed mb-4'>{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} /> */
