export type ProductId = number;
export type ProductName = string;
export type ProductDescription = string;
export type ProductImage = string;
export type ProductPrice = number;
export type ProductStock = number;

export type Product = {
  id: ProductId;
  name: ProductName;
  description: ProductDescription;
  image: ProductImage;
  price: ProductPrice;
  stock: ProductStock;
  createdAt: DateTimeString;
  updatedAt: DateTimeString;
};

export function getPriceText(product: Product) {
  return new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
  }).format(product.price);
}
