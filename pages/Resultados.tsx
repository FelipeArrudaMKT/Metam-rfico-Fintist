
import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { TrendingUp, Camera, Award, Share2 } from 'lucide-react';

export const Resultados: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-black italic tracking-tighter uppercase">Resultados <span className="text-[#00ff41]">Reais</span></h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <GlassCard className="lg:col-span-2 space-y-8">
          <div className="flex justify-between items-center">
            <h3 className="font-black italic uppercase flex items-center gap-2">
              <TrendingUp className="text-[#00ff41]" />
              Projeção Metamórfica
            </h3>
            <select className="bg-white/5 border border-white/10 rounded-lg p-2 text-xs font-bold outline-none">
              <option>Últimos 30 dias</option>
              <option>Últimos 90 dias</option>
            </select>
          </div>

          <div className="h-64 flex items-end justify-between px-4 pb-2 relative">
            <div className="absolute inset-0 flex flex-col justify-between py-2 pointer-events-none">
              {[1, 2, 3, 4].map(i => <div key={i} className="w-full border-t border-white/5" />)}
            </div>
            {[5, 12, 18, 25, 32, 40, 48, 55, 62, 70].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-4 group cursor-pointer">
                <div className="relative w-full px-1">
                  <div 
                    className="w-full bg-gradient-to-t from-[#00ff41]/40 to-[#00ff41] rounded-t-sm transition-all duration-500 group-hover:brightness-125" 
                    style={{ height: `${h * 2}px` }} 
                  />
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black text-[8px] font-black px-1 rounded">
                    {h}%
                  </div>
                </div>
                <span className="text-[8px] text-gray-600 font-bold uppercase">Sem {i+1}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-8">
            <div className="text-center">
              <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Peso Total</p>
              <p className="text-2xl font-black italic">-4.2kg</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Gordura Est.</p>
              <p className="text-2xl font-black italic">-3.5%</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Treinos</p>
              <p className="text-2xl font-black italic">24/30</p>
            </div>
          </div>
        </GlassCard>

        <div className="space-y-6">
          <GlassCard className="text-center py-10">
            <div className="w-20 h-20 bg-[#00ff41]/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-[#00ff41]/50 shadow-[0_0_20px_rgba(0,255,65,0.2)]">
              <Camera size={32} className="text-[#00ff41]" />
            </div>
            <h3 className="text-xl font-black italic uppercase mb-2">Check-in Visual</h3>
            <p className="text-sm text-gray-500 mb-6 px-4">Registre sua evolução com fotos semanais para análise da IA.</p>
            <button className="px-8 py-3 bg-[#00ff41] text-black font-black uppercase rounded-lg hover:brightness-110 active:scale-95 transition-all">
              Capturar Foto
            </button>
          </GlassCard>

          <GlassCard className="flex items-center gap-4 group cursor-pointer hover:bg-white/5">
            <div className="p-3 rounded-xl bg-yellow-500/20 text-yellow-500">
              <Award size={24} />
            </div>
            <div className="flex-1">
              <h4 className="font-black italic uppercase text-sm">Conquista: Guerreiro</h4>
              <p className="text-[10px] text-gray-500 font-bold uppercase">7 dias seguidos de treino</p>
            </div>
            <Share2 size={16} className="text-gray-600 group-hover:text-white transition-colors" />
          </GlassCard>
        </div>
      </div>
    </div>
  );
};
