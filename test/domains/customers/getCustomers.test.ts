import { connect } from '../../../src/';

describe('getCustomers', () => {
  it('it works!', async () => {
    const { lmnsqzy } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
    const { getCustomers } = lmnsqzy();
    let z = await getCustomers();
    expect(z).toBeTruthy();
  });
});
