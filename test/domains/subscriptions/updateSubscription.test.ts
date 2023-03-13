import { describe, it } from 'vitest';
import { connect } from '../../../src/';

describe('updateSubscription', () => {
  it('it works!', async () => {
    const { lmnsqzy } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
    const { updateSubscription } = lmnsqzy();
    let z = await updateSubscription('1');
    expect(z).toBeTruthy();
  });
});
