import { describe, it } from 'vitest';
import { connect } from '../../../src/';

describe('getLicenseKeyInstances', () => {
  it('it works!', async () => {
    const { lmnsqzy } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
    const { getLicenseKeyInstances } = lmnsqzy();
    expect(getLicenseKeyInstances()).toBeTruthy();
  });
});
