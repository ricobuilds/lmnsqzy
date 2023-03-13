import { describe, it } from 'vitest';
import { connect } from '../../../src/';

describe('getCheckout', () => {
  it('it works!', async () => {
    const { lmnsqzy } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
    const { getCheckout } = lmnsqzy();
    let z = await getCheckout('1');
    expect(z).toBeTruthy();
  });
});
