import React, { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
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
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
          <h2 className="text-2xl font-bold mb-2">Something went wrong.</h2>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 bg-[#46A358] hover:bg-[#3b8b4c] text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-all shadow-sm"
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}