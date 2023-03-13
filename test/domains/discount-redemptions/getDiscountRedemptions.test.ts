import { describe, it } from 'vitest';
import { connect } from '../../../src/';

describe('getDiscountRedemptions', () => {
  it('it works!', async () => {
    const { lmnsqzy } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
    const { getDiscountRedemptions } = lmnsqzy();
    expect(getDiscountRedemptions()).toBeTruthy();
  });
});
