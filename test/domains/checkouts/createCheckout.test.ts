import { describe, it } from 'vitest';
import { connect } from '../../../src/';

describe('createCheckout', () => {
  it('it works!', async () => {
    const { lmnsqzy } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
    const { createCheckout } = lmnsqzy();
    // TODO: #1 Create a type for the input as per la https://docs.lemonsqueezy.com/api/checkouts#create-a-checkout
    let z = await createCheckout();
    expect(z).toBeTruthy();
  });
});
