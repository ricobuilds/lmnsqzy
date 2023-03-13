import { describe, it } from 'vitest';
import { connect } from '../../../src/';

describe('createCheckout', () => {
  it('it works!', async () => {
    const { lmnsqzy } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
    const { createCheckout } = lmnsqzy();
    let z = await createCheckout();
    expect(z).toBeTruthy();
  });
});
