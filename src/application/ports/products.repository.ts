import { Product } from "@/domain/entities/product.entity";

export interface ProductRepository {
  getAllProducts({
    page,
    limit,
    category,
  }: {
    page: number;
    limit: number;
    category?: number;
  }): Promise<Product[]>;
  getProductById(productId: number): Promise<Product>;
}
