import { connect } from '../../../src/';

describe('getUsers', () => {
    it('it works!', async () => {
        // console.log(`${process.env.LMNSQZY_API_TOKEN}`)
        const { lmnsqzy, doesWork } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
        const { getUser } = lmnsqzy();
        const z = await getUser()
        console.log(z)
        expect(doesWork()).toBeTruthy()
    })
})