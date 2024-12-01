import { CartRepository } from "@/application/ports/cart.repository";
import { cartApi } from "@/infrastructure/repositories/cart-api.repository";

export class AddToCartUseCase {
  constructor(private readonly cartRepository: CartRepository) {}

  async execute({
    productId,
    cartId,
    quantity,
  }: {
    productId: number;
    cartId: number;
    quantity: number;
  }) {
    return this.cartRepository.addItemToCart({
      cartId,
      productId,
      quantity,
    });
  }
}

export const addToCartUseCase = new AddToCartUseCase(cartApi);
