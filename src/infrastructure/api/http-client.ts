import clientEnv from "@/config/client-env";
import { SessionStorage } from "@/infrastructure/storage/session-storage";
import ky from "ky";

const httpClient = ky.create({
  prefixUrl: clientEnv.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  hooks: {
    beforeRequest: [
      async (request) => {
        if (typeof window === "undefined") return request;
        const sessionStorage = new SessionStorage(window.sessionStorage);
        const token = sessionStorage.getToken();
        if (token) {
          request.headers.set("Authorization", `Bearer ${token}`);
        }

        return request;
      },
    ],
  },
});

export default httpClient;
