import { connect } from '../../../src/';

describe('doesWork', () => {
  it('it works!', async () => {
    const { lmnsqzy } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
    const { getUser } = lmnsqzy();
    expect(getUser()).toBeTruthy();
  });
});
