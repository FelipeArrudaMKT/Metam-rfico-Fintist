
import React, { useEffect, useState } from 'react';
import { useApp } from '../App';
import { GlassCard } from '../components/GlassCard';
import { Flame, Droplets, Target, Activity, Trophy } from 'lucide-react';
import { getMetamorphicAdvice } from '../services/geminiService';

export const Dashboard: React.FC = () => {
  const { state } = useApp();
  const [advice, setAdvice] = useState<string>("Buscando conselho de elite...");

  useEffect(() => {
    if (state.user) {
      getMetamorphicAdvice(state.user).then(setAdvice);
    }
  }, [state.user]);

  const stats = [
    { icon: <Flame className="text-orange-500" />, label: 'Calorias', value: `${state.today.calories} kcal`, target: '2400 kcal' },
    { icon: <Droplets className="text-blue-500" />, label: 'Água', value: `${state.today.water} ml`, target: '3000 ml' },
    { icon: <Activity className="text-[#00ff41]" />, label: 'Passos', value: state.today.steps, target: '10.000' },
    { icon: <Target className="text-red-500" />, label: 'Peso Atual', value: `${state.user?.weight} kg`, target: 'Meta: -5kg' }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Bem-vindo de volta,</p>
          <h1 className="text-4xl font-black italic tracking-tighter uppercase">{state.user?.name.split(' ')[0]}</h1>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-2 mb-2">
            <Trophy className="text-[#00ff41]" size={18} />
            <span className="font-black italic text-sm text-[#00ff41]">NÍVEL METAMÓRFICO: 32%</span>
          </div>
          <div className="w-48 h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-[#00ff41] neon-border" style={{ width: '32%' }} />
          </div>
        </div>
      </header>

      <GlassCard className="bg-[#00ff41]/5 border-[#00ff41]/20">
        <h3 className="text-xs font-black text-[#00ff41] uppercase tracking-widest mb-2 italic">Refinamento IA Metamórfico</h3>
        <p className="text-lg font-bold leading-tight uppercase italic">"{advice}"</p>
      </GlassCard>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <GlassCard key={i} className="flex flex-col items-center justify-center py-8">
            <div className="mb-3">{s.icon}</div>
            <span className="text-2xl font-black italic">{s.value}</span>
            <span className="text-gray-500 text-[10px] font-bold uppercase tracking-tighter">{s.label}</span>
            <div className="mt-2 text-[10px] text-gray-600">Alvo: {s.target}</div>
          </GlassCard>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard>
          <h3 className="font-black italic uppercase mb-6 flex items-center gap-2">
            <Flame size={20} className="text-[#00ff41]" />
            Próximo Treino
          </h3>
          <div className="bg-white/5 p-4 rounded-xl border border-white/5">
            <p className="text-[#00ff41] font-black italic">TREINO A - QUEIMA RÁPIDA</p>
            <p className="text-gray-400 text-sm mb-4">Duração: 35 min | 450 kcal est.</p>
            <button className="w-full py-3 bg-white text-black font-black uppercase text-sm rounded-lg hover:bg-[#00ff41] transition-colors">
              Iniciar Sessão
            </button>
          </div>
        </GlassCard>

        <GlassCard>
          <h3 className="font-black italic uppercase mb-6">Evolução de Peso</h3>
          <div className="h-40 flex items-end gap-2 px-2">
            {[78, 77.5, 78.2, 77.1, 76.8, 76.2, 75.9].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div 
                  className="w-full bg-[#00ff41]/20 border-t-2 border-[#00ff41] rounded-t-sm" 
                  style={{ height: `${(h/85) * 100}%` }} 
                />
                <span className="text-[8px] text-gray-500 uppercase">Dia {i+1}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
};
