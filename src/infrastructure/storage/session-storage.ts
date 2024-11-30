export class SessionStorage {
  private static readonly ACCESS_TOKEN_KEY = "access_token";

  constructor(private readonly storage: Storage) {
    this.storage = storage;
  }

  saveToken(token: string): void {
    this.storage.setItem(SessionStorage.ACCESS_TOKEN_KEY, token);
  }

  getToken(): string | null {
    return this.storage.getItem(SessionStorage.ACCESS_TOKEN_KEY);
  }
}

// export const sessionStorage = new SessionStorage(window.sessionStorage);
