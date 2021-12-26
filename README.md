# nextjs-portfolio-template

디자이너 포트폴리오를 next.js의 정적 사이트 제작 기능으로 쉽게 제작합니다.

- `/public/[slug]`: `{your homepage url}/[slug]`경로에 보여주기 원하는 작품과 작품 정보를 저장합니다.
  - `public/[slug]/assets`: 포트폴리오에 사용할 사진을 담습니다.
  - `public/[slug]/{작품명}.md`: 파일명을 작품명으로 작성하고, 파일 내부에 작품의 상세 정보를 작성합니다.

```md
  ---
  title: '마주치장'
  kexcerpt: ''
  coverImage: '/work/assets/마주치장.png'
  date: '2020-03-16T05:35:07.322Z'
  author:
    name: Hyodee Kim 
  ogImage:
    url: '/work/assets/마주치장.png'
  ---
  이 작품은 마주치장입니다.
```
