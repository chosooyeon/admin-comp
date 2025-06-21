import { apiClient } from '../client';
import type { ApiResponse, PaginatedResponse, Post } from '../types';

export interface CreatePostRequest {
  title: string;
  content: string;
  published?: boolean;
}

export interface UpdatePostRequest {
  title?: string;
  content?: string;
  published?: boolean;
}

export interface PostFilters {
  page?: number;
  limit?: number;
  search?: string;
  authorId?: string;
  published?: boolean;
}

export const postService = {
  getPosts: async (filters: PostFilters = {}): Promise<PaginatedResponse<Post>> => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined) params.append(key, String(value));
    });
    
    return apiClient.get(`/posts?${params.toString()}`);
  },

  getPostById: async (id: string): Promise<ApiResponse<Post>> => {
    return apiClient.get(`/posts/${id}`);
  },

  createPost: async (postData: CreatePostRequest): Promise<ApiResponse<Post>> => {
    return apiClient.post('/posts', postData);
  },

  updatePost: async (id: string, postData: UpdatePostRequest): Promise<ApiResponse<Post>> => {
    return apiClient.put(`/posts/${id}`, postData);
  },

  deletePost: async (id: string): Promise<ApiResponse<void>> => {
    return apiClient.delete(`/posts/${id}`);
  },

  publishPost: async (id: string): Promise<ApiResponse<Post>> => {
    return apiClient.patch(`/posts/${id}/publish`, {});
  },

  unpublishPost: async (id: string): Promise<ApiResponse<Post>> => {
    return apiClient.patch(`/posts/${id}/unpublish`, {});
  },
}; 