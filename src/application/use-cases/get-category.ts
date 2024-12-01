import { CategoryRepository } from "@/application/ports/category.repository";
import { Category } from "@/domain/entities/category.entity";
import { categoryApi } from "@/infrastructure/repositories/category-api.repository";

export class GetCategoryUseCase {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(categoryId: number): Promise<Category> {
    return this.categoryRepository.getCategoryById(categoryId);
  }
}

export const getCategoryUseCase = new GetCategoryUseCase(categoryApi);
