import { AuthRepository } from "@/application/ports/auth.repository";
import { User } from "@/domain/entities/user.entity";
import { authApi } from "@/infrastructure/repositories/auth-api.repository";

export class GetMeUseCase {
  constructor(private authRepository: AuthRepository) {}

  async execute(): Promise<User> {
    return this.authRepository.getMe();
  }
}

export const getMeUseCase = new GetMeUseCase(authApi);
