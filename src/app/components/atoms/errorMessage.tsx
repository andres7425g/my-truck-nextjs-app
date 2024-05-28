import React from 'react';
import { Button } from 'react-bootstrap';

interface ErrorMessageProps {
  message: string;
  onRefresh: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRefresh }) => {
  return (
    <div>
      <p>{message}, ¿wold you like to refresh yout search?</p>
      <Button onClick={onRefresh}>Refresh</Button>
    </div>
  );
};

export default ErrorMessage;
