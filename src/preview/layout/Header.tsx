import React from 'react';
import { Container } from './Container';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur-sm border-b border-border/50">
      <Container>
        <div className="py-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-1">
            UI Kit Preview
          </h1>
          <p className="text-sm md:text-base text-text-secondary">
            Reusable component library built with React and TypeScript
          </p>
        </div>
      </Container>
    </header>
  );
};
