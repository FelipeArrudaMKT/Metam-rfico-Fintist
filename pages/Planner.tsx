
import React, { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { Check, X, Calendar as CalIcon, ShieldAlert } from 'lucide-react';

export const Planner: React.FC = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Realizar Treino do Dia', done: true },
    { id: 2, text: 'Seguir 100% da Dieta', done: false },
    { id: 3, text: 'Bater Meta de Água', done: true },
    { id: 4, text: 'Dormir +7 Horas', done: false },
    { id: 5, text: '10.000 Passos', done: true }
  ]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const completedCount = tasks.filter(t => t.done).length;
  const progress = Math.round((completedCount / tasks.length) * 100);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <h1 className="text-4xl font-black italic tracking-tighter uppercase">Planner <span className="text-[#00ff41]">Diário</span></h1>
        <div className="flex items-center gap-2 text-[#00ff41] font-black italic">
          <CalIcon size={20} />
          {new Date().toLocaleDateString('pt-BR')}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {tasks.map(task => (
            <div 
              key={task.id}
              onClick={() => toggleTask(task.id)}
              className={`p-6 rounded-2xl border flex items-center justify-between cursor-pointer transition-all duration-300 ${
                task.done ? 'bg-[#00ff41]/5 border-[#00ff41]/30' : 'bg-white/5 border-white/5 opacity-70'
              }`}
            >
              <span className={`font-black italic uppercase text-lg ${task.done ? 'text-white' : 'text-gray-500 line-through'}`}>
                {task.text}
              </span>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center border-2 ${
                task.done ? 'bg-[#00ff41] border-[#00ff41] text-black' : 'border-white/10 text-transparent'
              }`}>
                <Check size={20} />
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <GlassCard className="text-center py-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-white/10">
              <div className="h-full bg-[#00ff41]" style={{ width: `${progress}%` }} />
            </div>
            <h3 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Disciplina Hoje</h3>
            <div className="text-7xl font-black italic text-[#00ff41] neon-glow mb-4">{progress}%</div>
            <p className="font-bold text-gray-400">
              {progress < 50 ? 'MELHORE SEU FOCO!' : 'DISCIPLINA INABALÁVEL'}
            </p>
          </GlassCard>

          <GlassCard className="bg-red-500/5 border-red-500/20">
            <div className="flex items-center gap-3 mb-4 text-red-500">
              <ShieldAlert size={20} />
              <h3 className="font-black italic uppercase">Modo Sobrevivência</h3>
            </div>
            <p className="text-sm text-gray-500">
              Você falhou em 2 pilares hoje. Se falhar amanhã, o seu progresso será resetado para a fase inicial do protocolo. Não quebre a corrente.
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};
