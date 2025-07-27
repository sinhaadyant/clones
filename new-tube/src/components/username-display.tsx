"use client";

import { useAuth } from '@clerk/nextjs';
import { trpc } from '@/lib/trpc/client';
import { useEffect } from 'react';

export function UsernameDisplay() {
  const { isSignedIn, userId } = useAuth();
  
  // Get user data from database via tRPC
  const { data: user, isLoading, error, refetch } = trpc.user.getCurrentUser.useQuery(
    undefined,
    {
      enabled: isSignedIn && !!userId,
      retry: false,
    }
  );

  // Sync user on login via tRPC
  const syncUserMutation = trpc.user.syncUser.useMutation({
    onSuccess: () => {
      // Refetch user data after successful sync
      refetch();
    },
  });

  // Auto-sync user when they sign in
  useEffect(() => {
    if (isSignedIn && userId && !user && !isLoading && !syncUserMutation.isPending) {
      syncUserMutation.mutate();
    }
  }, [isSignedIn, userId, user, isLoading, syncUserMutation]);

  if (!isSignedIn) {
    return null;
  }

  if (isLoading || syncUserMutation.isPending) {
    return (
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <span className="text-sm text-gray-600">Loading...</span>
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="text-sm text-red-600">
        Welcome! Syncing your profile...
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-gray-700">
        Welcome back, {user.name}!
      </span>
      {user.imageUrl && (
        <img 
          src={user.imageUrl} 
          alt={user.name}
          className="w-6 h-6 rounded-full border"
        />
      )}
    </div>
  );
} 