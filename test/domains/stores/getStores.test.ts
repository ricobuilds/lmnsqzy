import { connect } from '../../../src/'

describe('getStores', () => {
  it('it works!', async () => {
    const { lmnsqzy } = connect(`${process.env.LMNSQZY_API_TOKEN}`)
    const { getStores } = lmnsqzy()
    let z = await getStores()
    expect(z).toBeTruthy()
  })
})
