// API 응답 타입 정의
export interface ApiResponse<T = any> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// 사용자 관련 타입
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
  createdAt: string;
  updatedAt: string;
}

// 게시물 관련 타입
export interface Post {
  id: string;
  title: string;
  content: string;
  authorId: string;
  author: User;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

// 대시보드 통계 타입
export interface DashboardStats {
  totalUsers: number;
  totalPosts: number;
  activeUsers: number;
  monthlyGrowth: number;
}

// 챌린지 관련 타입
export interface Challenge {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  participants: number;
  status: 'active' | 'completed' | 'upcoming';
} 