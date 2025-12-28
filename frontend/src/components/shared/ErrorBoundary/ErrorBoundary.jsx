// src/components/shared/ErrorBoundary/ErrorBoundary.jsx
import { Component } from "react";

class ErrorBoundary extends Component {
    state = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex h-screen items-center justify-center bg-red-50">
                    <div className="text-center">
                        <h1 className="mb-4 text-3xl font-bold text-red-600">Something went wrong</h1>
                        <p className="text-gray-700">Please refresh the page or try again later.</p>
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
