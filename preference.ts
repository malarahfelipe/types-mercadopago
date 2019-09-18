import { Item } from "./item";

export interface Preference {
  id?: string;
  items?: Item[];
  payer?: {
    name?: string;
    surname?: string;
    email?: string;
    phone?: {
      area_code?: string;
      number?: number;
      [k: string]: any;
    };
    identification?: {
      type?: string;
      number?: string;
      [k: string]: any;
    };
    address?: {
      zip_code?: string;
      street_name?: string;
      street_number?: number;
      [k: string]: any;
    };
    [k: string]: any;
  };
  payment_methods?: {
    excluded_payment_methods?: {
      id?: string;
      [k: string]: any;
    }[];
    excluded_payment_types?: {
      id?: string;
      [k: string]: any;
    }[];
    default_payment_method_id?: string;
    installments?: number;
    default_installments?: number;
    [k: string]: any;
  };
  shipments?: {
    mode?: "custom" | "me2" | "not_specified";
    local_pickup?: boolean;
    dimensions?: string;
    default_shipping_method?: number;
    free_methods?: {
      id?: number;
      [k: string]: any;
    }[];
    cost?: number;
    free_shipping?: boolean;
    receiver_address?: {
      zip_code?: string;
      street_name?: string;
      street_number?: number;
      floor?: string;
      apartment?: string;
      [k: string]: any;
    };
    [k: string]: any;
  };
  back_urls?: {
    success?: string;
    pending?: string;
    failure?: string;
    [k: string]: any;
  };
  notification_url?: string;
  mode?: "regular_payment" | "money_transfer";
  additional_info?: string;
  auto_return?: "approved" | "all";
  external_reference?: string;
  expires?: boolean;
  expiration_date_from?: string;
  expiration_date_to?: string;
  collector_id?: number;
  client_id?: number;
  marketplace?: string;
  marketplace_fee?: number;
  differential_pricing?: {
    id?: number;
    [k: string]: any;
  };
  taxes?: {
    type?: "IVA" | "INC";
    value?: number;
    [k: string]: any;
  }[];
}
