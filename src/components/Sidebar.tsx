import React from 'react';
import { 
  LayoutDashboard, 
  Tag, 
  MousePointer2, 
  Settings, 
  Wallet, 
  ShieldCheck, 
  Link2, 
  Bell, 
  LogOut,
  User as UserIcon
} from 'lucide-react';
import { cn } from '../lib/utils';
import { useAuth } from '../contexts/AuthContext';

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const SidebarItem = ({ icon: Icon, label, active, onClick }: SidebarItemProps) => (
  <div 
    onClick={onClick}
    className={cn(
      "flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors",
      active ? "bg-blue-600 text-white" : "text-gray-400 hover:bg-gray-800 hover:text-white"
    )}
  >
    <Icon size={20} />
    <span className="text-sm font-medium">{label}</span>
  </div>
);

export const Sidebar = () => {
  const { user, logout, isAdmin } = useAuth();

  return (
    <div className="w-64 bg-[#111827] h-screen flex flex-col border-r border-gray-800">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white tracking-tight">dealeraff</h1>
        <div className="mt-4 flex items-center gap-2 px-2 py-1 bg-gray-800 rounded-lg">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
            <UserIcon size={16} />
          </div>
          <div className="overflow-hidden">
            <p className="text-xs font-bold text-white truncate">{user?.email}</p>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest">{user?.role}</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 mt-4">
        <SidebarItem icon={LayoutDashboard} label="Dashboard" active />
        <SidebarItem icon={Tag} label="All Offers" />
        <SidebarItem icon={MousePointer2} label="Clicks" />
        <SidebarItem icon={Settings} label="Settings" />
        <SidebarItem icon={Wallet} label="Wallet" />
        {isAdmin && <SidebarItem icon={ShieldCheck} label="Admin Panel" />}
        <SidebarItem icon={Link2} label="Link Management" />
        <SidebarItem icon={Bell} label="Notifications" />
      </nav>

      <div className="p-4 border-t border-gray-800">
        <div 
          onClick={logout}
          className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-red-400 cursor-pointer transition-colors"
        >
          <LogOut size={20} />
          <span className="text-sm font-medium">Logout</span>
        </div>
      </div>
    </div>
  );
};
