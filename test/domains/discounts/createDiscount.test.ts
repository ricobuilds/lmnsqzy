import { describe, it } from 'vitest';
import { connect } from '../../../src/';

describe('createDiscount', () => {
  it('it works!', async () => {
    const { lmnsqzy } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
    const { createDiscount } = lmnsqzy();
    let z = await createDiscount({
      name: "10% off",
      code: '10PERC',
      amount: 13,
      amount_type: 'percent',
      store_id: "14109"
    });
    expect(z).toBeTruthy();
  });
});
