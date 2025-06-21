'use client'

const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_MGW_URL || 'http://localhost:3001/api';

// API 에러 클래스
export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public code?: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

// API 클라이언트 설정
const createApiClient = () => {
  const getAuthHeaders = (): Record<string, string> => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('authToken');
      return token ? { Authorization: `Bearer ${token}` } : {};
    }
    return {};
  };

  const handleResponse = async (response: Response) => {
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new ApiError(
        errorData.message || `HTTP error! status: ${response.status}`,
        response.status,
        errorData.code
      );
    }
    return response.json();
  };

  return {
    get: async <T>(endpoint: string): Promise<T> => {
      const headers = {
        'Content-Type': 'application/json',
        ...getAuthHeaders(),
      };
      
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers,
      });
      return handleResponse(response);
    },

    post: async <T>(endpoint: string, data: any): Promise<T> => {
      const headers = {
        'Content-Type': 'application/json',
        ...getAuthHeaders(),
      };
      
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },

    put: async <T>(endpoint: string, data: any): Promise<T> => {
      const headers = {
        'Content-Type': 'application/json',
        ...getAuthHeaders(),
      };
      
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },

    delete: async <T>(endpoint: string): Promise<T> => {
      const headers = {
        'Content-Type': 'application/json',
        ...getAuthHeaders(),
      };
      
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'DELETE',
        headers,
      });
      return handleResponse(response);
    },

    patch: async <T>(endpoint: string, data: any): Promise<T> => {
      const headers = {
        'Content-Type': 'application/json',
        ...getAuthHeaders(),
      };
      
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'PATCH',
        headers,
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },
  };
};

export const apiClient = createApiClient();