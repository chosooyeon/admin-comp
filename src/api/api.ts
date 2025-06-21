// 기존 API 통합 함수들을 여기에 정의
import { apiClient } from './client';
import type { ApiResponse } from './types';

export interface MainIntegrationResponse {
  // 메인 통합 API 응답 타입 정의
  data: any;
}

export const mainIntegration = async (): Promise<ApiResponse<MainIntegrationResponse>> => {
  return apiClient.get('/v1/challenge/main-integration');
}; 