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
import {
  GetOrderItemResponse,
  GetOrderItemsResponse,
} from './domains/order-items';
import {
  CancelSubscriptionResponse,
  GetSubscriptionResponse,
  GetSubscriptionsResponse,
  UpdateSubscriptionResponse,
} from './domains/subscriptions';
import {
  GetSubscriptionInvoiceResponse,
  GetSubscriptionInvoicesResponse,
} from './domains/subscription-invoices';
import {
  CreateDiscountResponse,
  DeleteDiscountResponse,
  DiscountOptions,
  GetDiscountResponse,
  GetDiscountsResponse,
} from './domains/discounts';
import {
  GetDiscountRedemptionResponse,
  GetDiscountRedemptionsResponse,
} from './domains/discount-redemptions';
import {
  GetLicenseKeyResponse,
  GetLicenseKeysResponse,
} from './domains/license-keys';
import {
  GetLicenseKeyInstanceResponse,
  GetLicenseKeyInstancesResponse,
} from './domains/license-key-instances';
import {
  CheckoutOptions,
  CreateCheckoutResponse,
  GetCheckoutResponse,
  GetCheckoutsResponse,
} from './domains/checkouts';

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
      const err = (await r.json()) as LmnsqzyError;
      return err;
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
      const errors: GetStoreResponse = {
        jsonapi: {
          version: '1.0',
        },
        errors: errorsTable[r.status],
      };
      return errors;
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
      const errors: GetCustomerResponse = {
        jsonapi: {
          version: '1.0',
        },
        errors: errorsTable[r.status],
      };
      return errors;
    }

    return r.json() as Promise<GetCustomerResponse>;
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
          version: '1.0',
        },
        errors: errorsTable[r.status],
      };
      return errors;
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
      const errors: GetProductsResponse = {
        jsonapi: {
          version: '1.0',
        },
        errors: errorsTable[r.status],
      };
      return errors;
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
      const errors: GetVariantResponse = {
        jsonapi: {
          version: '1.0',
        },
        errors: errorsTable[r.status],
      };
      return errors;
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
      const errors: GetVariantsResponse = {
        jsonapi: {
          version: '1.0',
        },
        errors: errorsTable[r.status],
      };
      return errors;
    }

    return r.json() as Promise<GetVariantsResponse>;
  }

  /**
   * This handler gets a file by the ID.
   * @param {string} id the identifier of a file's profile.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns a product object.
   */
  async function getFile(id: string): Promise<GetFileResponse> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/files/${id}`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!r.ok) {
      const errors: GetFileResponse = {
        jsonapi: {
          version: '1.0',
        },
        errors: errorsTable[r.status],
      };
      return errors;
    }

    return r.json() as Promise<GetFileResponse>;
  }

  /**
   * This handler gets a paginatated object of all your files.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `file` objects, ordered by created_at field in descending order.
   */
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
          version: '1.0',
        },
        errors: errorsTable[r.status],
      };
      return errors;
    }

    return r.json() as Promise<GetFilesResponse>;
  }

  /**
   * This handler gets an order by the ID.
   * @param {string} id the identifier of an order.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns an `order` object.
   */
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
          version: '1.0',
        },
        errors: errorsTable[r.status],
      };
      return errors;
    }

    return r.json() as Promise<GetOrderResponse>;
  }

  /**
   * This handler gets a paginatated object of all your orders.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `order` objects, ordered by created_at field in descending order.
   */
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
          version: '1.0',
        },
        errors: errorsTable[r.status],
      };
      return errors;
    }

    return r.json() as Promise<GetOrdersResponse>;
  }

  /**
   * This handler gets an order item by the ID.
   * @param {string} id the identifier of an order item.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns an `order item` object.
   */
  async function getOrderItem(id: string): Promise<GetOrderItemResponse> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/order-items/${id}`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!r.ok) {
      const errors: GetOrderItemResponse = {
        jsonapi: {
          version: '1.0',
        },
        errors: errorsTable[r.status],
      };
      return errors;
    }

    return r.json() as Promise<GetOrderItemResponse>;
  }

  /**
   * This handler gets a paginatated object of all your order items.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `order item` objects, ordered by created_at field in descending order.
   */
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
          version: '1.0',
        },
        errors: errorsTable[r.status],
      };
      return errors;
    }

    return r.json() as Promise<GetOrderItemsResponse>;
  }

  /**
   * This handler updates a subscription by the ID.
   * @param {string} id the identifier of a subscription.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns an `order item` object.
   */
  async function updateSubscription(
    id: string
  ): Promise<UpdateSubscriptionResponse> {
    let r = await fetch(
      `${constants.LMNSQZY_BASE_URL}/v1/subscriptions/${id}`,
      {
        method: 'PATCH',
        headers: {
          ...constants.LMNSQZY_HEADERS,
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!r.ok) {
      const errors: UpdateSubscriptionResponse = {
        jsonapi: {
          version: '1.0',
        },
        errors: errorsTable[r.status],
      };
      return errors;
    }

    return r.json() as Promise<UpdateSubscriptionResponse>;
  }

  /**
   * This handler gets a subscription by the ID.
   * @param {string} id the identifier of a subscription.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns an `subscription` object.
   */
  async function getSubscription(id: string): Promise<GetSubscriptionResponse> {
    let r = await fetch(
      `${constants.LMNSQZY_BASE_URL}/v1/subscriptions/${id}`,
      {
        method: 'GET',
        headers: {
          ...constants.LMNSQZY_HEADERS,
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!r.ok) {
      const errors: GetSubscriptionResponse = {
        jsonapi: {
          version: '1.0',
        },
        errors: errorsTable[r.status],
      };
      return errors;
    }

    return r.json() as Promise<GetSubscriptionResponse>;
  }

  /**
   * This handler gets a paginatated object of all your subscriptions.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `subscription` objects, ordered by created_at field in descending order.
   */
  async function getSubscriptions(): Promise<GetSubscriptionsResponse> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/subscriptions`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!r.ok) {
      const errors: GetSubscriptionsResponse = {
        jsonapi: {
          version: '1.0',
        },
        errors: errorsTable[r.status],
      };
      return errors;
    }

    return r.json() as Promise<GetSubscriptionsResponse>;
  }

  /**
   * This handler cancels a subscription by the ID.
   * @param {string} id the identifier of a subscription.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns an `order item` object.
   */
  async function cancelSubscription(
    id: string
  ): Promise<CancelSubscriptionResponse> {
    let r = await fetch(
      `${constants.LMNSQZY_BASE_URL}/v1/subscriptions/${id}`,
      {
        method: 'DELETE',
        headers: {
          ...constants.LMNSQZY_HEADERS,
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!r.ok) {
      const errors: CancelSubscriptionResponse = {
        jsonapi: {
          version: '1.0',
        },
        errors: errorsTable[r.status],
      };
      return errors;
    }

    return r.json() as Promise<CancelSubscriptionResponse>;
  }

  /**
   * This handler gets a subscription invoice by the ID.
   * @param {string} id the identifier of a subscription invoice.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns an `subscription invoice` object.
   */
  async function getSubscriptionInvoice(
    id: string
  ): Promise<GetSubscriptionInvoiceResponse> {
    let r = await fetch(
      `${constants.LMNSQZY_BASE_URL}/v1/subscription-invoices/${id}`,
      {
        method: 'GET',
        headers: {
          ...constants.LMNSQZY_HEADERS,
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!r.ok) {
      const errors: GetSubscriptionInvoiceResponse = {
        jsonapi: {
          version: '1.0',
        },
        errors: errorsTable[r.status],
      };
      return errors;
    }

    return r.json() as Promise<GetSubscriptionInvoiceResponse>;
  }

  /**
   * This handler gets a paginatated object of all your subscription invoices.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `subscription invoices` objects, ordered by created_at field in descending order.
   */
  async function getSubscriptionInvoices(): Promise<
    GetSubscriptionInvoicesResponse
  > {
    let r = await fetch(
      `${constants.LMNSQZY_BASE_URL}/v1/subscription-invoices`,
      {
        method: 'GET',
        headers: {
          ...constants.LMNSQZY_HEADERS,
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!r.ok) {
      const errors: GetSubscriptionInvoicesResponse = {
        jsonapi: {
          version: '1.0',
        },
        errors: errorsTable[r.status],
      };
      return errors;
    }

    return r.json() as Promise<GetSubscriptionInvoicesResponse>;
  }

  /**
   * This handler creates a custom checkout.
   * @param {options} DiscountOptions the configurations for the custome checkout page.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns a `checkout` object.
   */
  async function createDiscount(
    options: DiscountOptions
  ): Promise<CreateDiscountResponse> {
    let b = {
      data: {
        type: 'discounts',
        attributes: {
          name: options.name,
          code: options.code,
          amount: options.amount,
          amount_type: options.amount_type,
        },
        relationships: {
          store: {
            data: {
              type: 'stores',
              id: options.store_id,
            },
          },
        },
      },
    };
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/discounts`, {
      method: 'POST',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(b),
    });

    if (!r.ok) {
      const errors: CreateDiscountResponse = {
        jsonapi: {
          version: '1.0',
        },
        errors: errorsTable[r.status],
      };
      return errors;
    }

    return r.json() as Promise<CreateDiscountResponse>;
  }

  /**
   * This handler gets a discount by the ID.
   * @param {string} id the identifier of a discount.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns a `discount` object.
   */
  async function getDiscount(id: string): Promise<GetDiscountResponse> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/discounts${id}`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!r.ok) {
      const errors: GetDiscountResponse = {
        jsonapi: {
          version: '1.0',
        },
        errors: errorsTable[r.status],
      };
      return errors;
    }

    return r.json() as Promise<GetDiscountResponse>;
  }

  /**
   * This handler deletes a discount by the ID.
   * @param {string} id the identifier of a discount.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns an `order item` object.
   */
  async function deleteDiscount(id: string): Promise<DeleteDiscountResponse> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/discounts${id}`, {
      method: 'DELETE',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!r.ok) {
      const errors: GetDiscountResponse = {
        jsonapi: {
          version: '1.0',
        },
        errors: errorsTable[r.status],
      };
      return errors;
    }

    return r.json() as Promise<GetDiscountResponse>;
  }

  /**
   * This handler gets a paginatated object of all your discounts.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `discounts` objects, ordered by created_at field in descending order.
   */
  async function getDiscounts(): Promise<GetDiscountsResponse> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/discounts`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!r.ok) {
      const errors: GetDiscountsResponse = {
        jsonapi: {
          version: '1.0',
        },
        errors: errorsTable[r.status],
      };
      return errors;
    }

    return r.json() as Promise<GetDiscountsResponse>;
  }

  /**
   * This handler gets a discount redemption by the ID.
   * @param {string} id the identifier of a discount redemption.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns an `discount redemption` object.
   */
  async function getDiscountRedemption(
    id: string
  ): Promise<GetDiscountRedemptionResponse> {
    let r = await fetch(
      `${constants.LMNSQZY_BASE_URL}/v1/discount-redemptions/${id}`,
      {
        method: 'GET',
        headers: {
          ...constants.LMNSQZY_HEADERS,
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!r.ok) {
      const errors: GetDiscountRedemptionResponse = {
        jsonapi: {
          version: '1.0',
        },
        errors: errorsTable[r.status],
      };
      return errors;
    }

    return r.json() as Promise<GetDiscountRedemptionResponse>;
  }

  /**
   * This handler gets a paginatated object of all your discount redemptions.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `discount redemptions` objects, ordered by created_at field in descending order.
   */
  async function getDiscountRedemptions(): Promise<
    GetDiscountRedemptionsResponse
  > {
    let r = await fetch(
      `${constants.LMNSQZY_BASE_URL}/v1/discount-redemptions`,
      {
        method: 'GET',
        headers: {
          ...constants.LMNSQZY_HEADERS,
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!r.ok) {
      const errors: GetDiscountRedemptionsResponse = {
        jsonapi: {
          version: '1.0',
        },
        errors: errorsTable[r.status],
      };
      return errors;
    }

    return r.json() as Promise<GetDiscountRedemptionsResponse>;
  }

  /**
   * This handler gets a license key by the ID.
   * @param {string} id the identifier of a license key.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns an `discount redemption` object.
   */
  async function getLicenseKey(id: string): Promise<GetLicenseKeyResponse> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/license-keys/${id}`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!r.ok) {
      const errors: GetLicenseKeyResponse = {
        jsonapi: {
          version: '1.0',
        },
        errors: errorsTable[r.status],
      };
      return errors;
    }

    return r.json() as Promise<GetLicenseKeyResponse>;
  }

  /**
   * This handler gets a paginatated object of all your license keys.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `discount redemptions` objects, ordered by created_at field in descending order.
   */
  async function getLicenseKeys(): Promise<GetLicenseKeysResponse> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/license-keys`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!r.ok) {
      const errors: GetLicenseKeyResponse = {
        jsonapi: {
          version: '1.0',
        },
        errors: errorsTable[r.status],
      };
      return errors;
    }

    return r.json() as Promise<GetLicenseKeyResponse>;
  }

  /**
   * This handler gets a license key instance by the ID.
   * @param {string} id the identifier of a license key instance.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns a `license key instance` object.
   */
  async function getLicenseKeyInstance(
    id: string
  ): Promise<GetLicenseKeyInstanceResponse> {
    let r = await fetch(
      `${constants.LMNSQZY_BASE_URL}/v1/license-key-instances/${id}`,
      {
        method: 'GET',
        headers: {
          ...constants.LMNSQZY_HEADERS,
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!r.ok) {
      const errors: GetLicenseKeyInstanceResponse = {
        jsonapi: {
          version: '1.0',
        },
        errors: errorsTable[r.status],
      };
      return errors;
    }

    return r.json() as Promise<GetLicenseKeyInstanceResponse>;
  }

  /**
   * This handler gets a paginatated object of all your license key instances.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `license key instances` objects, ordered by created_at field in descending order.
   */
  async function getLicenseKeyInstances(): Promise<
    GetLicenseKeyInstancesResponse
  > {
    let r = await fetch(
      `${constants.LMNSQZY_BASE_URL}/v1/license-key-instances`,
      {
        method: 'GET',
        headers: {
          ...constants.LMNSQZY_HEADERS,
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!r.ok) {
      const errors: GetLicenseKeyInstancesResponse = {
        jsonapi: {
          version: '1.0',
        },
        errors: errorsTable[r.status],
      };
      return errors;
    }

    return r.json() as Promise<GetLicenseKeyInstancesResponse>;
  }

  /**
   * This handler creates a custom checkout.
   * @param {option} CheckoutOptions the configurations for the custome checkout page.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns a `checkout` object.
   */
  async function createCheckout(
  ): Promise<CreateCheckoutResponse> {
    let b = {};
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/checkouts`, {
      method: 'POST',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(b),
    });

    if (!r.ok) {
      const errors: CreateCheckoutResponse = {
        jsonapi: {
          version: '1.0',
        },
        errors: errorsTable[r.status],
      };
      return errors;
    }

    return r.json() as Promise<CreateCheckoutResponse>;
  }

  /**
   * This handler gets a checkout by the ID.
   * @param {string} id the identifier of a checkout.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns a `checkout` object.
   */
  async function getCheckout(id: string): Promise<GetCheckoutResponse> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/checkouts/${id}`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!r.ok) {
      const errors: GetCheckoutResponse = {
        jsonapi: {
          version: '1.0',
        },
        errors: errorsTable[r.status],
      };
      return errors;
    }

    return r.json() as Promise<GetCheckoutResponse>;
  }

  /**
   * This handler gets a paginatated object of all your custom checkouts.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `checkouts` objects, ordered by created_at field in descending order.
   */
  async function getCheckouts(): Promise<GetCheckoutsResponse> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/checkouts`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!r.ok) {
      const errors: GetCheckoutsResponse = {
        jsonapi: {
          version: '1.0',
        },
        errors: errorsTable[r.status],
      };
      return errors;
    }

    return r.json() as Promise<GetCheckoutsResponse>;
  }

  const lmnsqzy = (): TMethods => ({
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
  });

  return {
    doesWork: () => 'it works!',
    lmnsqzy,
  };
};
