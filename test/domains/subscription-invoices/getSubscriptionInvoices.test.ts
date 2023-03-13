import { describe, it } from 'vitest';
import { connect } from '../../../src/';

describe('getSubscriptionInvoices', () => {
  it('it works!', async () => {
    const { lmnsqzy } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
    const { getSubscriptionInvoices } = lmnsqzy();
    expect(getSubscriptionInvoices()).toBeTruthy();
  });
});
