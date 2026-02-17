import React, { useState, useEffect, createContext, useContext } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Quiz } from './pages/Quiz';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Treinos } from './pages/Treinos';
import { Dieta } from './pages/Dieta';
import { Planner } from './pages/Planner';
import { Calculadora } from './pages/Calculadora';
import { Resultados } from './pages/Resultados';
import { Perfil } from './pages/Perfil';
import { AppState, UserProfile, DailyStats } from './types';
import { getFromStorage, saveToStorage } from './utils/storage';
import { INITIAL_STATS } from './constants';

interface AppContextType {
  state: AppState;
  setUser: (user: UserProfile) => void;
  updateToday: (stats: Partial<DailyStats>) => void;
  logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    user: getFromStorage<UserProfile | null>('user', null),
    history: getFromStorage<DailyStats[]>('history', []),
    today: getFromStorage<DailyStats>('today', INITIAL_STATS),
    isLoggedIn: !!getFromStorage<UserProfile | null>('user', null),
  });

  const setUser = (user: UserProfile) => {
    saveToStorage('user', user);
    setState(prev => ({ ...prev, user, isLoggedIn: true }));
  };

  const updateToday = (stats: Partial<DailyStats>) => {
    const newToday = { ...state.today, ...stats };
    saveToStorage('today', newToday);
    setState(prev => ({ ...prev, today: newToday }));
  };

  const logout = () => {
    localStorage.clear();
    setState({
      user: null,
      history: [],
      today: INITIAL_STATS,
      isLoggedIn: false
    });
  };

  return (
    <AppContext.Provider value={{ state, setUser, updateToday, logout }}>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={state.isLoggedIn ? <Dashboard /> : <Navigate to="/login" replace />} />
            <Route path="/treinos" element={state.isLoggedIn ? <Treinos /> : <Navigate to="/login" replace />} />
            <Route path="/dieta" element={state.isLoggedIn ? <Dieta /> : <Navigate to="/login" replace />} />
            <Route path="/planner" element={state.isLoggedIn ? <Planner /> : <Navigate to="/login" replace />} />
            <Route path="/calculadora" element={state.isLoggedIn ? <Calculadora /> : <Navigate to="/login" replace />} />
            <Route path="/resultados" element={state.isLoggedIn ? <Resultados /> : <Navigate to="/login" replace />} />
            <Route path="/perfil" element={state.isLoggedIn ? <Perfil /> : <Navigate to="/login" replace />} />
            {/* Fallback para evitar tela branca em rotas inexistentes */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </HashRouter>
    </AppContext.Provider>
  );
};

export default App;