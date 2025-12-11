// src/components/common/Header.jsx
import React from 'react';
import { Bars3Icon, UserCircleIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';

const Header = ({ onMenuClick }) => {
  const handleLogout = () => {
    // TODO: Implement logout API call
    console.log('Logout clicked');
  };

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left: Menu button and Title */}
          <div className="flex items-center">
            {/* Mobile Menu Button */}
            <button
              onClick={onMenuClick}
              className="p-2 rounded-lg hover:bg-gray-100 lg:hidden"
            >
              <Bars3Icon className="w-6 h-6" />
            </button>
            
            {/* Page Title */}
            <div className="ml-2 lg:ml-0">
              <h1 className="text-lg font-semibold text-gray-900">Task Dashboard</h1>
              <p className="hidden lg:block text-sm text-gray-500">Track and manage your tasks</p>
            </div>
          </div>

          {/* Right: User and Logout */}
          <div className="flex items-center space-x-3">
            {/* Logout - Text on desktop, icon on mobile */}
            <button
              onClick={handleLogout}
              className="hidden md:flex items-center text-red-600 hover:text-red-800 text-sm"
            >
              <ArrowRightOnRectangleIcon className="w-4 h-4 mr-1" />
              Logout
            </button>
            <button
              onClick={handleLogout}
              className="md:hidden text-red-600 hover:text-red-800 p-1"
            >
              <ArrowRightOnRectangleIcon className="w-5 h-5" />
            </button>

            {/* User Profile */}
            <div className="flex items-center">
              <div className="hidden md:block text-right mr-3">
                <p className="text-sm font-medium text-gray-900">Welcome</p>
                <p className="text-xs text-gray-500">User</p>
              </div>
              <div className="w-9 h-9 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <UserCircleIcon className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;