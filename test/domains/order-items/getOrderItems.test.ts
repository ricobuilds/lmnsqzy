import { describe, it } from 'vitest';
import { connect } from '../../../src/';

describe('getOrderItems', () => {
  it('it works!', async () => {
    const { lmnsqzy } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
    const { getOrderItems } = lmnsqzy();
    expect(getOrderItems()).toBeTruthy();
  });
});
