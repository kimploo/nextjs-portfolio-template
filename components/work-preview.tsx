/* eslint-disable react/no-unused-prop-types */
import WorkCoverImage from './work-cover-image';
import Author from '../types/author';

type Props = {
  title: string;
  thumbnailUrl: string;
  date?: string;
  excerpt?: string;
  author?: Author;
  slug: string;
};

export default function WorkPreview({ title, thumbnailUrl, slug }: Props) {
  return <WorkCoverImage slug={slug} title={title} src={thumbnailUrl} />;
}
