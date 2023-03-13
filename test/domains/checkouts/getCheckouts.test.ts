import { describe, it } from 'vitest';
import { connect } from '../../../src/';

describe('getCheckouts', () => {
  it('it works!', async () => {
    const { lmnsqzy } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
    const { getCheckouts } = lmnsqzy();
    expect(getCheckouts()).toBeTruthy();
  });
});
