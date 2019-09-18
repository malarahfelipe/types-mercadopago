import { Item } from "./item";

export interface Payment {
  payer?: {
    entity_type?: "individual" | "association";
    type?: "customer" | "registered" | "guest";
    id?: string;
    email?: string;
    identification?: {
      type?: string;
      number?: string;
      [k: string]: any;
    };
    phone?: {
      area_code?: string;
      number?: string;
      extension?: string;
      [k: string]: any;
    };
    first_name?: string;
    last_name?: string;
    [k: string]: any;
  };
  binary_mode?: boolean;
  order?: {
    type?: "mercadolibre" | "mercadopago";
    id?: number;
    [k: string]: any;
  };
  external_reference?: string;
  description?: string;
  metadata?: {
    [k: string]: any;
  };
  transaction_amount?: number;
  coupon_amount?: number;
  campaign_id?: number;
  coupon_code?: string;
  differential_pricing_id?: number;
  application_fee?: number;
  capture?: boolean;
  payment_method_id?: string;
  issuer_id?: string;
  token?: string;
  statement_descriptor?: string;
  installments?: number;
  notification_url?: string;
  callback_url?: string;
  additional_info?: {
    ip_address?: string;
    items?: Item[];
    payer?: {
      first_name?: string;
      last_name?: string;
      phone?: {
        area_code?: string;
        number?: string;
        [k: string]: any;
      };
      address?: {
        zip_code?: string;
        street_name?: string;
        street_number?: number;
        [k: string]: any;
      };
      registration_date?: string;
      [k: string]: any;
    };
    shipments?: {
      receiver_address?: string;
      zip_code?: string;
      street_name?: string;
      street_number?: number;
      floor?: number;
      apartment?: string;
      [k: string]: any;
    };
    [k: string]: any;
  };
}