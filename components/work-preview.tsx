/* eslint-disable react/no-unused-prop-types */
import WorkCoverImage from './work-cover-image';
import Author from '../types/author';

type Props = {
  title: string;
  coverImage: string;
  date?: string;
  excerpt?: string;
  author?: Author;
  slug: string;
};

export default function WorkPreview({ title, coverImage, slug }: Props) {
  return <WorkCoverImage slug={slug} title={title} src={coverImage} />;
}
