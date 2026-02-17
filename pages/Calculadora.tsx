
import React, { useState, useEffect } from 'react';
import { GlassCard } from '../components/GlassCard';
import { useApp } from '../App';
import { calculateTMB } from '../utils/storage';

export const Calculadora: React.FC = () => {
  const { state } = useApp();
  const [weight, setWeight] = useState(state.user?.weight || 80);
  const [height, setHeight] = useState(state.user?.height || 180);
  const [age, setAge] = useState(state.user?.age || 25);
  const [activity, setActivity] = useState(1.55); // Moderate

  const tmb = calculateTMB(weight, height, age);
  const tdee = Math.round(tmb * activity);
  const deficit = Math.round(tdee - 500);

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-black italic tracking-tighter uppercase">Calculadora <span className="text-[#00ff41]">Metabólica</span></h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <GlassCard className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-black uppercase text-gray-500 tracking-widest">Peso Atual (kg)</label>
            <input 
              type="range" min="40" max="200" 
              className="w-full accent-[#00ff41]" 
              value={weight} 
              onChange={e => setWeight(Number(e.target.value))}
            />
            <div className="text-2xl font-black italic">{weight} kg</div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black uppercase text-gray-500 tracking-widest">Altura (cm)</label>
            <input 
              type="range" min="140" max="220" 
              className="w-full accent-[#00ff41]" 
              value={height} 
              onChange={e => setHeight(Number(e.target.value))}
            />
            <div className="text-2xl font-black italic">{height} cm</div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black uppercase text-gray-500 tracking-widest">Nível de Atividade</label>
            <select 
              className="w-full bg-white/5 p-4 rounded-xl border border-white/10 outline-none focus:border-[#00ff41] transition-all font-bold"
              value={activity}
              onChange={e => setActivity(Number(e.target.value))}
            >
              <option value="1.2">Sedentário</option>
              <option value="1.375">Leve (1-2x semana)</option>
              <option value="1.55">Moderado (3-5x semana)</option>
              <option value="1.725">Intenso (6-7x semana)</option>
              <option value="1.9">Atleta Profissional</option>
            </select>
          </div>
        </GlassCard>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <GlassCard className="border-[#00ff41]/20">
              <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">TMB</h4>
              <p className="text-3xl font-black italic text-[#00ff41]">{Math.round(tmb)}</p>
              <p className="text-[10px] text-gray-600 font-bold uppercase">Kcal/dia base</p>
            </GlassCard>
            <GlassCard className="border-[#00ff41]/20">
              <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Gasto Total</h4>
              <p className="text-3xl font-black italic text-[#00ff41]">{tdee}</p>
              <p className="text-[10px] text-gray-600 font-bold uppercase">Kcal/dia estimado</p>
            </GlassCard>
          </div>

          <GlassCard className="bg-[#00ff41]/10 border-[#00ff41]/30">
            <h3 className="text-sm font-black italic uppercase mb-4 text-[#00ff41]">Protocolo Sugerido</h3>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-4xl font-black italic tracking-tighter">{deficit}</p>
                <p className="text-xs font-black uppercase text-gray-400">Kcal p/ Queima de Gordura</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-black italic text-[#00ff41]">Tempo estimado</p>
                <p className="text-2xl font-black italic">~12 semanas</p>
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <h3 className="text-sm font-black italic uppercase mb-4">Macros Estimados</h3>
            <div className="space-y-3">
              {[
                { label: 'Proteína', val: '180g', color: 'bg-red-500' },
                { label: 'Carbo', val: '220g', color: 'bg-[#00ff41]' },
                { label: 'Gordura', val: '65g', color: 'bg-orange-500' }
              ].map(m => (
                <div key={m.label} className="flex items-center gap-4">
                  <div className={`h-2 w-full rounded-full bg-white/5 overflow-hidden flex-1`}>
                    <div className={`h-full ${m.color}`} style={{ width: '40%' }} />
                  </div>
                  <span className="text-xs font-black uppercase w-20">{m.label}: {m.val}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};
