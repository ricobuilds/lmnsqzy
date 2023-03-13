import { describe, it } from 'vitest';
import { connect } from '../../../src/';

describe('getLicenseKeys', () => {
  it('it works!', async () => {
    const { lmnsqzy } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
    const { getLicenseKeys } = lmnsqzy();
    expect(getLicenseKeys()).toBeTruthy();
  });
});
