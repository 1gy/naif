import { Component, ErrorInfo, ReactNode, VFC } from "react";

export type Props = {
  children: ReactNode;
};

export type State = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  handleResetStorage() {
    localStorage.clear();
    window.location.reload();
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div>
          Error:
          <button onClick={this.handleResetStorage}>reset localstorage</button>
        </div>
      );
    }
    return this.props.children;
  }
}
