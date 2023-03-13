import { describe, it } from 'vitest';
import { connect } from '../../../src/';

describe('getDiscounts', () => {
  it('it works!', async () => {
    const { lmnsqzy } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
    const { getDiscounts } = lmnsqzy();
    expect(getDiscounts()).toBeTruthy();
  });
});
