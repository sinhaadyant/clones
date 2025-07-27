import React from 'react';
import { currentUser } from '@clerk/nextjs/server';

const ProtectedPage = async () => {
  const clerkUser = await currentUser();

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Protected Page</h1>
      <p className="mb-4">Only signed in users can see this page</p>
      
      <div className="space-y-6">
        <div className="border rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">User Information</h2>
          {clerkUser ? (
            <div className="space-y-2">
              <p><span className="font-medium">ID:</span> {clerkUser.id}</p>
              <p><span className="font-medium">Name:</span> {clerkUser.firstName} {clerkUser.lastName}</p>
              <p><span className="font-medium">Email:</span> {clerkUser.emailAddresses[0]?.emailAddress}</p>
              <p><span className="font-medium">Username:</span> {clerkUser.username}</p>
              <p><span className="font-medium">Created:</span> {new Date(clerkUser.createdAt).toLocaleString()}</p>
            </div>
          ) : (
            <p>No user data available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProtectedPage;