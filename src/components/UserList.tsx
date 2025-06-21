'use client'

import { useUsers } from '../hook/useUsers';
import { useState } from 'react';

export const UserList = () => {
  const [filters, setFilters] = useState({ page: 1, limit: 10 });
  const { 
    users, 
    pagination, 
    isLoading, 
    deleteUser, 
    isDeleting 
  } = useUsers(filters);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">사용자 목록</h2>
      
      <div className="grid gap-4">
        {users.map((user) => (
          <div key={user.id} className="p-4 border rounded-lg">
            <h3 className="font-semibold">{user.name}</h3>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-500">Role: {user.role}</p>
            
            <button
              onClick={() => deleteUser(user.id)}
              disabled={isDeleting}
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50"
            >
              {isDeleting ? '삭제 중...' : '삭제'}
            </button>
          </div>
        ))}
      </div>

      {pagination && (
        <div className="flex justify-between items-center">
          <span>
            총 {pagination.total}명의 사용자
          </span>
          <div className="space-x-2">
            <button
              onClick={() => setFilters(prev => ({ ...prev, page: prev.page - 1 }))}
              disabled={pagination.page <= 1}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              이전
            </button>
            <span>{pagination.page} / {pagination.totalPages}</span>
            <button
              onClick={() => setFilters(prev => ({ ...prev, page: prev.page + 1 }))}
              disabled={pagination.page >= pagination.totalPages}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              다음
            </button>
          </div>
        </div>
      )}
    </div>
  );
}; 