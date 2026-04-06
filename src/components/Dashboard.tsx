import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';
import { StatCard } from './StatCard';
import { Maximize2, X, Minus } from 'lucide-react';

const data = [
  { time: '00:00', clicks: 120, conversions: 5, payout: 25 },
  { time: '03:00', clicks: 80, conversions: 2, payout: 10 },
  { time: '06:00', clicks: 150, conversions: 12, payout: 60 },
  { time: '09:00', clicks: 320, conversions: 25, payout: 125 },
  { time: '12:00', clicks: 450, conversions: 42, payout: 210 },
  { time: '15:00', clicks: 380, conversions: 35, payout: 175 },
  { time: '18:00', clicks: 290, conversions: 20, payout: 100 },
  { time: '21:00', clicks: 180, conversions: 10, payout: 50 },
];

export const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Stats Grid */}
      <div className="flex flex-col lg:flex-row gap-4">
        <StatCard 
          title="Total Earned" 
          headerBg="bg-cyan-400"
          stats={[
            { label: 'Approved Income', value: '$ 1,240.50' },
            { label: 'Pending Income', value: '$ 320.00' },
          ]}
        />
        <StatCard 
          title="Today" 
          headerBg="bg-indigo-500"
          stats={[
            { label: 'Approved Income', value: '$ 755.00' },
            { label: 'Pending Income', value: '$ 120.00' },
          ]}
        />
        <StatCard 
          title="Balance" 
          headerBg="bg-emerald-500"
          stats={[
            { label: 'Withdrawable', value: '$ 890.25' },
          ]}
        />
      </div>

      {/* Summary Chart Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-medium text-gray-700">Summary</h2>
            <select className="bg-gray-50 border border-gray-200 rounded px-2 py-1 text-sm text-gray-600 outline-none">
              <option>Today</option>
              <option>Yesterday</option>
              <option>Last 7 Days</option>
            </select>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <button className="p-1 hover:text-gray-600"><Minus size={14} /></button>
            <button className="p-1 hover:text-gray-600"><Maximize2 size={14} /></button>
            <button className="p-1 hover:text-gray-600"><X size={14} /></button>
          </div>
        </div>

        {/* Chart Header Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="text-center">
            <div className="text-[10px] md:text-sm text-red-500 font-bold mb-1 uppercase tracking-wider">Approved Income</div>
            <div className="text-xl md:text-2xl font-black text-red-500">$ 755.00</div>
          </div>
          <div className="text-center">
            <div className="text-[10px] md:text-sm text-orange-400 font-bold mb-1 uppercase tracking-wider">Pending Income</div>
            <div className="text-xl md:text-2xl font-black text-orange-400">$ 120.00</div>
          </div>
          <div className="text-center">
            <div className="text-[10px] md:text-sm text-emerald-500 font-bold mb-1 uppercase tracking-wider">Conversions</div>
            <div className="text-xl md:text-2xl font-black text-emerald-500">151</div>
          </div>
          <div className="text-center">
            <div className="text-[10px] md:text-sm text-blue-500 font-bold mb-1 uppercase tracking-wider">Clicks</div>
            <div className="text-xl md:text-2xl font-black text-blue-500">1,970</div>
          </div>
        </div>

        {/* The Actual Chart */}
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis 
                dataKey="time" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 10, fill: '#9ca3af' }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 10, fill: '#9ca3af' }}
              />
              <Tooltip />
              <Legend 
                verticalAlign="top" 
                align="center" 
                iconType="rect"
                wrapperStyle={{ paddingBottom: '20px' }}
              />
              <Line 
                type="monotone" 
                dataKey="clicks" 
                stroke="#94d2bd" 
                strokeWidth={2} 
                dot={false} 
                name="Clicks"
              />
              <Line 
                type="monotone" 
                dataKey="conversions" 
                stroke="#a2d2ff" 
                strokeWidth={2} 
                dot={false} 
                name="Conversions"
              />
              <Line 
                type="monotone" 
                dataKey="payout" 
                stroke="#ffafcc" 
                strokeWidth={2} 
                dot={false} 
                name="Payout"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
