import {
  CheckoutOptions,
  CreateCheckoutResponse,
  GetCheckoutResponse,
  GetCheckoutsResponse,
} from './domains/checkouts';
import { GetCustomerResponse, GetCustomersResponse } from './domains/customers';
import {
  GetDiscountRedemptionResponse,
  GetDiscountRedemptionsResponse,
} from './domains/discount-redemptions';
import {
  CreateDiscountResponse,
  DeleteDiscountResponse,
  DiscountOptions,
  GetDiscountResponse,
  GetDiscountsResponse,
} from './domains/discounts';
import { GetFileResponse, GetFilesResponse } from './domains/files';
import {
  GetLicenseKeyInstanceResponse,
  GetLicenseKeyInstancesResponse,
} from './domains/license-key-instances';
import {
  GetLicenseKeyResponse,
  GetLicenseKeysResponse,
} from './domains/license-keys';
import {
  GetOrderItemResponse,
  GetOrderItemsResponse,
} from './domains/order-items';
import { GetOrderResponse, GetOrdersResponse } from './domains/orders';
import { GetProductRespense, GetProductsResponse } from './domains/products';
import { GetStoreResponse, GetStoresResponse } from './domains/stores';
import {
  GetSubscriptionInvoiceResponse,
  GetSubscriptionInvoicesResponse,
} from './domains/subscription-invoices';
import {
  CancelSubscriptionResponse,
  GetSubscriptionResponse,
  GetSubscriptionsResponse,
  UpdateSubscriptionResponse,
} from './domains/subscriptions';
import { GetVariantResponse, GetVariantsResponse } from './domains/variants';

export type TMethods = {
  /**
   * This handler gets the currently authenticated user.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/users
   * @returns a user object.
   */
  getUser<R>(): Promise<R>;

  /**
   * This handler gets a store by the ID.
   * @param {string} id the identifier of a store.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/stores
   * @returns a store object.
   */
  getStore<R>(id: string): Promise<R>;

  /**
   * This handler gets a paginatated object of all your stores.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/stores
   * @returns a set of `store` objects, ordered by name.
   */
  getStores<R>(): Promise<R>;

  /**
   * This handler gets a paginatated object of all your stores.
   * @param {string} id the identifier of a customer's profile.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a `customer` object.
   */
  getCustomer<R>(id: string): Promise<R>;

  /**
   * This handler gets a paginatated object of all your customers.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `customer` objects, ordered by created_at field in descending order.
   */
  getCustomers<R>(): Promise<R>;

  /**
   * This handler gets a product by the ID.
   * @param {string} id the identifier of a product.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns a product objects.
   */
  getProduct<R>(id: string): Promise<R>;

  /**
   * This handler gets a paginatated object of all your products.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns a set of `products` objects, ordered by created_at field in descending order.
   */
  getProducts<R>(): Promise<R>;

  /**
   * This handler gets a variant by the ID.
   * @param {string} id the identifier of a product's variant.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns a product objects.
   */
  getVariant<R>(id: string): Promise<R>;

  /**
   * This handler gets a paginatated object of all your products.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `variant` objects, ordered by created_at field in descending order.
   */
  getVariants<R>(): Promise<R>;

  /**
   * This handler gets a file by the ID.
   * @param {string} id the identifier of a file's profile.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns a product object.
   */
  getFile<R>(id: string): Promise<R>;

  /**
   * This handler gets a paginatated object of all your files.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `file` objects, ordered by created_at field in descending order.
   */
  getFiles<R>(): Promise<R>;

  /**
   * This handler gets an order by the ID.
   * @param {string} id the identifier of an order.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns an `order` object.
   */
  getOrder<R>(id: string): Promise<R>;

  /**
   * This handler gets a paginatated object of all your orders.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `order` objects, ordered by created_at field in descending order.
   */
  getOrders<R>(): Promise<R>;

  /**
   * This handler gets an order item by the ID.
   * @param {string} id the identifier of an order item.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns an `order item` object.
   */
  getOrderItem<R>(id: string): Promise<R>;

  /**
   * This handler gets a paginatated object of all your order items.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `order item` objects, ordered by created_at field in descending order.
   */
  getOrderItems<R>(): Promise<R>;

  /**
   * This handler updates a subscription by the ID.
   * @param {string} id the identifier of a subscription.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns an `order item` object.
   */
  updateSubscription<R>(id: string): Promise<R>;

  /**
   * This handler gets a subscription by the ID.
   * @param {string} id the identifier of a subscription.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns an `subscription` object.
   */
  getSubscription<R>(id: string): Promise<R>;

  /**
   * This handler gets a paginatated object of all your subscriptions.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `subscription` objects, ordered by created_at field in descending order.
   */
  getSubscriptions<R>(): Promise<R>;

  /**
   * This handler cancels a subscription by the ID.
   * @param {string} id the identifier of a subscription.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns an `order item` object.
   */
  cancelSubscription<R>(id: string): Promise<R>;

  /**
   * This handler gets a subscription invoice by the ID.
   * @param {string} id the identifier of a subscription invoice.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns an `subscription invoice` object.
   */
  getSubscriptionInvoice<R>(id: string): Promise<R>;

  /**
   * This handler gets a paginatated object of all your subscription invoices.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `subscription invoices` objects, ordered by created_at field in descending order.
   */
  getSubscriptionInvoices<R>(): Promise<R>;

  /**
   * This handler creates a custom checkout.
   * @param {options} CheckoutOptions the configurations for the custome checkout page.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns a `checkout` object.
   */
  createDiscount<R>(options: DiscountOptions): Promise<R>;

  /**
   * This handler gets a discount by the ID.
   * @param {string} id the identifier of a discount.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns a `discount` object.
   */
  getDiscount<R>(id: string): Promise<R>;

  /**
   * This handler deletes a discount by the ID.
   * @param {string} id the identifier of a discount.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns an `discount` object.
   */
  deleteDiscount<R>(id: string): Promise<R>;

  /**
   * This handler gets a paginatated object of all your discounts.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `discounts` objects, ordered by created_at field in descending order.
   */
  getDiscounts<R>(): Promise<R>;

  /**
   * This handler gets a discount redemption by the ID.
   * @param {string} id the identifier of a discount redemption.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns an `discount redemption` object.
   */
  getDiscountRedemption<R>(id: string): Promise<R>;

  /**
   * This handler gets a paginatated object of all your discount redemptions.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `discount redemptions` objects, ordered by created_at field in descending order.
   */
  getDiscountRedemptions<R>(): Promise<R>;

  /**
   * This handler gets a license key by the ID.
   * @param {string} id the identifier of a license key.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns an `discount redemption` object.
   */
  getLicenseKey<R>(id: string): Promise<R>;

  /**
   * This handler gets a paginatated object of all your license keys.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `discount redemptions` objects, ordered by created_at field in descending order.
   */
  getLicenseKeys<R>(): Promise<R>;

  /**
   * This handler gets a license key instance by the ID.
   * @param {string} id the identifier of a license key instance.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns a `license key instance` object.
   */
  getLicenseKeyInstance<R>(id: string): Promise<R>;

  /**
   * This handler gets a paginatated object of all your license key instances.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `license key instances` objects, ordered by created_at field in descending order.
   */
  getLicenseKeyInstances<R>(): Promise<R>;

  /**
   * This handler creates a custom checkout.
   * @param {option} CheckoutOptions the configurations for the custome checkout page.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns a `checkout` object.
   */
  createCheckout<R>(options: CheckoutOptions): Promise<R>;

  /**
   * This handler gets a checkout by the ID.
   * @param {string} id the identifier of a checkout.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns a `checkout` object.
   */
  getCheckout(id: string): Promise<GetCheckoutResponse>;

  /**
   * This handler gets a paginatated object of all your custom checkouts.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `checkouts` objects, ordered by created_at field in descending order.
   */
  getCheckouts: () => Promise<GetCheckoutsResponse>;
};

export type TLmnsqzyFunctions = {
  /**
   * a collection of handlers to interact with the LMNSQZY API
   */
  lmnsqzy: () => TMethods;
  /**
   * a dummy string for showing that it works.
   */
  doesWork: () => string;
};
