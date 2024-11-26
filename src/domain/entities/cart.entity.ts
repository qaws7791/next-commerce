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
  product: CartItemProduct;
  quantity: CartItemQuantity;
};

export type Cart = {
  id: CartId;
  user: CartUser;
  products: CartProducts;
};

export function containsProduct(cart: Cart, productId: CartItemProduct) {
  return cart.products.some((item) => item.product === productId);
}
