import { AuthRepository } from "@/application/ports/auth.repository";
import { authApi } from "@/infrastructure/repositories/auth-api.repository";

export class RegisterEmailUseCase {
  constructor(private authRepository: AuthRepository) {}

  async execute(params: {
    email: string;
    password: string;
    username: string;
  }): Promise<void> {
    await this.authRepository.registerWithEmail(params);
  }
}

export const registerEmailUseCase = new RegisterEmailUseCase(authApi);
