import { describe, it } from 'vitest';
import { connect } from '../../../src/';

describe('getOrder', () => {
  it('it works!', async () => {
    const { lmnsqzy } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
    const { getOrder } = lmnsqzy();
    let z = await getOrder('1');
    expect(z).toBeTruthy();
  });
});
