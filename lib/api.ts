/* eslint-disable default-param-last */
import { Dirent, readdirSync, readFileSync } from 'fs';
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

/**
 * function getAllWork
 * public/${category} 디렉토리의 모든 작품의 경로를 조회합니다.
 * @param {string} category 작품 카테고리
 */
export function getAllWork(category: string) {
  const categoryDir = join(process.cwd(), 'public', category);
  const workDirs = readdirSync(categoryDir, { withFileTypes: true }).filter((file) => file.isDirectory());
  const works = workDirs.map((work) => getWorkDetail(categoryDir, work.name));
  // TODO: parseMetaData 부분 적용하고, 리펙토링하기
}


// TODO: jsdoc
// public/${category} 디렉토리의 모든 작품의 경로를 조회합니다.
export function getWorkDetail(categoryDir: string, workName: string) {
  const workPath = join(categoryDir, workName);
  const work = readdirSync(workPath, { withFileTypes: true });
  const dirs = work.filter((file) => file.isDirectory());
  const files = work.filter((file) => file.isFile());

  const detailDir = dirs.find((dir) => dir.name.includes('detail'));
  const coverDir = files.find((dir) => dir.name.includes('cover') && /^.*\.(jpg|jpeg|gif|png|svg)$/gi.test(dir.name));
  const indexDir = files.find((dir) => dir.name.includes('index.md'));

  if (!detailDir || !coverDir || !indexDir) {
    throw new Error(`getWorkDetail error: 양식에 맞게 작품을 public 폴더에 넣어주세요.`);
  }

  const detail = readdirSync(join(workPath, 'detail'), { withFileTypes: true })
    .filter((file) => file.isFile() && /^.*\.(jpg|jpeg|gif|png|svg)$/gi.test(file.name))
    .map((dirent) => join(workPath, 'detail', dirent.name));

  const coverPath = join(workPath, coverDir.name);
  const indexString = readFileSync(join(workPath, 'index.md'), 'utf8');
  const index = matter(indexString);

  return {
    detail,
    coverPath,
    index,
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
