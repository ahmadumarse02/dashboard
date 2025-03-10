import { create } from "zustand";
import axios from "axios";
import { devtools, persist } from "zustand/middleware";
import { Router } from "next/router"; // Assuming you're using Next.js router

// Define the shape of the user object (adjust according to your API response)
interface User {
  id: string;
  name: string;
  email: string;
  // Add other user properties as needed
}

// Define the shape of the auth store state and actions
interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (userData: User | null) => void;
  signup: (value:  { username: string; email: string; password: string }, router: Router) => Promise<void>;
  fetchUser: () => Promise<void>;
  login: (credentials: { email: string; password: string }, router: Router) => Promise<void>;
  logout: (router: Router) => Promise<void>;
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
          } catch (error) {
            alert(error.response?.data?.message || "Error in signup");
          }
        },
        fetchUser: async () => {
          try {
            const res = await axios.get("/api/profile");
            set({ user: res.data.user });
          } catch (error) {
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
          } catch (error) {
            alert(error.response?.data?.message || "Error in login");
          }
        },
        logout: async (router) => {
          try {
            await axios.post("/api/logout");
            set({ user: null, isAuthenticated: false });
            router.push("/login");
          } catch (error) {
            alert("Error logging out");
          }
        },
      }),
      {
        name: "habit-storage",
      }
    )
  )
);

export default useAuthStore;