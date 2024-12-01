import { Category } from "@/domain/entities/category.entity";

export interface CategoryRepository {
  getAllCategories({
    page,
    limit,
  }: {
    page: number;
    limit: number;
  }): Promise<Category[]>;
  getCategoryById(categoryId: number): Promise<Category>;
}
