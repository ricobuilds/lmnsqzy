import { describe, it } from 'vitest';
import { connect } from '../../../src/';

describe('getStore', () => {
  it('it works!', async () => {
    const { lmnsqzy } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
    const { getProduct } = lmnsqzy();
    const z = await getProduct("14101")
    expect(getProduct("14109")).toBeTruthy();
  });
});
