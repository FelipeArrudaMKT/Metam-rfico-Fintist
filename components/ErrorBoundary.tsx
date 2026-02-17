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
    console.error("ERRO METAMÓRFICO:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-6 text-center">
          <h1 className="text-4xl font-black italic text-[#00ff41] mb-4 uppercase">ERRO NO PROTOCOLO</h1>
          <p className="text-gray-400 mb-8 max-w-md uppercase text-sm font-bold">
            Ocorreu uma falha inesperada na matriz. Recarregue a página para reestabelecer sua conexão com a elite.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="px-8 py-4 bg-[#00ff41] text-black font-black uppercase rounded-xl hover:scale-105 transition-transform"
          >
            REINICIAR SISTEMA
          </button>
        </div>
      );
    }

    // Fixed: In React class components, props are accessed via this.props
    return this.props.children;
  }
}