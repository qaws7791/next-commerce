export type ProductId = number;
export type ProductName = string;
export type ProductDescription = string;
export type ProductPrice = number;
export type ProductStock = number;

export type Product = {
  id: ProductId;
  name: ProductName;
  description: ProductDescription;
  price: ProductPrice;
  stock: ProductStock;
};
