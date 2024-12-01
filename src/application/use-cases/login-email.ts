import { AuthRepository } from "@/application/ports/auth.repository";
import { authApi } from "@/infrastructure/repositories/auth-api.repository";
import { SessionStorage } from "@/infrastructure/storage/session-storage";

export class LoginEmailUseCase {
  constructor(private authRepository: AuthRepository) {}

  async execute(params: { email: string; password: string }): Promise<void> {
    const { token } = await this.authRepository.loginWithEmail(params);
    const sessionStorage = new SessionStorage(window.sessionStorage);
    sessionStorage.saveToken(token);
  }
}

export const loginEmailUseCase = new LoginEmailUseCase(authApi);
