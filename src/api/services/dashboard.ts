import { apiClient } from '../client';
import type { ApiResponse, DashboardStats } from '../types';

export const dashboardService = {
  getStats: async (): Promise<ApiResponse<DashboardStats>> => {
    return apiClient.get('/dashboard/stats');
  },

  getMonthlyGrowth: async (): Promise<ApiResponse<{ month: string; growth: number }[]>> => {
    return apiClient.get('/dashboard/monthly-growth');
  },

  getRecentActivity: async (): Promise<ApiResponse<any[]>> => {
    return apiClient.get('/dashboard/recent-activity');
  },
}; 