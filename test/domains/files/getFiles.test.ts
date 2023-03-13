import { describe, it } from 'vitest';
import { connect } from '../../../src/';

describe('getFiles', () => {
  it('it works!', async () => {
    const { lmnsqzy } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
    const { getFiles } = lmnsqzy();
    expect(getFiles()).toBeTruthy();
  });
});
