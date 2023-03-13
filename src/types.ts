import { GetCustomerResponse, GetCustomersResponse } from './domains/customers';
import { GetFileResponse, GetFilesResponse } from './domains/files';
import { GetOrderItemResponse, GetOrderItemsResponse } from './domains/order-items';
import { GetOrderResponse, GetOrdersResponse } from './domains/orders';
import { GetProductRespense, GetProductsResponse } from './domains/products';
import { GetStoreResponse, GetStoresResponse } from './domains/stores';
import { GetSubscription, UpdateSubscription } from './domains/subscriptions';
import { GetUserResponse } from './domains/users';
import { GetVariantResponse, GetVariantsResponse } from './domains/variants';

export type TMethods = {
  /**
   *
   * @returns the currently authenticated user.
   */
  getUser(): Promise<GetUserResponse>;

  /**
   * @returns a store based on the given ID.
   */
  getStore(z: string): Promise<GetStoreResponse>;

  /**
   * @returns a paginated list of stores.
   */
  getStores(): Promise<GetStoresResponse>;

  /**
   * 
   * @param {string} z 
   * @returns an object with the details of a customer based on the ID
   */
  getCustomer(z: string) : Promise<GetCustomerResponse>;

  /**
   * @returns a paginated list of customers.
   */
  getCustomers(): Promise<GetCustomersResponse>;
  /**
   * 
   * @param {string} z 
   * @returns an object with the details of a product based on the ID
   */
  getProduct(z: string): Promise<GetProductRespense>;

  /**
   * @returns a paginated list of products.
   */
  getProducts(): Promise<GetProductsResponse>;
  // Variants
  getVariant(id: string): Promise<GetVariantResponse>;

  /**
   * @returns a paginated list of variants.
   */
  getVariants(): Promise<GetVariantsResponse>;
  // Files
  getFile(id: string): Promise<GetFileResponse>;

  /**
   * @returns a paginated list of files.
   */
  getFiles(): Promise<GetFilesResponse>;
  // Orders
  getOrder(id: string): Promise<GetOrderResponse>;

  /**
   * @returns a paginated list of order.
   */
  getOrders(): Promise<GetOrdersResponse>;
  // Order Items
  getOrderItem(id: string): Promise<GetOrderItemResponse>;

  /**
   * @returns a paginated list of order items.
   */
  getOrderItems(): Promise<GetOrderItemsResponse>;

  updateSubscription(id: string): Promise<UpdateSubscription>;
  getSubscription(id: string): Promise<GetSubscription>;

  /**
   * @returns a paginated list of subscriptions.
   */
  getSubscriptions(): Promise<string>;
  cancelSubscription(): Promise<string>;

  getSubscriptionsInvoice(): Promise<string>;
  /**
   * @returns a paginated list of order items.
   */
  getSubscriptionsInvoices(): Promise<string>;
  // Discounts
  createDiscount(): Promise<string>;
  getDiscount(): Promise<string>;
  deleteDiscount(): Promise<string>;

  /**
   * @returns a paginated list of discounts.
   */
  getDiscounts(): Promise<string>;
  // Discount Redemptions
  getDiscountRedemption(): Promise<string>;

  /**
   * @returns a paginated list of discount redemptions.
   */
  getDiscountRedemptions(): Promise<string>;
  // License Keys
  getLicenseKey(): Promise<string>;

  /**
   * @returns a paginated list of license keys.
   */
  getLicenseKeys(): Promise<string>;
  // License Keys Instances
  getLicenseKeyInstance(): Promise<string>;

  /**
   * @returns a paginated list of license key instances.
   */
  getLicenseKeyInstances(): Promise<string>;
  // Checkouts
  createCheckout(): Promise<string>;
  getCheckout(): Promise<string>;

  /**
   * @returns a paginated list of checkouts.
   */
  getCheckouts(): Promise<string>;
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
