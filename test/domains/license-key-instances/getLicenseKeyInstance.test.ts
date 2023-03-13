import { describe, it } from 'vitest';
import { connect } from '../../../src/';

describe('getLicenseKeyInstance', () => {
  it('it works!', async () => {
    const { lmnsqzy } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
    const { getLicenseKeyInstance } = lmnsqzy();
    let z = await getLicenseKeyInstance('1');
    expect(z).toBeTruthy();
  });
});
