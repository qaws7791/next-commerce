import { AuthRepository } from "@/application/ports/auth.repository";
import { User } from "@/domain/entities/user.entity";
import httpClient from "@/infrastructure/api/http-client";

export class AuthApi implements AuthRepository {
  async loginWithEmail({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    return httpClient
      .post<{ token: string }>("auth/login", {
        json: { email, password },
      })
      .json();
  }
  async registerWithEmail({
    email,
    password,
    username,
  }: {
    email: string;
    password: string;
    username: string;
  }) {
    return httpClient
      .post<void>("auth/register", {
        json: { email, password, username },
      })
      .json();
  }

  async getMe(): Promise<User> {
    return httpClient.get<User>("auth/me").json();
  }
}

export const authApi = new AuthApi();
