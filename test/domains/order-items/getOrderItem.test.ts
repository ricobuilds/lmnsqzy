import { describe, it } from 'vitest';
import { connect } from '../../../src/';

describe('getOrderItem', () => {
  it('it works!', async () => {
    const { lmnsqzy } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
    const { getOrderItem } = lmnsqzy();
    let z = await getOrderItem('1');
    expect(z).toBeTruthy();
  });
});
