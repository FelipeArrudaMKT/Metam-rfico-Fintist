
import React from 'react';
import { useApp } from '../App';
import { GlassCard } from '../components/GlassCard';
import { LogOut, Settings, Bell, Shield, User as UserIcon, Camera } from 'lucide-react';

export const Perfil: React.FC = () => {
  const { state, logout } = useApp();

  return (
    <div className="space-y-8 pb-10">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-black italic tracking-tighter uppercase">Perfil <span className="text-[#00ff41]">Elite</span></h1>
        <button onClick={logout} className="p-4 rounded-full bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all">
          <LogOut size={20} />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <GlassCard className="text-center py-12 flex flex-col items-center">
          <div className="relative mb-6">
            <div className="w-32 h-32 rounded-full border-4 border-[#00ff41] p-1 shadow-[0_0_30px_rgba(0,255,65,0.2)]">
              <img src="https://picsum.photos/200" alt="Avatar" className="w-full h-full object-cover rounded-full" />
            </div>
            <button className="absolute bottom-0 right-0 p-2 bg-[#00ff41] text-black rounded-full border-2 border-[#050505]">
              <Camera size={16} />
            </button>
          </div>
          <h2 className="text-2xl font-black italic uppercase tracking-tighter mb-1">{state.user?.name}</h2>
          <p className="text-[#00ff41] font-black italic text-xs uppercase tracking-widest">{state.user?.goal}</p>
          
          <div className="w-full grid grid-cols-3 gap-4 mt-10 pt-10 border-t border-white/5">
            <div>
              <p className="text-[8px] font-black text-gray-500 uppercase">Idade</p>
              <p className="font-black italic">{state.user?.age}</p>
            </div>
            <div>
              <p className="text-[8px] font-black text-gray-500 uppercase">Peso</p>
              <p className="font-black italic">{state.user?.weight}kg</p>
            </div>
            <div>
              <p className="text-[8px] font-black text-gray-500 uppercase">Altura</p>
              <p className="font-black italic">{state.user?.height}cm</p>
            </div>
          </div>
        </GlassCard>

        <div className="lg:col-span-2 space-y-4">
          {[
            { icon: <UserIcon size={20} />, label: 'Dados Pessoais', desc: 'Edite suas medidas e metas' },
            { icon: <Bell size={20} />, label: 'Notificações', desc: 'Alertas de treino e água' },
            { icon: <Shield size={20} />, label: 'Privacidade', desc: 'Gerencie seus dados e conta' },
            { icon: <Settings size={20} />, label: 'Preferências', desc: 'Idioma, unidades e sistema' }
          ].map((item, i) => (
            <GlassCard key={i} className="flex items-center gap-4 hover:bg-white/5 group cursor-pointer">
              <div className="p-3 rounded-xl bg-white/5 text-gray-400 group-hover:text-[#00ff41] group-hover:bg-[#00ff41]/10 transition-all">
                {item.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-black italic uppercase text-sm">{item.label}</h4>
                <p className="text-[10px] text-gray-600 font-bold uppercase">{item.desc}</p>
              </div>
              <Settings size={14} className="text-gray-800" />
            </GlassCard>
          ))}

          <GlassCard className="bg-red-500/5 border-red-500/10 mt-10">
            <h3 className="text-sm font-black italic uppercase text-red-500 mb-2">Excluir Identidade</h3>
            <p className="text-xs text-gray-500 mb-4">A exclusão de dados é permanente. Todo o seu progresso metamórfico será perdido.</p>
            <button className="text-[10px] font-black text-red-500 uppercase underline decoration-red-500/50 hover:text-red-400">
              SOLICITAR EXCLUSÃO
            </button>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};
