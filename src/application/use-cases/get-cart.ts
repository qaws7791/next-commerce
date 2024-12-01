import { CartRepository } from "@/application/ports/cart.repository";
import { cartApi } from "@/infrastructure/repositories/cart-api.repository";

export class GetCartUseCase {
  constructor(private cartRepository: CartRepository) {}

  async execute() {
    return this.cartRepository.getCart();
  }
}

export const getCartUseCase = new GetCartUseCase(cartApi);
