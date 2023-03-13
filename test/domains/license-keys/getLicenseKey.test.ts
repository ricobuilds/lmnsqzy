import { describe, it } from 'vitest';
import { connect } from '../../../src/';

describe('getLicenseKey', () => {
  it('it works!', async () => {
    const { lmnsqzy } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
    const { getLicenseKey } = lmnsqzy();
    let z = await getLicenseKey('1');
    expect(z).toBeTruthy();
  });
});
