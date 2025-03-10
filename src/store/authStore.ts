import { create } from "zustand";
import axios from "axios";
import { devtools, persist } from "zustand/middleware";
import { useRouter } from "next/navigation"; // Correct import

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (userData: User | null) => void;
  signup: (
    value: { username: string; email: string; password: string },
    router: ReturnType<typeof useRouter>
  ) => Promise<void>;
  fetchUser: () => Promise<void>;
  login: (
    credentials: { email: string; password: string },
    router: ReturnType<typeof useRouter>
  ) => Promise<void>;
  logout: (router: ReturnType<typeof useRouter>) => Promise<void>;
}

const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        isAuthenticated: false,
        setUser: (userData) => set({ user: userData }),
        signup: async (value, router) => {
          try {
            const res = await axios.post("/api/signup", value);
            if (res.status === 200) {
              router.push("/login");
            }
          } catch {
            alert("Error in signup");
          }
        },
        fetchUser: async () => {
          try {
            const res = await axios.get("/api/profile");
            set({ user: res.data.user });
          } catch {
            set({ user: null });
          }
        },
        login: async (credentials, router) => {
          try {
            const res = await axios.post("/api/login", credentials);
            if (res.status === 200) {
              set({ user: res.data.user, isAuthenticated: true });
              router.push("/");
            }
          } catch {
            alert("Error in login");
          }
        },
        logout: async (router) => {
          try {
            await axios.post("/api/logout");
            set({ user: null, isAuthenticated: false });
            router.push("/login");
          } catch {
            alert("Error logging out");
          }
        },
      }),
      {
        name: "auth-storage",
      }
    )
  )
);

export default useAuthStore;
