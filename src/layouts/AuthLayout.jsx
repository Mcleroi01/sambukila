import React from 'react';
import { Heart } from 'lucide-react';

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <Heart className="h-12 w-12 text-purple-600" />
          </div>
          <h1 className="mt-4 text-3xl font-bold text-gray-900">Sambukila</h1>
          <p className="mt-2 text-gray-600">Create beautiful wedding invitations</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;