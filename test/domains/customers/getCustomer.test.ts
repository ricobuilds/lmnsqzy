import { describe, it } from 'vitest';
import { connect } from '../../../src/';

describe('getCustomer', () => {
    it('it works!', async () => {
        const { lmnsqzy } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
        const { getCustomer } = lmnsqzy();
        let z = await getCustomer('1');
        expect(z).toBeTruthy();
    });
});
