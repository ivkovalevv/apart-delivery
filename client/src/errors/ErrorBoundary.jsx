import * as React from 'react';

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
                <div className="container base-container">
                    <div className="main-content">
                        <p>Похоже, произошла ошибка!</p>
                        <p>{error.message}</p>
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;