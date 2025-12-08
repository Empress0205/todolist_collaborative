// src/components/dashboard/Dashboard.jsx
import React from 'react';
import { 
  CheckCircleIcon, 
  ClockIcon, 
  ExclamationTriangleIcon, 
  ListBulletIcon
} from '@heroicons/react/24/outline';

const Dashboard = () => {
  const stats = [
    { 
      title: 'Total Tasks', 
      value: '0', 
      icon: ListBulletIcon, 
      color: 'bg-blue-500',
    },
    { 
      title: 'Completed', 
      value: '0', 
      icon: CheckCircleIcon, 
      color: 'bg-green-500',
    },
    { 
      title: 'Pending', 
      value: '0', 
      icon: ClockIcon, 
      color: 'bg-yellow-500',
    },
    { 
      title: 'Overdue', 
      value: '0', 
      icon: ExclamationTriangleIcon, 
      color: 'bg-red-500',
    },
  ];

  return (
    <div className="p-4 md:p-6">
      {/* Desktop Welcome */}
      <div className="hidden lg:block mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600 mt-1">Track your task statistics</p>
      </div>

      {/* Mobile Welcome */}
      <div className="lg:hidden mb-4">
        <h2 className="text-xl font-bold text-gray-900">Your Stats</h2>
        <p className="text-gray-500 text-sm">Tap menu for navigation</p>
      </div>

      {/* Stats Grid - Responsive */}
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-sm transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs md:text-sm text-gray-500 mb-1">{stat.title}</p>
                <p className="text-xl md:text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-2 md:p-3 rounded-lg`}>
                <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Helper Text */}
      <div className="mt-6 text-center lg:hidden">
        <p className="text-gray-500 text-sm">
          Open sidebar menu to create or view tasks
        </p>
      </div>
    </div>
  );
};

export default Dashboard;