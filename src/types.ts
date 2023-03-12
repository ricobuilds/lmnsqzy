import { ILmnsqzyResponse, IGetUser, ILmnsqzyMultiResponse, IGetStore } from './interfaces';
// desired input for each handler

export type TMethods = {
    /**
     * 
     * @returns the currently authenticated user.
     */
    getUser(): Promise<GetUserResponse>

    /**
     * @returns a store based on the given ID.
     */
    getStore: () => ``

    /**
     * @returns a paginated list of stores.
     */
    getStores: () => Promise<GetStoreResponse>
    
    /**
     * @returns a customer based on the given ID.
     */
    getCustomer: () => ``

    /**
     * @returns a paginated list of customers.
     */
    getCustomers: () => ``
    // Products
    getProduct: () => ``

    /**
     * @returns a paginated list of products.
     */
    getProducts: () => ``
    // Variants
    getVariant: () => ``

    /**
     * @returns a paginated list of variants.
     */
    getVariants: () => ``
    // Files
    getFile: () => ``

    /**
     * @returns a paginated list of files.
     */
    getFiles: () => ``
    // Orders
    getOrder: () => ``

    /**
     * @returns a paginated list of order.
     */
    getOrders: () => ``
    // Order Items
    getOrderItem: () => ``

    /**
     * @returns a paginated list of order items.
     */
    getOrderItems: () => ``

    updateSubscription: () => ``
    getSubscription: () => ``

    /**
     * @returns a paginated list of subscriptions.
     */
    getSubscriptions: () => ``
    cancelSubscription: () => ``
    
    getSubscriptionsInvoice: () => ``
    /**
     * @returns a paginated list of order items.
     */
    getSubscriptionsInvoices: () => ``
    // Discounts
    createDiscount: () => ``
    getDiscount: () => ``
    deleteDiscount: () => ``

    /**
     * @returns a paginated list of discounts.
     */
    getDiscounts: () => ``
    // Discount Redemptions
    getDiscountRedemption: () => ``

    /**
     * @returns a paginated list of discount redemptions.
     */
    getDiscountRedemptions: () => ``
    // License Keys
    getLicenseKey: () => ``

    /**
     * @returns a paginated list of license keys.
     */
    getLicenseKeys: () => ``
    // License Keys Instances
    getLicenseKeyInstance: () => ``

    /**
     * @returns a paginated list of license key instances.
     */
    getLicenseKeyInstances: () => ``
    // Checkouts
    createCheckout: () => ``
    getCheckout: () => ``

    /**
     * @returns a paginated list of checkouts.
     */
    getCheckouts: () => ``
}

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

export type GetUserResponse = Promise<ILmnsqzyResponse<IGetUser>>
export type GetStoreResponse = Promise<ILmnsqzyMultiResponse<IGetStore>>