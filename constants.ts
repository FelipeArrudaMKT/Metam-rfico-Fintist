
import { Goal, TrainingLevel, Workout } from './types';

export const COLORS = {
  primary: '#00ff41', // Neon Green
  bg: '#050505',
  card: 'rgba(255, 255, 255, 0.05)',
  text: '#ffffff'
};

export const MOCK_WORKOUTS: Workout[] = [
  {
    id: 'w1',
    name: 'Treino A - Queima Rápida',
    category: 'Cardio & HIIT',
    kcal: 450,
    duration: 35,
    exercises: [
      { id: 'e1', name: 'Burpees', sets: 4, reps: '15', videoUrl: 'https://picsum.photos/400/225', description: 'Mantenha o ritmo explosivo.' },
      { id: 'e2', name: 'Mountain Climbers', sets: 4, reps: '30 seg', videoUrl: 'https://picsum.photos/400/225', description: 'Core estabilizado.' },
      { id: 'e3', name: 'Agachamento Salto', sets: 3, reps: '12', videoUrl: 'https://picsum.photos/400/225', description: 'Pouso suave.' }
    ]
  },
  {
    id: 'w2',
    name: 'Treino B - Definição',
    category: 'Força Metabólica',
    kcal: 380,
    duration: 45,
    exercises: [
      { id: 'e4', name: 'Flexão de Braços', sets: 4, reps: 'Máximo', videoUrl: 'https://picsum.photos/400/225', description: 'Amplitude total.' },
      { id: 'e5', name: 'Afundo Alternado', sets: 3, reps: '12 cada', videoUrl: 'https://picsum.photos/400/225', description: 'Tronco ereto.' },
      { id: 'e6', name: 'Prancha Abdominal', sets: 3, reps: '45 seg', videoUrl: 'https://picsum.photos/400/225', description: 'Não deixe o quadril cair.' }
    ]
  },
  {
    id: 'w3',
    name: 'Treino C - Cardio Extremo',
    category: 'Endurance',
    kcal: 600,
    duration: 50,
    exercises: [
      { id: 'e7', name: 'Polichinelos', sets: 5, reps: '50', videoUrl: 'https://picsum.photos/400/225', description: 'Braços bem esticados.' },
      { id: 'e8', name: 'Corrida Estacionária', sets: 3, reps: '1 min', videoUrl: 'https://picsum.photos/400/225', description: 'Joelho alto.' }
    ]
  }
];

export const INITIAL_STATS = {
  date: new Date().toISOString().split('T')[0],
  calories: 0,
  water: 0,
  steps: 0,
  completedWorkout: false,
  weight: 0
};
