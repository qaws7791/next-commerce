export type UserId = UniqueNumberId;
export type UserName = string;
export type UserEmail = string;
export type UserRole = "admin" | "user";
export type UserCartId = UniqueNumberId;

export type User = {
  id: UserId;
  username: UserName;
  email: UserEmail;
  role: UserRole;
  cartId: UserCartId;
};
