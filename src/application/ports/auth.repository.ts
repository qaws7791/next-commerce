import { User } from "@/domain/entities/user.entity";

export interface AuthRepository {
  loginWithEmail({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<{ token: string }>;

  registerWithEmail({
    email,
    password,
    username,
  }: {
    email: string;
    password: string;
    username: string;
  }): Promise<void>;

  getMe(): Promise<User>;
}
