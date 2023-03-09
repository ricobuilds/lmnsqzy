import { connect } from '../../../src/'

describe('getUsers', () => {
    it('it works!', async () => {
        console.log(`${process.env.LMNSQZY_API_TOKEN}`)
        const { doesWork } = await connect(`${process.env.LMNSQZY_API_TOKEN}`);
        expect(doesWork()).toBeTruthy()
    })
})