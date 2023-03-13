import { describe, it } from 'vitest';
import { connect } from '../../../src/';

describe('createDiscount', () => {
  it('it works!', async () => {
    const { lmnsqzy } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
    const { createDiscount } = lmnsqzy();
    let z = await createDiscount();
    expect(z).toBeTruthy();
  });
});
