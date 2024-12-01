import { ProductRepository } from "@/application/ports/products.repository";
import { Product } from "@/domain/entities/product.entity";
import { productApi } from "@/infrastructure/repositories/product-api.repository";

export class GetProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute(productId: number): Promise<Product> {
    return this.productRepository.getProductById(productId);
  }
}

export const getProductUseCase = new GetProductUseCase(productApi);
