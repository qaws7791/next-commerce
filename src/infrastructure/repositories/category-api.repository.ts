import { CategoryRepository } from "@/application/ports/category.repository";
import { Category } from "@/domain/entities/category.entity";
import httpClient from "@/infrastructure/api/http-client";
export class CategoryApi implements CategoryRepository {
  async getAllCategories({ page, limit }: { page: number; limit: number }) {
    const searchParams = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    });
    return httpClient
      .get<Category[]>(`categories?${searchParams.toString()}`)
      .json();
  }
  async getCategoryById(categoryId: number) {
    return httpClient.get<Category>(`categories/${categoryId}`).json();
  }
}
export const categoryApi = new CategoryApi();
