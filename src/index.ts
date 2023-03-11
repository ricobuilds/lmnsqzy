import { TMethods, TLmnsqzyFunctions, GetUseResponse } from "./types";
import { constants } from "./constants";
import fetch from 'node-fetch'

/**
 * This function helps you connect to the API endpoints.
 * @param {string} token Your API token from `https://app.lemonsqueezy.com/settings/api`
 * @returns two objects `lmnsqzy` and `doesWork`.
 */
export const connect = (token: string): TLmnsqzyFunctions => {

  if (token.split('').length < constants.TOKEN_LIMIT) throw Error("This doesn't seem like an authentic `lmnsqzy` API token. Check your naming variables, and try again.")

  /**
  * This function gets the currently authenticated user.
  * Refer to: https://docs.lemonsqueezy.com/api/users
  * @returns a user object.
  */
  async function getUser(): Promise<GetUseResponse> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/users/me`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        'Authorization': `Bearer ${token}`
      }
    });

    return r.json() as Promise<GetUseResponse>
  }

  async function getStores(){}
  async function getCustomers(){}
  async function getProducts(){}
  async function getVariants(){}
  async function getFiles(){}
  async function getOrders(){}
  async function getOrderItems(){}
  async function getSubscriptions(){}
  async function getSubscriptionsInvoices(){}
  async function getDiscounts(){}
  async function getDiscountRedemptions(){}
  async function getLicenseKeys(){}
  async function getLicenseKeyInstances(){}
  async function getCheckouts(){}

  return {
    lmnsqzy: (): TMethods => {

      return {
        getUser,
        getStore: () => ``,
        getStores: () => ``,
        getCustomer: () => ``,
        getCustomers: () => ``,
        getProduct: () => ``,
        getProducts: () => ``,
        getVariant: () => ``,
        getVariants: () => ``,
        getFile: () => ``,
        getFiles: () => ``,
        getOrder: () => ``,
        getOrders: () => ``,
        getOrderItem: () => ``,
        getOrderItems: () => ``,
        updateSubscription: () => ``,
        getSubscription: () => ``,
        getSubscriptions: () => ``,
        cancelSubscription: () => ``,
        getSubscriptionsInvoice: () => ``,
        getSubscriptionsInvoices: () => ``,
        createDiscount: () => ``,
        getDiscount: () => ``,
        deleteDiscount: () => ``,
        getDiscounts: () => ``,
        getDiscountRedemption: () => ``,
        getDiscountRedemptions: () => ``,
        getLicenseKey: () => ``,
        getLicenseKeys: () => ``,
        getLicenseKeyInstance: () => ``,
        getLicenseKeyInstances: () => ``,
        createCheckout: () => ``,
        getCheckout: () => ``,
        getCheckouts: () => ``,
      }

    },
    /**
     * 
     * @returns a string still1
     */
    doesWork: () => `it works!`
  }
}