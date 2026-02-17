
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useApp } from '../App';
import { GlassCard } from '../components/GlassCard';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setUser } = useApp();
  const quizData = location.state?.quizData || {};

  const [form, setForm] = useState({
    name: '',
    email: '',
    age: '25',
    weight: '80',
    height: '180'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalUser = {
      ...form,
      age: parseInt(form.age),
      weight: parseFloat(form.weight),
      height: parseFloat(form.height),
      ...quizData
    };
    setUser(finalUser as any);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <GlassCard className="w-full max-w-lg p-10">
        <h2 className="text-3xl font-black italic mb-2 tracking-tighter uppercase">Identidade <span className="text-[#00ff41]">Atleta</span></h2>
        <p className="text-gray-500 mb-8 text-sm">Preencha seus dados para gerar o protocolo final.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-black uppercase text-gray-400">Nome Completo</label>
            <input 
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-[#00ff41] outline-none transition-all"
              placeholder="Digite seu nome"
              value={form.name}
              onChange={e => setForm({...form, name: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black uppercase text-gray-400">E-mail</label>
            <input 
              required
              type="email"
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-[#00ff41] outline-none transition-all"
              placeholder="seu@email.com"
              value={form.email}
              onChange={e => setForm({...form, email: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-gray-400">Idade</label>
              <input 
                type="number"
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-[#00ff41] outline-none transition-all"
                value={form.age}
                onChange={e => setForm({...form, age: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-gray-400">Peso (kg)</label>
              <input 
                type="number"
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-[#00ff41] outline-none transition-all"
                value={form.weight}
                onChange={e => setForm({...form, weight: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-gray-400">Altura (cm)</label>
              <input 
                type="number"
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-[#00ff41] outline-none transition-all"
                value={form.height}
                onChange={e => setForm({...form, height: e.target.value})}
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-5 bg-[#00ff41] text-black font-black text-xl rounded-xl transition-all hover:brightness-110 active:scale-95 shadow-[0_0_20px_rgba(0,255,65,0.2)]"
          >
            FINALIZAR CADASTRO
          </button>
        </form>
      </GlassCard>
    </div>
  );
};
