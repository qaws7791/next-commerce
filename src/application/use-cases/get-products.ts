import { ProductRepository } from "@/application/ports/products.repository";
import { Product } from "@/domain/entities/product.entity";
import { productApi } from "@/infrastructure/repositories/product-api.repository";

export class GetProductsUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute(params?: {
    page?: number;
    limit?: number;
    category?: number;
  }): Promise<Product[]> {
    const { page = 1, limit = 10, category } = params || {};
    return this.productRepository.getAllProducts({
      page,
      limit,
      category,
    });
  }
}

export const getProductsUseCase = new GetProductsUseCase(productApi);
