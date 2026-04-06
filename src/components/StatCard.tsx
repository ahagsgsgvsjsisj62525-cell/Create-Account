import React from 'react';
import { cn } from '../lib/utils';

interface StatCardProps {
  title: string;
  headerBg: string;
  stats: {
    label: string;
    value: string;
    subValue?: string;
  }[];
}

export const StatCard = ({ title, headerBg, stats }: StatCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex-1">
      <div className={cn("py-2 px-4 text-center text-white font-bold text-sm uppercase tracking-wider", headerBg)}>
        {title}
      </div>
      <div className="flex divide-x divide-gray-100 py-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex-1 text-center px-2">
            <div className="text-[10px] text-gray-400 font-bold uppercase mb-1">
              {stat.label}
            </div>
            <div className={cn(
              "text-lg font-bold",
              stat.subValue ? "text-gray-700" : "text-green-500"
            )}>
              {stat.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
