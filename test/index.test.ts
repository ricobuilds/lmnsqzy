import { describe, it } from 'vitest';
import { connect } from '../src';

describe('doesWork', () => {
  it('works', async () => {
    const { doesWork } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
    let z = doesWork();
    expect(z).toBeTruthy();
  });
  it('returns a value', async () => {
    const { doesWork } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
    let z = doesWork();
    expect(z).toBe('it works!');
  });
  it(`doesn't return an empty string`, async () => {
    const { doesWork } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
    let z = doesWork();
    expect(z).not.toBe('');
  });
});
