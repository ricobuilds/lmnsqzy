import { describe, it } from 'vitest';
import { connect } from '../../../src/';

describe('getSubscriptionInvoice', () => {
  it('it works!', async () => {
    const { lmnsqzy } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
    const { getSubscriptionInvoice } = lmnsqzy();
    let z = await getSubscriptionInvoice('1');
    expect(z).toBeTruthy();
  });
});
