import { describe, it } from 'vitest';
import { connect } from '../../../src/';

describe('getDiscountRedemption', () => {
  it('it works!', async () => {
    const { lmnsqzy } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
    const { getDiscountRedemption } = lmnsqzy();
    let z = await getDiscountRedemption('1');
    expect(z).toBeTruthy();
  });
});
