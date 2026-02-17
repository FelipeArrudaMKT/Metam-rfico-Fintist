
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Goal, TrainingLevel, UserProfile } from '../types';
import { GlassCard } from '../components/GlassCard';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';

export const Quiz: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<Partial<UserProfile>>({
    goal: Goal.HYPERTROPHY,
    level: TrainingLevel.INTERMEDIATE,
    timeAvailable: 45
  });

  const steps = [
    {
      title: "Qual seu objetivo principal?",
      key: "goal",
      options: Object.values(Goal)
    },
    {
      title: "Qual seu nível atual?",
      key: "level",
      options: Object.values(TrainingLevel)
    },
    {
      title: "Tempo disponível por dia (min)?",
      key: "timeAvailable",
      options: [30, 45, 60, 90]
    }
  ];

  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1);
    else navigate('/login', { state: { quizData: formData } });
  };

  const handleOptionSelect = (val: any) => {
    setFormData({ ...formData, [steps[step].key]: val });
    setTimeout(() => handleNext(), 300);
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center py-10">
      <div className="w-full max-w-md">
        <div className="mb-10 flex justify-between items-center text-xs font-bold text-gray-500 uppercase tracking-widest">
          <span>Passo {step + 1} de {steps.length}</span>
          <div className="flex gap-1">
            {steps.map((_, i) => (
              <div key={i} className={`h-1 w-8 rounded-full ${i <= step ? 'bg-[#00ff41]' : 'bg-white/10'}`} />
            ))}
          </div>
        </div>

        <h2 className="text-3xl font-black mb-8 italic">{steps[step].title}</h2>

        <div className="flex flex-col gap-4">
          {steps[step].options.map((opt) => (
            <GlassCard 
              key={opt}
              onClick={() => handleOptionSelect(opt)}
              className={`border-2 ${formData[steps[step].key as keyof UserProfile] === opt ? 'border-[#00ff41] bg-[#00ff41]/5' : 'border-transparent'}`}
            >
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">{opt}</span>
                {formData[steps[step].key as keyof UserProfile] === opt && <CheckCircle className="text-[#00ff41]" />}
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="mt-12 flex justify-between">
          <button 
            disabled={step === 0}
            onClick={() => setStep(step - 1)}
            className="p-4 rounded-full bg-white/5 disabled:opacity-0 transition-opacity"
          >
            <ArrowLeft />
          </button>
        </div>
      </div>
    </div>
  );
};
