
export interface MerchantOrder {
  preference_id?: string;
  application_id?: string;
  site_id?: string;
  payer?: {
    id?: string;
    email?: string;
    nickname?: string;
    [k: string]: any;
  };
  collector?: {
    id?: number;
    email?: string;
    nickname?: string;
    [k: string]: any;
  };
  sponsor_id?: number;
  cancelled?: boolean;
  shipments?: {
    id?: number;
    shipment_type?: string;
    shipping_mode?: string;
    picking_type?: string;
    status?: string;
    substatus?: string;
    items?: {
      id?: string;
      category_id?: string;
      currency_id?: string;
      description?: string;
      picture_url?: string;
      quantity?: number;
      unit_price?: number;
      title?: string;
      [k: string]: any;
    }[];
    date_created?: string;
    last_modified?: string;
    date_first_printed?: string;
    service_id?: string;
    sender_id?: number;
    receiver_id?: number;
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
  notification_url?: string;
  additional_info?: string;
  external_reference?: string;
  marketplace?: string;
}