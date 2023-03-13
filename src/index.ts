import { TMethods, TLmnsqzyFunctions } from './types';
import { constants } from './constants';
import fetch from 'node-fetch';
import { DiscountOptions } from './domains/discounts';

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
  async function getUser<T>(): Promise<T> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/users/me`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}s`,
      },
    });

    if (!r.ok) {
      const err = (await r.json()) as T;
      return err;
    }

    const data = (await r.json()) as T;

    console.log(data);

    return data;
  }

  /**
   * This handler gets a store by the ID.
   * @param {string} id the identifier of a store.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/stores
   * @returns a store object.
   */
  async function getStore<T>(id: string): Promise<T> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/stores/${id}`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!r.ok) {
      const err = (await r.json()) as T;
      return err;
    }

    const data = (await r.json()) as T;

    console.log(data);

    return data;
  }

  /**
   * This handler gets a paginatated object of all your stores.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/stores
   * @returns a set of `store` objects, ordered by name.
   */
  async function getStores<T>(): Promise<T> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/stores`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!r.ok) {
      const err = (await r.json()) as T;
      return err;
    }

    const data = (await r.json()) as T;

    console.log(data);

    return data;
  }

  /**
   * This handler gets a paginatated object of all your stores.
   * @param {string} id the identifier of a customer's prodfile.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a `customer` object.
   */
  async function getCustomer<T>(id: string): Promise<T> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/customers/${id}`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!r.ok) {
      const err = (await r.json()) as T;
      return err;
    }

    const data = (await r.json()) as T;

    console.log(data);

    return data;
  }

  /**
   * This handler gets a paginatated object of all your customers.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `customer` objects, ordered by created_at field in descending order.
   */
  async function getCustomers<T>(): Promise<T> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/customers`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!r.ok) {
      const err = (await r.json()) as T;
      return err;
    }

    const data = (await r.json()) as T;

    console.log(data);

    return data;
  }

  /**
   * This handler gets a product by the ID.
   * @param {string} id the identifier of a customer's prodfile.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns a product objects.
   */
  async function getProduct<T>(id: string): Promise<T> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/products${id}`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!r.ok) {
      const err = (await r.json()) as T;
      return err;
    }

    const data = (await r.json()) as T;

    console.log(data);

    return data;
  }

  /**
   * This handler gets a paginatated object of all your products.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns a set of `products` objects, ordered by created_at field in descending order.
   */
  async function getProducts<T>(): Promise<T> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/products`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!r.ok) {
      const err = (await r.json()) as T;
      return err;
    }

    const data = (await r.json()) as T;

    console.log(data);

    return data;
  }

  /**
   * This handler gets a variant by the ID.
   * @param {string} id the identifier of a customer's prodfile.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns a product objects.
   */
  async function getVariant<T>(id: string): Promise<T> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/variants/${id}`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!r.ok) {
      const err = (await r.json()) as T;
      return err;
    }

    const data = (await r.json()) as T;

    console.log(data);

    return data;
  }

  /**
   * This handler gets a paginatated object of all your products.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `variant` objects, ordered by created_at field in descending order.
   */
  async function getVariants<T>(): Promise<T> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/variants`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!r.ok) {
      const err = (await r.json()) as T;
      return err;
    }

    const data = (await r.json()) as T;

    console.log(data);

    return data;
  }

  /**
   * This handler gets a file by the ID.
   * @param {string} id the identifier of a file's profile.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns a product object.
   */
  async function getFile<T>(id: string): Promise<T> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/files/${id}`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!r.ok) {
      const err = (await r.json()) as T;
      return err;
    }

    const data = (await r.json()) as T;

    console.log(data);

    return data;
  }

  /**
   * This handler gets a paginatated object of all your files.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `file` objects, ordered by created_at field in descending order.
   */
  async function getFiles<T>(): Promise<T> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/files`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!r.ok) {
      const err = (await r.json()) as T;
      return err;
    }

    const data = (await r.json()) as T;

    console.log(data);

    return data;
  }

  /**
   * This handler gets an order by the ID.
   * @param {string} id the identifier of an order.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns an `order` object.
   */
  async function getOrder<T>(id: string): Promise<T> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/orders/${id}`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!r.ok) {
      const err = (await r.json()) as T;
      return err;
    }

    const data = (await r.json()) as T;

    console.log(data);

    return data;
  }

  /**
   * This handler gets a paginatated object of all your orders.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `order` objects, ordered by created_at field in descending order.
   */
  async function getOrders<T>(): Promise<T> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/orders`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!r.ok) {
      const err = (await r.json()) as T;
      return err;
    }

    const data = (await r.json()) as T;

    console.log(data);

    return data;
  }

  /**
   * This handler gets an order item by the ID.
   * @param {string} id the identifier of an order item.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns an `order item` object.
   */
  async function getOrderItem<T>(id: string): Promise<T> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/order-items/${id}`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!r.ok) {
      const err = (await r.json()) as T;
      return err;
    }

    const data = (await r.json()) as T;

    console.log(data);

    return data;
  }

  /**
   * This handler gets a paginatated object of all your order items.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `order item` objects, ordered by created_at field in descending order.
   */
  async function getOrderItems<T>(): Promise<T> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/order-items`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!r.ok) {
      const err = (await r.json()) as T;
      return err;
    }

    const data = (await r.json()) as T;

    console.log(data);

    return data;
  }

  /**
   * This handler updates a subscription by the ID.
   * @param {string} id the identifier of a subscription.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns an `order item` object.
   */
  async function updateSubscription<T>(id: string): Promise<T> {
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
      const err = (await r.json()) as T;
      return err;
    }

    const data = (await r.json()) as T;

    console.log(data);

    return data;
  }

  /**
   * This handler gets a subscription by the ID.
   * @param {string} id the identifier of a subscription.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns an `subscription` object.
   */
  async function getSubscription<T>(id: string): Promise<T> {
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
      const err = (await r.json()) as T;
      return err;
    }

    const data = (await r.json()) as T;

    console.log(data);

    return data;
  }

  /**
   * This handler gets a paginatated object of all your subscriptions.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `subscription` objects, ordered by created_at field in descending order.
   */
  async function getSubscriptions<T>(): Promise<T> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/subscriptions`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!r.ok) {
      const err = (await r.json()) as T;
      return err;
    }

    const data = (await r.json()) as T;

    console.log(data);

    return data;
  }

  /**
   * This handler cancels a subscription by the ID.
   * @param {string} id the identifier of a subscription.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns an `order item` object.
   */
  async function cancelSubscription<T>(id: string): Promise<T> {
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
      const err = (await r.json()) as T;
      return err;
    }

    const data = (await r.json()) as T;

    console.log(data);

    return data;
  }

  /**
   * This handler gets a subscription invoice by the ID.
   * @param {string} id the identifier of a subscription invoice.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns an `subscription invoice` object.
   */
  async function getSubscriptionInvoice<T>(id: string): Promise<T> {
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
      const err = (await r.json()) as T;
      return err;
    }

    const data = (await r.json()) as T;

    console.log(data);

    return data;
  }

  /**
   * This handler gets a paginatated object of all your subscription invoices.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `subscription invoices` objects, ordered by created_at field in descending order.
   */
  async function getSubscriptionInvoices<T>(): Promise<T> {
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
      const err = (await r.json()) as T;
      return err;
    }

    const data = (await r.json()) as T;

    console.log(data);

    return data;
  }

  /**
   * This handler creates a custom checkout.
   * @param {options} DiscountOptions the configurations for the custome checkout page.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns a `checkout` object.
   */
  async function createDiscount<T>(options: DiscountOptions): Promise<T> {
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
      const err = (await r.json()) as T;
      return err;
    }

    const data = (await r.json()) as T;

    console.log(data);

    return data;
  }

  /**
   * This handler gets a discount by the ID.
   * @param {string} id the identifier of a discount.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns a `discount` object.
   */
  async function getDiscount<T>(id: string): Promise<T> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/discounts${id}`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!r.ok) {
      const err = (await r.json()) as T;
      return err;
    }

    const data = (await r.json()) as T;

    console.log(data);

    return data;
  }

  /**
   * This handler deletes a discount by the ID.
   * @param {string} id the identifier of a discount.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns an `order item` object.
   */
  async function deleteDiscount<T>(id: string): Promise<T> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/discounts${id}`, {
      method: 'DELETE',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!r.ok) {
      const err = (await r.json()) as T;
      return err;
    }

    const data = (await r.json()) as T;

    console.log(data);

    return data;
  }

  /**
   * This handler gets a paginatated object of all your discounts.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `discounts` objects, ordered by created_at field in descending order.
   */
  async function getDiscounts<T>(): Promise<T> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/discounts`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!r.ok) {
      const err = (await r.json()) as T;
      return err;
    }

    const data = (await r.json()) as T;

    console.log(data);

    return data;
  }

  /**
   * This handler gets a discount redemption by the ID.
   * @param {string} id the identifier of a discount redemption.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns an `discount redemption` object.
   */
  async function getDiscountRedemption<T>(id: string): Promise<T> {
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
      const err = (await r.json()) as T;
      return err;
    }

    const data = (await r.json()) as T;

    console.log(data);

    return data;
  }

  /**
   * This handler gets a paginatated object of all your discount redemptions.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `discount redemptions` objects, ordered by created_at field in descending order.
   */
  async function getDiscountRedemptions<T>(): Promise<T> {
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
      const err = (await r.json()) as T;
      return err;
    }

    const data = (await r.json()) as T;

    console.log(data);

    return data;
  }

  /**
   * This handler gets a license key by the ID.
   * @param {string} id the identifier of a license key.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns an `discount redemption` object.
   */
  async function getLicenseKey<T>(id: string): Promise<T> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/license-keys/${id}`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!r.ok) {
      const err = (await r.json()) as T;
      return err;
    }

    const data = (await r.json()) as T;

    console.log(data);

    return data;
  }

  /**
   * This handler gets a paginatated object of all your license keys.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `discount redemptions` objects, ordered by created_at field in descending order.
   */
  async function getLicenseKeys<T>(): Promise<T> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/license-keys`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!r.ok) {
      const err = (await r.json()) as T;
      return err;
    }

    const data = (await r.json()) as T;

    console.log(data);

    return data;
  }

  /**
   * This handler gets a license key instance by the ID.
   * @param {string} id the identifier of a license key instance.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns a `license key instance` object.
   */
  async function getLicenseKeyInstance<T>(id: string): Promise<T> {
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
      const err = (await r.json()) as T;
      return err;
    }

    const data = (await r.json()) as T;

    console.log(data);

    return data;
  }

  /**
   * This handler gets a paginatated object of all your license key instances.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `license key instances` objects, ordered by created_at field in descending order.
   */
  async function getLicenseKeyInstances<T>(): Promise<T> {
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
      const err = (await r.json()) as T;
      return err;
    }

    const data = (await r.json()) as T;

    console.log(data);

    return data;
  }

  /**
   * This handler creates a custom checkout.
   * @param {option} CheckoutOptions the configurations for the custome checkout page.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns a `checkout` object.
   */
  async function createCheckout<T>(): Promise<T> {
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
      const err = (await r.json()) as T;
      return err;
    }

    const data = (await r.json()) as T;

    console.log(data);

    return data;
  }

  /**
   * This handler gets a checkout by the ID.
   * @param {string} id the identifier of a checkout.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns a `checkout` object.
   */
  async function getCheckout<T>(id: string): Promise<T> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/checkouts/${id}`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!r.ok) {
      const err = (await r.json()) as T;
      return err;
    }

    const data = (await r.json()) as T;

    console.log(data);

    return data;
  }

  /**
   * This handler gets a paginatated object of all your custom checkouts.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `checkouts` objects, ordered by created_at field in descending order.
   */
  async function getCheckouts<T>(): Promise<T> {
    let r = await fetch(`${constants.LMNSQZY_BASE_URL}/v1/checkouts`, {
      method: 'GET',
      headers: {
        ...constants.LMNSQZY_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!r.ok) {
      const err = (await r.json()) as T;
      return err;
    }

    const data = (await r.json()) as T;

    console.log(data);

    return data;
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
