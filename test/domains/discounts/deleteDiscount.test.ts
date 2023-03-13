import { describe, it } from 'vitest';
import { connect } from '../../../src/';

describe('deleteDiscount', () => {
  it('it works!', async () => {
    const { lmnsqzy } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
    const { deleteDiscount } = lmnsqzy();
    let z = await deleteDiscount('1');
    expect(z).toBeTruthy();
  });
});
