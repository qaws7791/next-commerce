import { ProductRepository } from "@/application/ports/products.repository";
import { Product } from "@/domain/entities/product.entity";
import httpClient from "@/infrastructure/api/http-client";

export class ProductApi implements ProductRepository {
  async getAllProducts({
    page,
    limit,
    category,
  }: {
    page: number;
    limit: number;
    category?: number;
  }) {
    const searchParams = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...(category ? { category: category.toString() } : {}),
    });
    console.log(searchParams.toString());
    return httpClient
      .get<Product[]>(`products?${searchParams.toString()}`)
      .json();
  }
  async getProductById(productId: number) {
    return httpClient.get<Product>(`products/${productId}`).json();
  }
}
export const productApi = new ProductApi();
