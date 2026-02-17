
export interface UserProfile {
  name: string;
  email: string;
  age: number;
  weight: number;
  height: number;
  goal: Goal;
  level: TrainingLevel;
  timeAvailable: number; // minutes per day
}

export enum Goal {
  HYPERTROPHY = 'Hipertrofia',
  FAT_LOSS = 'Queima de Gordura',
  DEFINITION = 'Definição Muscular',
  ENDURANCE = 'Resistência'
}

export enum TrainingLevel {
  BEGINNER = 'Iniciante',
  INTERMEDIATE = 'Intermediário',
  ADVANCED = 'Avançado'
}

export interface Workout {
  id: string;
  name: string;
  category: string;
  kcal: number;
  duration: number;
  exercises: Exercise[];
}

export interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: string;
  videoUrl: string;
  description: string;
  completed?: boolean;
}

export interface DailyStats {
  date: string;
  calories: number;
  water: number; // ml
  steps: number;
  completedWorkout: boolean;
  weight: number;
}

export interface AppState {
  user: UserProfile | null;
  history: DailyStats[];
  today: DailyStats;
  isLoggedIn: boolean;
}
