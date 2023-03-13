import { describe, it } from 'vitest';
import { connect } from '../../../src/';

describe('getVariants', () => {
  it('it works!', async () => {
    const { lmnsqzy } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
    const { getVariants } = lmnsqzy();
    expect(getVariants()).toBeTruthy();
  });
});
