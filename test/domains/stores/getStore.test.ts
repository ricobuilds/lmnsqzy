import { describe, it } from 'vitest';
import { connect } from '../../../src/';

describe('getStore', () => {
  it('it works!', async () => {
    const { lmnsqzy } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
    const { getStore } = lmnsqzy();
    expect(getStore('14109')).toBeTruthy();
  });
});
