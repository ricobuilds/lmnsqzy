import { describe, it } from 'vitest';
import { connect } from '../../../src/';

describe('cancelSubscription', () => {
  it('it works!', async () => {
    const { lmnsqzy } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
    const { cancelSubscription } = lmnsqzy();
    let z = await cancelSubscription('1');
    expect(z).toBeTruthy();
  });
});
