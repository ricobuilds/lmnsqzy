import { describe, it } from 'vitest';
import { connect } from '../../../src/';

describe('getOrders', () => {
  it('it works!', async () => {
    const { lmnsqzy } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
    const { getOrders } = lmnsqzy();
    expect(getOrders()).toBeTruthy();
  });
});
