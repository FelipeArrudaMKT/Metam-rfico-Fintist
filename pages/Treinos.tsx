
import React, { useState } from 'react';
import { MOCK_WORKOUTS } from '../constants';
import { GlassCard } from '../components/GlassCard';
import { ChevronRight, Play, CheckCircle2, Clock, Zap } from 'lucide-react';
import { Workout, Exercise } from '../types';

export const Treinos: React.FC = () => {
  const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(null);
  const [completedExercises, setCompletedExercises] = useState<string[]>([]);

  const toggleExercise = (id: string) => {
    setCompletedExercises(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  if (selectedWorkout) {
    return (
      <div className="space-y-6 animate-in slide-in-from-right duration-300">
        <button onClick={() => setSelectedWorkout(null)} className="text-[#00ff41] font-black uppercase italic flex items-center gap-2">
          ← Voltar aos protocolos
        </button>
        
        <header className="p-8 rounded-3xl relative overflow-hidden bg-black border border-[#00ff41]/20">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <Zap size={120} className="text-[#00ff41]" />
          </div>
          <p className="text-[#00ff41] font-black text-xs uppercase tracking-widest mb-2">{selectedWorkout.category}</p>
          <h1 className="text-3xl font-black italic uppercase tracking-tighter leading-tight mb-4">{selectedWorkout.name}</h1>
          <div className="flex gap-6 text-sm text-gray-400 font-bold">
            <span className="flex items-center gap-1"><Clock size={16} /> {selectedWorkout.duration} MIN</span>
            <span className="flex items-center gap-1"><Zap size={16} /> {selectedWorkout.kcal} KCAL EST.</span>
          </div>
        </header>

        <div className="space-y-4">
          {selectedWorkout.exercises.map((ex, idx) => (
            <GlassCard key={ex.id} className={`${completedExercises.includes(ex.id) ? 'opacity-50 border-[#00ff41]/50' : ''}`}>
              <div className="flex gap-4">
                <div className="w-24 h-24 bg-black rounded-xl overflow-hidden flex-shrink-0 relative group">
                  <img src={ex.videoUrl} alt={ex.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/10 transition-colors cursor-pointer">
                    <Play size={24} fill="#00ff41" className="text-[#00ff41]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-black italic uppercase text-lg">{idx + 1}. {ex.name}</h3>
                  <p className="text-gray-500 text-xs mb-3 uppercase font-bold">{ex.sets} séries x {ex.reps}</p>
                  <p className="text-gray-400 text-sm line-clamp-2">{ex.description}</p>
                </div>
                <button 
                  onClick={() => toggleExercise(ex.id)}
                  className={`flex-shrink-0 w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                    completedExercises.includes(ex.id) ? 'bg-[#00ff41] border-[#00ff41] text-black' : 'border-white/10 text-white/20'
                  }`}
                >
                  <CheckCircle2 size={24} />
                </button>
              </div>
            </GlassCard>
          ))}
        </div>

        {completedExercises.length === selectedWorkout.exercises.length && (
          <button className="w-full py-6 bg-[#00ff41] text-black font-black uppercase text-xl rounded-2xl shadow-[0_0_30px_rgba(0,255,65,0.3)] animate-bounce mt-8">
            CONCLUIR TREINO 🔥
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-black italic tracking-tighter uppercase">Protocolos <span className="text-[#00ff41]">Metamórficos</span></h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {MOCK_WORKOUTS.map((workout) => (
          <GlassCard 
            key={workout.id} 
            onClick={() => setSelectedWorkout(workout)}
            className="group overflow-hidden relative"
          >
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#00ff41]/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
            <h3 className="text-[#00ff41] font-black italic uppercase text-xs mb-1 tracking-widest">{workout.category}</h3>
            <h2 className="text-2xl font-black italic tracking-tighter uppercase mb-6 leading-none">{workout.name}</h2>
            
            <div className="flex justify-between items-end">
              <div className="text-[10px] text-gray-500 font-bold uppercase">
                {workout.exercises.length} EXERCÍCIOS • {workout.duration} MIN
              </div>
              <ChevronRight className="text-[#00ff41] group-hover:translate-x-2 transition-transform" />
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};
