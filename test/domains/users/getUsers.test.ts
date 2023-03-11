import { connect } from '../../../src/';

describe('getUsers', () => {
    it('it works!', async () => {
        const { doesWork } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
        expect(doesWork()).toBeTruthy()
    })
})