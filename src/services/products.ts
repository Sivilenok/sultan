 export interface Products {
  all: Product[];
  popular: Product[];
  loading: boolean;
  error: string | null;
}

export interface Product {
  id: string;
  category: string;
  popular: boolean;
  image_url: string;
  name: string;
  size_type: string;
  size: string;
  barcode: string;
  manufacturer: string;
  brand: string;
  description: string;
  price: number;
  count?: number;
}

