import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`card ${className}`}
      {...props}
    >
      <div className="card-content">
        {children}
      </div>
    </div>
  );
};

export default Card; 