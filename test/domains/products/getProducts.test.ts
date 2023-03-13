import { describe, it } from 'vitest';
import { connect } from '../../../src/';

describe('getProducts', () => {
  it('it works!', async () => {
    const { lmnsqzy } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
    const { getProducts } = lmnsqzy();
    expect(getProducts()).toBeTruthy();
  });
});
