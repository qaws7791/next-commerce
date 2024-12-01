import { CategoryRepository } from "@/application/ports/category.repository";
import { Category } from "@/domain/entities/category.entity";
import { categoryApi } from "@/infrastructure/repositories/category-api.repository";

export class GetCategoriesUseCase {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(params?: {
    page?: number;
    limit?: number;
  }): Promise<Category[]> {
    const { page = 1, limit = 10 } = params || {};
    return this.categoryRepository.getAllCategories({ page, limit });
  }
}

export const getCategoriesUseCase = new GetCategoriesUseCase(categoryApi);
