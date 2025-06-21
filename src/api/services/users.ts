import { apiClient } from '../client';
import type { ApiResponse, PaginatedResponse, User } from '../types';

export interface CreateUserRequest {
  email: string;
  name: string;
  role: 'admin' | 'user';
  password: string;
}

export interface UpdateUserRequest {
  email?: string;
  name?: string;
  role?: 'admin' | 'user';
}

export interface UserFilters {
  page?: number;
  limit?: number;
  search?: string;
  role?: 'admin' | 'user';
}

export const userService = {
  getUsers: async (filters: UserFilters = {}): Promise<PaginatedResponse<User>> => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined) params.append(key, String(value));
    });
    
    return apiClient.get(`/users?${params.toString()}`);
  },

  getUserById: async (id: string): Promise<ApiResponse<User>> => {
    return apiClient.get(`/users/${id}`);
  },

  createUser: async (userData: CreateUserRequest): Promise<ApiResponse<User>> => {
    return apiClient.post('/users', userData);
  },

  updateUser: async (id: string, userData: UpdateUserRequest): Promise<ApiResponse<User>> => {
    return apiClient.put(`/users/${id}`, userData);
  },

  deleteUser: async (id: string): Promise<ApiResponse<void>> => {
    return apiClient.delete(`/users/${id}`);
  },
}; 