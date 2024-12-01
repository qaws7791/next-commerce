import { Cart } from "@/domain/entities/cart.entity";

export interface CartRepository {
  getCart(): Promise<Cart>;
  addItemToCart({
    cartId,
    productId,
    quantity,
  }: {
    cartId: number;
    productId: number;
    quantity: number;
  }): Promise<void>;
}
