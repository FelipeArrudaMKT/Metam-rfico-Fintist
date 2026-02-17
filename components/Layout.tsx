
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Dumbbell, Utensils, Calendar, Calculator, TrendingUp, User } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { path: '/dashboard', icon: <LayoutDashboard size={20} />, label: 'Home' },
    { path: '/treinos', icon: <Dumbbell size={20} />, label: 'Treinos' },
    { path: '/dieta', icon: <Utensils size={20} />, label: 'Dieta' },
    { path: '/planner', icon: <Calendar size={20} />, label: 'Planner' },
    { path: '/calculadora', icon: <Calculator size={20} />, label: 'Calc' },
    { path: '/resultados', icon: <TrendingUp size={20} />, label: 'Evolução' },
    { path: '/perfil', icon: <User size={20} />, label: 'Perfil' },
  ];

  const hideNav = location.pathname === '/' || location.pathname === '/quiz' || location.pathname === '/login';

  return (
    <div className="min-h-screen bg-[#050505] pb-24 lg:pb-0 lg:pl-64">
      {!hideNav && (
        <nav className="fixed bottom-0 left-0 right-0 bg-[#0a0a0a]/90 backdrop-blur-xl border-t border-white/10 p-2 flex justify-around items-center z-50 lg:hidden">
          {navItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path} 
              className={`flex flex-col items-center p-2 rounded-xl transition-colors ${
                location.pathname === item.path ? 'text-[#00ff41]' : 'text-gray-500'
              }`}
            >
              {item.icon}
              <span className="text-[10px] mt-1 font-bold">{item.label}</span>
            </Link>
          ))}
        </nav>
      )}

      {!hideNav && (
        <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-64 bg-[#0a0a0a] border-r border-white/10 flex-col p-6 z-50">
          <div className="mb-10">
            <h1 className="text-xl font-black italic text-[#00ff41] tracking-tighter">METAMÓRFICO</h1>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className={`flex items-center gap-3 p-4 rounded-xl transition-all ${
                  location.pathname === item.path 
                    ? 'bg-[#00ff41]/10 text-[#00ff41] border border-[#00ff41]/20' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.icon}
                <span className="font-bold">{item.label}</span>
              </Link>
            ))}
          </div>
        </aside>
      )}

      <main className="max-w-7xl mx-auto p-4 lg:p-8">
        {children}
      </main>
    </div>
  );
};
