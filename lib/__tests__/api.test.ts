// TODO: api에 대한 엄밀한 테스트 작성 완료하기

import { getWorkDetail } from '../api';

describe('getWorkDetail test', () => {
  test('더미 데이터를 성공적으로 조회합니다.', () => {
    expect(getWorkDetail('./lib/__tests__/dummyPublic/work', 'dummyWorkOne')).toEqual({
      detail: [],
      coverPath: 'lib/__tests__/dummyPublic/work/dummyWorkOne/cover.png',
      index: {
        content: 'something here',
        data: {
          author: {
            name: 'Test Kim',
          },
          date: '2020-03-16T05:35:07.322Z',
          excerpt: '',
          ogImage: {
            url: '/work/assets/마주치장.png',
          },
          thumbnailUrl: '/work/assets/마주치장.png',
          title: '마주치장',
        },
        excerpt: '',
        isEmpty: false,
      },
    });
  });
});
