// TODO: api에 대한 엄밀한 테스트 작성 완료하기

import { getWorkDetail } from '../api';

describe('getWorkDetail test', () => {
  test('categoryDir', () => {
    expect(getWorkDetail('./lib/__tests__/dummyPublic', 'dummyWorkOne')).toBeTruthy();
  });
});
