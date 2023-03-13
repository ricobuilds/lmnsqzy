import { describe, it } from 'vitest';
import { connect } from '../../../src/';

describe('getFile', () => {
  it('it works!', async () => {
    const { lmnsqzy } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
    const { getFile } = lmnsqzy();
    let z = await getFile('1');
    expect(z).toBeTruthy();
  });
});
