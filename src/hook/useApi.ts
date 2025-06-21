'use client'

// src/hooks/api/useApi.ts
import { useState, useCallback } from 'react';
import { apiClient } from '@/api/client';

export const useApi = <T>(endpoint: string) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = useCallback(async () => {
    try {
        setLoading(true);
        const result = await apiClient.get(endpoint);
        setData(result);
    } catch (err) {
        setError(err as Error);
    } finally {
        setLoading(false);
    }
    }, [endpoint]);

    return { data, loading, error, fetchData };
};