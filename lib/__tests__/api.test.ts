import { getWorkDetail } from '../api';

describe('getWorkDetail test', () => {
  test('categoryDir', () => {
    expect(getWorkDetail('./lib/__tests__/dummyPublic', 'dummyWorkOne')).toBeTruthy();
  });
});
