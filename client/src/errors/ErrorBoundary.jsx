import * as React from 'react';
import ErrorFallBack from '../components/ErrorFallBack/ErrorFallBack';

class ErrorBoundary extends React.Component {
    state = {
        error: null,
    };
    static getDerivedStateFromError(error) {
        return { error };
    }
    render() {
        const { error } = this.state;

        if (error) {
            return (
                <ErrorFallBack errorMessage={error.message}/>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;