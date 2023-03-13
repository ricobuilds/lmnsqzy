import { describe, it } from 'vitest';
import { connect } from '../../../src/';

describe('getProduct', () => {
  it('it works!', async () => {
    const { lmnsqzy } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
    const { getProduct } = lmnsqzy();
    expect(getProduct('14109')).toBeTruthy();
  });
});
