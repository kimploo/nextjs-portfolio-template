/* eslint-disable default-param-last */
import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export function getSlugs(path: string) {
  const dir = join(process.cwd(), 'public', path);
  return {
    slugs: fs.readdirSync(dir),
    parseMetaData: (slug: string, fields: string[] = [], path: string) => {
      const realSlug = slug.replace(/\.md$/, '');
      const dir = join(process.cwd(), 'public', path);
      const fullPath = join(dir, `${realSlug}.md`);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

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

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const dir = join(process.cwd(), 'public', 'work');
  const fullPath = join(dir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

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
}

export function getAllContents(fields: string[] = [], path: string) {
  const { slugs, parseMetaData } = getSlugs(path);
  const posts = slugs
    .filter((slug) => slug.match(/\.md$/))
    .map((slug) => parseMetaData(slug, fields, path))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
