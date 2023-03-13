import { describe, it } from 'vitest';
import { connect } from '../../../src/';

describe('getStore', () => {
  it('it works!', async () => {
    const { lmnsqzy } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
    const { getProducts } = lmnsqzy();
    const z = await getProducts()
    expect(getProducts()).toBeTruthy();
  });
});
