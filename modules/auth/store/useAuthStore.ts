// modules/auth/store/useAuthStore.ts
import { create } from 'zustand';
import { authService } from '../services/authService';

interface AuthState {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,

  login: async (email, password) => {
    const success = await authService.login(email, password);
    if (success) set({ isAuthenticated: true });
  },

  signup: async (email, password) => {
    const success = await authService.signup(email, password);
    if (success) set({ isAuthenticated: true });
  },

  logout: () => set({ isAuthenticated: false }),
}));
