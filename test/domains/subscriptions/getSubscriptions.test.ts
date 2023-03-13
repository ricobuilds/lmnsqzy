import { describe, it } from 'vitest';
import { connect } from '../../../src/';

describe('getSubscriptions', () => {
  it('it works!', async () => {
    const { lmnsqzy } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
    const { getSubscriptions } = lmnsqzy();
    expect(getSubscriptions()).toBeTruthy();
  });
});
