import { TMethods, TLmnsqzyFunctions } from './types';
import { constants } from './constants';
import fetch from 'node-fetch';
import { GetUserResponse } from './domains/users';
import { GetStoreResponse, GetStoresResponse } from './domains/stores';
import { GetCustomersResponse } from './domains/customers';

/**
 * This function helps you connect to the API endpoints.
 * @param {string} token Your API token from `https://app.lemonsqueezy.com/settings/api`
 * @returns two objects `lmnsqzy` and `doesWork`.
 */
export const connect = (token: string): TLmnsqzyFunctions => {
  if (token.split('').length < constants.TOKEN_LIMIT)
    throw Error(
      "This doesn't seem like an authentic `lmnsqzy` API token. Check your naming variables, and try again."
    );

  /**
   * This handler gets the currently authenticated user.
   * Refer to: https://docs.lemonsqueezy.com/api/users
   * @returns a user object.
   */
  async function getUser(): Promise<GetUserResponse> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/users/me`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    return r.json() as Promise<GetUserResponse>;
  }

  async function getStore(id: string): Promise<GetStoreResponse> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/stores/${id}`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(r)
    return r.json() as GetStoreResponse;
  }

  /**
   * This handler gets a paginatated object of all your stores.
   * Refer to: https://docs.lemonsqueezy.com/api/stores
   * @returns a set of `store` objects, ordered by name.
   */
  async function getStores(): Promise<GetStoresResponse> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/stores`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });
    return r.json() as Promise<GetStoresResponse>;
  }

  async function getCustomer(): Promise<string> {
    return ``;
  }

  /**
   * This handler gets a paginatated object of all your customers.
   * Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `customer` objects, ordered by created_at field in descending order.
   */
  async function getCustomers(): Promise<GetCustomersResponse> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/customers`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });
    return r.json() as Promise<GetCustomersResponse>;
  }

  async function getProduct(): Promise<string> {
    return ``;
  }

  /**
   * This handler gets a paginatated object of all your products.
   * Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `products` objects, ordered by created_at field in descending order.
   */
  async function getProducts(): Promise<string> {
    return ``;
  }
  async function getVariant(): Promise<string> {
    return ``;
  }

  /**
   * This handler gets a paginatated object of all your products.
   * Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `variant` objects, ordered by created_at field in descending order.
   */
  async function getVariants(): Promise<string> {
    return ``;
  }
  async function getFile(): Promise<string> {
    return ``;
  }
  async function getFiles(): Promise<string> {
    return ``;
  }
  async function getOrder(): Promise<string> {
    return ``;
  }
  async function getOrders(): Promise<string> {
    return ``;
  }
  async function getOrderItem(): Promise<string> {
    return ``;
  }
  async function getOrderItems(): Promise<string> {
    return ``;
  }
  async function updateSubscription(): Promise<string> {
    return ``;
  }
  async function getSubscription(): Promise<string> {
    return ``;
  }
  async function getSubscriptions(): Promise<string> {
    return ``;
  }
  async function cancelSubscription(): Promise<string> {
    return ``;
  }
  async function getSubscriptionsInvoice(): Promise<string> {
    return ``;
  }
  async function getSubscriptionsInvoices(): Promise<string> {
    return ``;
  }
  async function getDiscount(): Promise<string> {
    return ``;
  }
  async function createDiscount(): Promise<string> {
    return ``;
  }
  async function deleteDiscount(): Promise<string> {
    return ``;
  }
  async function getDiscounts(): Promise<string> {
    return ``;
  }
  async function getDiscountRedemption(): Promise<string> {
    return ``;
  }
  async function getDiscountRedemptions(): Promise<string> {
    return ``;
  }
  async function getLicenseKey(): Promise<string> {
    return ``;
  }
  async function getLicenseKeys(): Promise<string> {
    return ``;
  }
  async function getLicenseKeyInstance(): Promise<string> {
    return ``;
  }
  async function getLicenseKeyInstances(): Promise<string> {
    return ``;
  }
  async function createCheckout(): Promise<string> {
    return ``;
  }
  async function getCheckout(): Promise<string> {
    return ``;
  }
  async function getCheckouts(): Promise<string> {
    return ``;
  }

  return {
    lmnsqzy: (): TMethods => {
      return {
        getUser,
        getStore,
        getStores,
        getCustomer,
        getCustomers,
        getProduct,
        getProducts,
        getVariant,
        getVariants,
        getFile,
        getFiles,
        getOrder,
        getOrders,
        getOrderItem,
        getOrderItems,
        updateSubscription,
        getSubscription,
        getSubscriptions,
        cancelSubscription,
        getSubscriptionsInvoice,
        getSubscriptionsInvoices,
        createDiscount,
        getDiscount,
        deleteDiscount,
        getDiscounts,
        getDiscountRedemption,
        getDiscountRedemptions,
        getLicenseKey,
        getLicenseKeys,
        getLicenseKeyInstance,
        getLicenseKeyInstances,
        createCheckout,
        getCheckout,
        getCheckouts,
      };
    },
    /**
     *
     * @returns a string still1
     */
    doesWork: () => `it works!`,
  };
};
