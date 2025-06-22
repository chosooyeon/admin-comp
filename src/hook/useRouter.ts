import { useRouter } from 'next/navigation';

export const useAppRouter = () => {
  const router = useRouter();

  const navigate = {
    toDashboard: () => router.push('/dashboard'),
    toLogin: () => router.push('/login'),
    toRegister: () => router.push('/register'),
    toUsers: () => router.push('/users'),
    toProfile: () => router.push('/profile'),
    back: () => router.back(),
    forward: () => router.forward(),
    refresh: () => router.refresh(),
    push: (path: string) => router.push(path),
    replace: (path: string) => router.replace(path),
  };

  return {
    router,
    navigate,
  };
};