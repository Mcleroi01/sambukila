import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Heart, Calendar, Users, Home } from 'lucide-react';

const Layout: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <nav className="bg-white shadow-lg border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <Heart className="h-8 w-8 text-purple-600" />
                <span className="text-2xl font-bold text-gray-900">WeddingTix</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/') 
                    ? 'bg-purple-100 text-purple-700' 
                    : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                <Home className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
              <Link
                to="/create-event"
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/create-event')
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                <Calendar className="h-4 w-4" />
                <span>Create Event</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;