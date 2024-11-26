export type UserId = number;
export type UserName = string;
export type UserEmail = string;
export type UserRole = "admin" | "user";

export type User = {
  id: UserId;
  name: UserName;
  email: UserEmail;
  role: UserRole;
};
