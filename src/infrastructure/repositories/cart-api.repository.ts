import { CartRepository } from "@/application/ports/cart.repository";
import { Cart } from "@/domain/entities/cart.entity";
import httpClient from "@/infrastructure/api/http-client";

export class CartApi implements CartRepository {
  async getCart() {
    return httpClient.get<Cart>("carts").json();
  }

  async addItemToCart({
    cartId,
    productId,
    quantity,
  }: {
    cartId: number;
    productId: number;
    quantity: number;
  }) {
    return httpClient
      .post<void>(`carts/${cartId}/add`, {
        json: { productId, quantity },
      })
      .json();
  }
}

export const cartApi = new CartApi();
