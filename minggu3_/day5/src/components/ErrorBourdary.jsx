import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught:", error, info);
    this.setState({ error, info });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 bg-gray-900 text-red-300 m-4 rounded">
          <h2 className="text-xl font-bold">Terjadi Kesalahan Bre</h2>
          <p className="text-sm mt-2">Sorry bre, ada error di tampilan ini.</p>
          <details className="whitespace-pre-wrap mt-2 text-sm text-gray-300">
            {this.state.error?.toString()}
            <br />
            {this.state.info?.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
