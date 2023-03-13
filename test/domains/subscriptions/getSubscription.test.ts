import { describe, it } from 'vitest';
import { connect } from '../../../src/';

describe('getSubscription', () => {
  it('it works!', async () => {
    const { lmnsqzy } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
    const { getSubscription } = lmnsqzy();
    let z = await getSubscription('1');
    expect(z).toBeTruthy();
  });
});
