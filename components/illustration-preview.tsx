/* eslint-disable react/no-unused-prop-types */
import IllustrationCoverImage from './illustration-cover-image';
import Author from '../types/author';

type Props = {
  title: string;
  coverImage: string;
  date?: string;
  excerpt?: string;
  author?: Author;
  slug: string;
};

export default function IllustrationPreview({ title, coverImage, slug }: Props) {
  return <IllustrationCoverImage slug={slug} title={title} src={coverImage} />;
}
