import { describe, it } from 'vitest';
import { connect } from '../../../src/';
import { GetUserResponse } from '../../../src/domains/users';

describe('getUser', () => {
  it('works', async () => {
    const { lmnsqzy } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
    const { getUser } = lmnsqzy();
    expect(getUser()).toBeTruthy();
  });
  it('works', async () => {
    const { lmnsqzy } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
    const { getUser } = lmnsqzy();
    const z: GetUserResponse = await getUser();
    expect(z.data.attributes.name).toBeTruthy();
  });
});
