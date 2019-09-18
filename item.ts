export interface Item {
  id?: string;
  currency_id?: string;
  category_id?: string;
  description?: string;
  picture_url?: string;
  quantity?: number;
  unit_price?: number;
  title?: string;
  [k: string]: any;
}
