import { ILmnsqzyResponse, IGetUser, IError } from './interfaces';
// desired input for each handler

export type TMethods = {
    /**
     * 
     * @returns the currently authenticated user.
     */
    getUser(): Promise<GetUseResponse>
    // Stores
    getStore: () => ``
    getStores: () => ``
    // Customers
    getCustomer: () => ``
    getCustomers: () => ``
    // Products
    getProduct: () => ``
    getProducts: () => ``
    // Variants
    getVariant: () => ``
    getVariants: () => ``
    // Files
    getFile: () => ``
    getFiles: () => ``
    // Orders
    getOrder: () => ``
    getOrders: () => ``
    // Order Items
    getOrderItem: () => ``
    getOrderItems: () => ``
    // Subscriptions
    updateSubscription: () => ``
    getSubscription: () => ``
    getSubscriptions: () => ``
    cancelSubscription: () => ``
    // Subscription Invoices
    getSubscriptionsInvoices: () => ``
    // Discounts
    createDiscount: () => ``
    getDiscount: () => ``
    deleteDiscount: () => ``
    getDiscounts: () => ``
    // Discount Redemptions
    getDiscountRedemption: () => ``
    getDiscountRedemptions: () => ``
    // License Keys
    getLicenseKey: () => ``
    getLicenseKeys: () => ``
    // License Keys Instances
    getLicenseKeyInstance: () => ``
    getLicenseKeyInstances: () => ``
    // Checkouts
    createCheckout: () => ``
    getCheckout: () => ``
    getCheckouts: () => ``
}

export type TLmnsqzyFunctions = {
    /**
     * 
     * @returns functions for interacting with the domains of the 🍋Lmnsqzy API.
     */
    lmnsqzy: () => TMethods;
    /**
     * 
     * @returns a dummy string for showing that it works.
     */
    doesWork: () => string;
};

export type GetUseResponse = Promise<ILmnsqzyResponse<IGetUser>> | IError