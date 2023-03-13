import { LmnsqzyResponse } from '~/general/general.responses';
import { Checkout } from './interface';

export interface CreateCheckoutResponse extends LmnsqzyResponse<Checkout> {}
export interface GetCheckoutResponse extends LmnsqzyResponse<Checkout> {}
export interface GetCheckoutsResponse extends LmnsqzyResponse<Checkout[]> {}

export interface CheckoutOptions {
  data: {
    type: string;
    attributes: {
      custom_price: number;
      product_options: {
        enabled_variants: number[];
      };
      checkout_options: {
        button_color: string;
      };
      checkout_data: {
        discount_code: string;
        custom: {
          user_id: number;
        };
      };
      expires_at: string;
      preview: boolean;
    };
    relationships: {
      store: {
        data: {
          type: string;
          id: string;
        };
      };
      variant: {
        data: {
          type: string;
          id: string;
        };
      };
    };
  };
}
