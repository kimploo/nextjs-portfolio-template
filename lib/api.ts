/* eslint-disable default-param-last */
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export function getSlugs(path: string) {
  const dir = join(process.cwd(), 'public', path);
  return {
    slugs: readdirSync(dir),
    parseMetaData: (slug: string, fields: string[] = [], category: string) => {
      const realSlug = slug.replace(/\.md$/, '');
      const dir = join(process.cwd(), 'public', category);
      const fullPath = join(dir, `${realSlug}.md`);
      const fileContents = readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      // TODO: 하드코딩된 경로 parameterize

      type Items = {
        [key: string]: string;
      };

      const items: Items = {};

      // Ensure only the minimal needed data is exposed
      fields.forEach((field) => {
        if (field === 'slug') {
          items[field] = realSlug;
        }
        if (field === 'content') {
          items[field] = content;
        }
        if (typeof data[field] !== 'undefined') {
          items[field] = data[field];
        }
      });

      return items;
    },
  };
}

export function getAllContents(fields: string[] = [], category: string) {
  const { slugs, parseMetaData } = getSlugs(category);
  const posts = slugs
    .filter((slug) => slug.match(/\.md$/))
    .map((slug) => parseMetaData(slug, fields, category))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getAllDetails(fields: string[] = [], category: string, title: string) {
  const getAllAssets = (title: string) => {
    const dir = join(process.cwd(), 'public', category, 'assets', title);
    const assets = readdirSync(dir, { withFileTypes: true })
      .filter((file) => file.isFile() && /^.*\.(jpg|jpeg|gif|png|svg)$/gi.test(file.name))
      .map((dir) => dir.name);
    return assets;
  };

  const posts = getAllAssets(title);
  return posts;
}
