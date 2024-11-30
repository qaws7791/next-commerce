import { Product } from "@/domain/entities/product.entity";

// CartItem
export type CartItemId = UniqueNumberId;
export type CartItemProduct = UniqueNumberId;
export type CartItemQuantity = number;

// Cart
export type CartId = UniqueNumberId;
export type CartUser = UniqueNumberId;
export type CartProducts = CartItem[];

export type CartItem = {
  id: CartItemId;
  cartId: CartId;
  product: Product;
  quantity: CartItemQuantity;
  createdAt: DateTimeString;
};

export type Cart = {
  id: CartId;
  userId: CartUser;
  items: CartProducts;
};

export function getCartTotalPrice(cart: Cart): number {
  return cart.items.reduce((acc, item) => {
    return acc + item.product.price * item.quantity;
  }, 0);
}
