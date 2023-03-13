import { describe, it } from 'vitest';
import { connect } from '../../../src/';

describe('getDiscount', () => {
  it('it works!', async () => {
    const { lmnsqzy } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
    const { getDiscount } = lmnsqzy();
    let z = await getDiscount('1');
    expect(z).toBeTruthy();
  });
});
