import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("FALHA NO PROTOCOLO METAMÓRFICO:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-6 text-center text-white">
          <div className="mb-6 inline-block px-4 py-1 rounded-full border border-red-500/50 bg-red-500/10 text-red-500 text-xs font-bold tracking-widest uppercase">
            Sistema Interrompido
          </div>
          <h1 className="text-4xl font-black italic text-white mb-4 uppercase tracking-tighter">
            ERRO NA <span className="text-[#00ff41] neon-glow">MATRIZ</span>
          </h1>
          <p className="text-gray-400 mb-8 max-w-md uppercase text-sm font-bold leading-relaxed">
            Ocorreu uma falha inesperada durante a execução do protocolo. 
            Recarregue o sistema para reestabelecer a conexão.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="px-8 py-4 bg-[#00ff41] text-black font-black uppercase rounded-xl hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,255,65,0.4)]"
          >
            REINICIAR PROTOCOLO
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}