import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { authService } from '../api/services/auth';
import { useAppRouter } from './useRouter';

export const useAuth = () => {
  const queryClient = useQueryClient();
  const { navigate } = useAppRouter();

  const loginMutation = useMutation({
    mutationFn: authService.login,
    onSuccess: (data) => {
      localStorage.setItem('authToken', data.data.token);
      queryClient.setQueryData(['user'], data.data.user);
      navigate.toDashboard();
    },
    onError: (error) => {
      console.error('Login failed:', error);
    },
  });

  const registerMutation = useMutation({
    mutationFn: authService.register,
    onSuccess: (data) => {
      localStorage.setItem('authToken', data.data.token);
      queryClient.setQueryData(['user'], data.data.user);
      navigate.toDashboard();
    },
  });

  const logoutMutation = useMutation({
    mutationFn: authService.logout,
    onSuccess: () => {
      localStorage.removeItem('authToken');
      queryClient.clear();
      navigate.toLogin();
    },
  });

  const { data: user, isLoading: isLoadingUser } = useQuery({
    queryKey: ['user'],
    queryFn: authService.getCurrentUser,
    retry: false,
    staleTime: 5 * 60 * 1000, // 5분
  });

  return {
    user: user?.data,
    isLoadingUser,
    login: loginMutation.mutate,
    register: registerMutation.mutate,
    logout: logoutMutation.mutate,
    isLoggingIn: loginMutation.isPending,
    isRegistering: registerMutation.isPending,
    isLoggingOut: logoutMutation.isPending,
  };
};