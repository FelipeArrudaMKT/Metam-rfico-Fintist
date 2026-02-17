
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Zap, Target, ShieldCheck, Activity } from 'lucide-react';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center text-center py-12 lg:py-24">
      <div className="mb-4 inline-block px-4 py-1 rounded-full border border-[#00ff41]/50 bg-[#00ff41]/10 text-[#00ff41] text-xs font-bold tracking-widest uppercase">
        Protocolo Metamórfico v3.0
      </div>
      
      <h1 className="text-5xl lg:text-8xl font-black italic tracking-tighter leading-none mb-6">
        TRANSFORME SEU CORPO EM <span className="text-[#00ff41] neon-glow">90 DIAS</span>
      </h1>
      
      <p className="max-w-xl text-gray-400 text-lg mb-10 px-4">
        O sistema definitivo de treinamento e nutrição para quem busca o topo da performance física. Protocolos guiados por IA para resultados reais.
      </p>

      <button 
        onClick={() => navigate('/quiz')}
        className="group relative px-10 py-5 bg-[#00ff41] text-black font-black text-xl rounded-full transition-transform hover:scale-105 active:scale-95 flex items-center gap-3 overflow-hidden shadow-[0_0_30px_rgba(0,255,65,0.4)]"
      >
        🚀 DESBLOQUEAR MEU PLANO
        <ArrowRight className="transition-transform group-hover:translate-x-1" />
      </button>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {[
          { icon: <Target className="text-[#00ff41]" />, title: "Protocolo Diário", desc: "Passo a passo do que fazer." },
          { icon: <Zap className="text-[#00ff41]" />, title: "Treinos Guiados", desc: "Vídeos e séries otimizadas." },
          { icon: <Activity className="text-[#00ff41]" />, title: "Plano Alimentar", desc: "Calculado para sua meta." },
          { icon: <ShieldCheck className="text-[#00ff41]" />, title: "Acompanhamento", desc: "Suporte e métricas avançadas." }
        ].map((feat, i) => (
          <div key={i} className="glass-card p-8 rounded-2xl flex flex-col items-center text-center border border-white/5">
            <div className="mb-4 p-3 rounded-full bg-white/5">{feat.icon}</div>
            <h3 className="font-bold text-lg mb-2">{feat.title}</h3>
            <p className="text-gray-500 text-sm">{feat.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-24 w-full max-w-5xl rounded-3xl overflow-hidden relative group">
        <img 
          src="https://picsum.photos/1200/600?grayscale" 
          alt="Athlete training" 
          className="w-full h-96 object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
        <div className="absolute bottom-10 left-10 text-left">
          <p className="text-[#00ff41] font-bold">FASE DE PRÉ-VENDA</p>
          <h2 className="text-3xl font-black">ACESSO EXCLUSIVO LIBERADO</h2>
        </div>
      </div>
    </div>
  );
};
