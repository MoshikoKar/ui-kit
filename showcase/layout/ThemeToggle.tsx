import React from 'react';
import { ThemeSwitch } from '../../src/components/ThemeSwitch';

export const ThemeToggle: React.FC = () => {
  return (
    <div className="fixed top-4 right-4 z-50">
      <ThemeSwitch />
    </div>
  );
};
