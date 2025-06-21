import { apiClient } from '../client';
import type { ApiResponse, User } from '../types';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export const authService = {
  login: async (credentials: LoginRequest): Promise<ApiResponse<AuthResponse>> => {
    return apiClient.post('/auth/login', credentials);
  },

  register: async (userData: RegisterRequest): Promise<ApiResponse<AuthResponse>> => {
    return apiClient.post('/auth/register', userData);
  },

  logout: async (): Promise<ApiResponse<void>> => {
    return apiClient.post('/auth/logout', {});
  },

  getCurrentUser: async (): Promise<ApiResponse<User>> => {
    return apiClient.get('/auth/me');
  },

  refreshToken: async (): Promise<ApiResponse<{ token: string }>> => {
    return apiClient.post('/auth/refresh', {});
  },
}; 