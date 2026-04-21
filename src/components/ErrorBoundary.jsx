import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Keep details in console for fast debugging in browser devtools.
    console.error('Portfolio render error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-6">
          <div className="max-w-xl w-full rounded-2xl border border-red-500/30 bg-slate-800/80 p-6">
            <h2 className="text-2xl font-bold text-red-400 mb-3">Section Failed to Render</h2>
            <p className="text-gray-300 mb-3">
              A component crashed at runtime. Reload once. If it persists, share this message.
            </p>
            <pre className="text-xs bg-slate-900 rounded-lg p-3 overflow-auto text-red-300">
              {String(this.state.error?.message || this.state.error || 'Unknown render error')}
            </pre>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
