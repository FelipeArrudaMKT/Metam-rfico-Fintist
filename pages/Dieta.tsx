
import React, { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { Utensils, Droplets, Apple, Coffee, Pizza, RefreshCcw } from 'lucide-react';

export const Dieta: React.FC = () => {
  const [water, setWater] = useState(1500);
  const targetWater = 3500;

  const meals = [
    { type: 'Café da Manhã', title: 'Ovos + Aveia', items: '3 ovos mexidos, 40g aveia, 1 fruta', kcal: 450, icon: <Coffee /> },
    { type: 'Almoço', title: 'Frango + Batata Doce', items: '150g frango, 200g batata, salada à vontade', kcal: 600, icon: <Utensils /> },
    { type: 'Lanche', title: 'Shake Metamórfico', items: '30g whey, 1 banana, 15g pasta amendoim', kcal: 350, icon: <Apple /> },
    { type: 'Jantar', title: 'Carne Vermelha + Arroz', items: '150g patinho, 120g arroz, legumes', kcal: 550, icon: <Pizza /> }
  ];

  const addWater = (amt: number) => setWater(prev => Math.min(prev + amt, 5000));

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-black italic tracking-tighter uppercase">Alimentação <span className="text-[#00ff41]">Estratégica</span></h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {meals.map((meal, i) => (
            <GlassCard key={i} className="flex items-center gap-6">
              <div className="p-4 rounded-full bg-white/5 text-[#00ff41]">
                {meal.icon}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{meal.type}</p>
                    <h3 className="text-xl font-black italic uppercase">{meal.title}</h3>
                  </div>
                  <button className="p-2 hover:text-[#00ff41] text-gray-600 transition-colors">
                    <RefreshCcw size={18} />
                  </button>
                </div>
                <p className="text-sm text-gray-400 mt-2">{meal.items}</p>
                <p className="text-[#00ff41] font-black text-xs mt-2 italic">{meal.kcal} KCAL</p>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="space-y-6">
          <GlassCard className="text-center py-10 flex flex-col items-center">
            <Droplets size={48} className="text-blue-500 mb-6" />
            <h3 className="text-2xl font-black italic mb-2 uppercase">Hidratação</h3>
            <div className="text-4xl font-black italic text-blue-500 mb-6">{water} / {targetWater}ml</div>
            
            <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden mb-8">
              <div 
                className="h-full bg-blue-500 transition-all duration-1000" 
                style={{ width: `${(water/targetWater) * 100}%` }} 
              />
            </div>

            <div className="flex gap-4">
              {[250, 500].map(amt => (
                <button 
                  key={amt}
                  onClick={() => addWater(amt)}
                  className="px-6 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all font-bold text-sm"
                >
                  +{amt}ml
                </button>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="bg-[#00ff41]/5 border-[#00ff41]/10">
            <h3 className="font-black italic uppercase mb-2">Dica Nutricional</h3>
            <p className="text-sm text-gray-400 italic">"Mantenha o sódio controlado para evitar retenção. Beba água para acelerar o metabolismo."</p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};
