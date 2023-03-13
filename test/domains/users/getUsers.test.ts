import { describe, it } from 'vitest';
import { connect } from '../../../src/';
import { User } from '../../../src/domains/users/interface';
import { LmnsqzyResponse } from '../../../src/general/general.responses';

describe('getUser', () => {
  it('works', async () => {
    const { lmnsqzy } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
    const { getUser } = lmnsqzy();
    expect(getUser()).toBeTruthy();
  });
  it('works', async () => {
    const { lmnsqzy } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
    const { getUser } = lmnsqzy();
    const z = await getUser<LmnsqzyResponse<User>>();
    if (z.errors) {
      console.log('API Error:', z.errors[0].status);
    } else {
      console.log('User Data:', z.data);
    }
    expect(z).toBeTruthy();
  });
});
