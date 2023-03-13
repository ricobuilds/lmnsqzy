import { describe, it } from 'vitest';
import { connect } from '../../../src/';
import { GetVariantResponse } from '../../../src/domains/variants';

describe('getVariant', () => {
    it('works', async () => {
        const { lmnsqzy } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
        const { getVariant } = lmnsqzy();
        expect(getVariant('1')).toBeTruthy();
    });
    it('returns 404 err', async () => {
        const { lmnsqzy } = connect(`${process.env.LMNSQZY_API_TOKEN}`);
        const { getVariant } = lmnsqzy();
        const z: GetVariantResponse = await getVariant('2')
        expect(z.errors.status).toBe('404');
    });
});
