import { TConnect } from "./types";
import { usersDomain } from './domains/users';
import { constants } from "./constants";

export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};

/**
 * 
 * @param token 
 * @returns 
 */
export const connect = (token: string): TConnect => {
    
    if (token.split('').length < constants.TOKEN_LIMIT) throw Error("This doesn't seem like an authentic `lmnsqzy` API token. Check your naming variables, and try again.")

    const doesWork = () => `it works!`;

    return {
        lmnsqzy: () => {
            return {
                ...usersDomain
            }
        },
        doesWork
    }
}