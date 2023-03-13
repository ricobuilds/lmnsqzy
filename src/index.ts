import { TMethods, TLmnsqzyFunctions } from './types';
import { constants, errorsTable } from './constants';
import fetch from 'node-fetch';
import { GetUserResponse } from './domains/users';
import { GetStoreResponse, GetStoresResponse } from './domains/stores';
import { GetCustomerResponse, GetCustomersResponse } from './domains/customers';
import { LmnsqzyError } from './general/general.responses';
import { GetProductRespense, GetProductsResponse } from './domains/products';
import { GetVariantResponse, GetVariantsResponse } from './domains/variants';
import { GetFileResponse, GetFilesResponse } from './domains/files';
import { GetOrderResponse, GetOrdersResponse } from './domains/orders';
import { GetOrderItemResponse, GetOrderItemsResponse } from './domains/order-items';
import { CancelSubscriptionResponse, GetSubscriptionResponse, GetSubscriptionsResponse, UpdateSubscriptionResponse } from './domains/subscriptions';
import { GetSubscriptionInvoiceResponse, GetSubscriptionInvoicesResponse } from './domains/subscription-invoices';
import { CreateDiscountResponse, DeleteDiscountResponse, GetDiscountResponse, GetDiscountsResponse } from './domains/discounts';
import { GetDiscountRedemptionResponse } from './domains/discount-redemptions';

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
   * @docs Refer to: https://docs.lemonsqueezy.com/api/users
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

    if (!r.ok) {
      const err = await r.json() as LmnsqzyError
      return err
    }

    return r.json() as Promise<GetUserResponse>;
  }

  /**
  * This handler gets a store by the ID.
  * @param {string} id the identifier of a store.
  * @docs Refer to: https://docs.lemonsqueezy.com/api/stores
  * @returns a store object.
  */
  async function getStore(id: string): Promise<GetStoreResponse> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/stores/${id}`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!r.ok) {
      const errors: GetStoresResponse = {
        jsonapi: {
          version: '1.0'
        },
        errors: errorsTable[r.status]
      }
      return errors
    }

    return r.json() as Promise<GetStoreResponse>;
  }

  /**
   * This handler gets a paginatated object of all your stores.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/stores
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

  /**
   * This handler gets a paginatated object of all your stores.
   * @param {string} id the identifier of a customer's prodfile.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a `customer` object.
   */
  async function getCustomer(id: string): Promise<GetCustomerResponse> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/customers/${id}`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!r.ok) {
      const errors: GetStoresResponse = {
        jsonapi: {
          version: '1.0'
        },
        errors: errorsTable[r.status]
      }
      return errors
    }

    return r.json() as Promise<GetCustomerResponse>
  }

  /**
   * This handler gets a paginatated object of all your customers.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
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

  /**
   * This handler gets a product by the ID.
   * @param {string} id the identifier of a customer's prodfile.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns a product objects.
   */
  async function getProduct(id: string): Promise<GetProductRespense> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/products${id}`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!r.ok) {
      const errors: GetProductRespense = {
        jsonapi: {
          version: '1.0'
        },
        errors: errorsTable[r.status]
      }
      return errors
    }

    return r.json() as Promise<GetProductRespense>;
  }

  /**
   * This handler gets a paginatated object of all your products.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns a set of `products` objects, ordered by created_at field in descending order.
   */
  async function getProducts(): Promise<GetProductsResponse> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/products`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!r.ok) {
      const errors: GetProductRespense = {
        jsonapi: {
          version: '1.0'
        },
        errors: errorsTable[r.status]
      }
      return errors
    }

    return r.json() as Promise<GetProductsResponse>;
  }

  /**
   * This handler gets a variant by the ID.
   * @param {string} id the identifier of a customer's prodfile.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns a product objects.
   */
  async function getVariant(id: string): Promise<GetVariantResponse> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/variants/${id}`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!r.ok) {
      const errors: GetProductRespense = {
        jsonapi: {
          version: '1.0'
        },
        errors: errorsTable[r.status]
      }
      return errors
    }

    return r.json() as Promise<GetVariantResponse>;
  }

  /**
   * This handler gets a paginatated object of all your products.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `variant` objects, ordered by created_at field in descending order.
   */
  async function getVariants(): Promise<GetVariantsResponse> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/variants`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!r.ok) {
      const errors: GetProductRespense = {
        jsonapi: {
          version: '1.0'
        },
        errors: errorsTable[r.status]
      }
      return errors
    }

    return r.json() as Promise<GetVariantsResponse>;
  }

  async function getFile(id: string): Promise<GetFileResponse> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/files/${id}`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!r.ok) {
      const errors: GetProductRespense = {
        jsonapi: {
          version: '1.0'
        },
        errors: errorsTable[r.status]
      }
      return errors
    }

    return r.json() as Promise<GetFileResponse>;
  }
  async function getFiles(): Promise<GetFilesResponse> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/files`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!r.ok) {
      const errors: GetFilesResponse = {
        jsonapi: {
          version: '1.0'
        },
        errors: errorsTable[r.status]
      }
      return errors
    }

    return r.json() as Promise<GetFilesResponse>;
  }
  async function getOrder(id: string): Promise<GetOrderResponse> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/orders/${id}`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!r.ok) {
      const errors: GetOrderResponse = {
        jsonapi: {
          version: '1.0'
        },
        errors: errorsTable[r.status]
      }
      return errors
    }

    return r.json() as Promise<GetOrderResponse>;
  }
  async function getOrders(): Promise<GetOrdersResponse> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/orders`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!r.ok) {
      const errors: GetOrdersResponse = {
        jsonapi: {
          version: '1.0'
        },
        errors: errorsTable[r.status]
      }
      return errors
    }

    return r.json() as Promise<GetOrdersResponse>;
  }
  async function getOrderItem(id: string): Promise<GetOrderItemResponse> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/order-items/${id}`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!r.ok) {
      const errors: GetOrderResponse = {
        jsonapi: {
          version: '1.0'
        },
        errors: errorsTable[r.status]
      }
      return errors
    }

    return r.json() as Promise<GetOrderItemResponse>;
  }

  async function getOrderItems(): Promise<GetOrderItemsResponse> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/order-items`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!r.ok) {
      const errors: GetOrderItemsResponse = {
        jsonapi: {
          version: '1.0'
        },
        errors: errorsTable[r.status]
      }
      return errors
    }

    return r.json() as Promise<GetOrderItemsResponse>;
  }

  async function updateSubscription(id: string): Promise<UpdateSubscriptionResponse> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/subscriptions/${id}`, {
      method: 'PATCH',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        'Authorization': `Bearer ${token}`
      }
    })

    if (!r.ok) {
      const errors: UpdateSubscriptionResponse = {
        jsonapi: {
          version: '1.0'
        },
        errors: errorsTable[r.status]
      }
      return errors
    }

    return r.json() as Promise<UpdateSubscriptionResponse>
  }
  async function getSubscription(id: string): Promise<GetSubscriptionResponse> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/subscriptions/${id}`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        'Authorization': `Bearer ${token}`
      }
    })

    if (!r.ok) {
      const errors: GetSubscriptionResponse = {
        jsonapi: {
          version: '1.0'
        },
        errors: errorsTable[r.status]
      }
      return errors
    }

    return r.json() as Promise<GetSubscriptionResponse>
  }
  async function getSubscriptions(): Promise<GetSubscriptionsResponse> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/subscriptions`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        'Authorization': `Bearer ${token}`
      }
    })

    if (!r.ok) {
      const errors: GetSubscriptionsResponse = {
        jsonapi: {
          version: '1.0'
        },
        errors: errorsTable[r.status]
      }
      return errors
    }

    return r.json() as Promise<GetSubscriptionsResponse>
  }

  async function cancelSubscription(id: string): Promise<CancelSubscriptionResponse> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/subscriptions/${id}`, {
      method: 'DELETE',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        'Authorization': `Bearer ${token}`
      }
    })

    if (!r.ok) {
      const errors: CancelSubscriptionResponse = {
        jsonapi: {
          version: '1.0'
        },
        errors: errorsTable[r.status]
      }
      return errors
    }

    return r.json() as Promise<CancelSubscriptionResponse>
  }
  async function getSubscriptionInvoice(id: string): Promise<GetSubscriptionInvoiceResponse> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/subscription-invoices/${id}`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        'Authorization': `Bearer ${token}`
      }
    })

    if (!r.ok) {
      const errors: GetSubscriptionInvoiceResponse = {
        jsonapi: {
          version: '1.0'
        },
        errors: errorsTable[r.status]
      }
      return errors
    }

    return r.json() as Promise<GetSubscriptionInvoiceResponse>
  }
  async function getSubscriptionInvoices(): Promise<GetSubscriptionInvoicesResponse> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/subscription-invoices`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        'Authorization': `Bearer ${token}`
      }
    })

    if (!r.ok) {
      const errors: GetSubscriptionInvoicesResponse = {
        jsonapi: {
          version: '1.0'
        },
        errors: errorsTable[r.status]
      }
      return errors
    }

    return r.json() as Promise<GetSubscriptionInvoicesResponse>
  }
  async function createDiscount(): Promise<CreateDiscountResponse> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/discounts`, {
      method: 'POST',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        'Authorization': `Bearer ${token}`
      }
    })

    if (!r.ok) {
      const errors: CreateDiscountResponse = {
        jsonapi: {
          version: '1.0'
        },
        errors: errorsTable[r.status]
      }
      return errors
    }

    return r.json() as Promise<CreateDiscountResponse>
  }
  async function getDiscount(id: string): Promise<GetDiscountResponse> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/discounts${id}`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        'Authorization': `Bearer ${token}`
      }
    })

    if (!r.ok) {
      const errors: GetDiscountResponse = {
        jsonapi: {
          version: '1.0'
        },
        errors: errorsTable[r.status]
      }
      return errors
    }

    return r.json() as Promise<GetDiscountResponse>
  }
  async function deleteDiscount(id: string): Promise<DeleteDiscountResponse> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/discounts${id}`, {
      method: 'DELETE',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        'Authorization': `Bearer ${token}`
      }
    })

    if (!r.ok) {
      const errors: GetDiscountResponse = {
        jsonapi: {
          version: '1.0'
        },
        errors: errorsTable[r.status]
      }
      return errors
    }

    return r.json() as Promise<GetDiscountResponse>
  }
  async function getDiscounts(): Promise<GetDiscountsResponse> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/discounts`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        'Authorization': `Bearer ${token}`
      }
    })

    if (!r.ok) {
      const errors: GetDiscountsResponse = {
        jsonapi: {
          version: '1.0'
        },
        errors: errorsTable[r.status]
      }
      return errors
    }

    return r.json() as Promise<GetDiscountsResponse>
  }

  async function getDiscountRedemption(id: string): Promise<GetDiscountRedemptionResponse> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/discount-redemptions/${id}`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        'Authorization': `Bearer ${token}`
      }
    })

    if (!r.ok) {
      const errors: GetDiscountRedemptionResponse = {
        jsonapi: {
          version: '1.0'
        },
        errors: errorsTable[r.status]
      }
      return errors
    }

    return r.json() as Promise<GetDiscountRedemptionResponse>
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
        getSubscriptionInvoice,
        getSubscriptionInvoices,
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
