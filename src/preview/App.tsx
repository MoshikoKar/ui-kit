import React, { useState } from 'react';
import { ThemeProvider } from '../theme/ThemeProvider';
import { Header } from './layout/Header';
import { ThemeToggle } from './layout/ThemeToggle';
import { ButtonsShowcase } from './showcases/ButtonsShowcase';
import { FormControlsShowcase } from './showcases/FormControlsShowcase';
import { CardsShowcase } from './showcases/CardsShowcase';
import { LoadersShowcase } from './showcases/LoadersShowcase';
import { RadioButtonsShowcase } from './showcases/RadioButtonsShowcase';
import { TooltipsShowcase } from './showcases/TooltipsShowcase';
import { SocialLinksShowcase } from './showcases/SocialLinksShowcase';
import { ContextMenuShowcase } from './showcases/ContextMenuShowcase';
import { FormsPatternsShowcase } from './showcases/FormsPatternsShowcase';
import { LandingPage } from './LandingPage';
import { Button } from '../components/Button';

const ComponentShowcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-surface">
      <ThemeToggle />
      <Header />
      <main className="pb-8">
        <ButtonsShowcase />
        <FormControlsShowcase />
        <CardsShowcase />
        <LoadersShowcase />
        <RadioButtonsShowcase />
        <TooltipsShowcase />
        <SocialLinksShowcase />
        <ContextMenuShowcase />
        <FormsPatternsShowcase />
      </main>
    </div>
  );
};

const App: React.FC = () => {
  const [showLanding, setShowLanding] = useState(false);

  return (
    <ThemeProvider defaultTheme="dark">
      {showLanding ? (
        <LandingPage />
      ) : (
        <ComponentShowcase />
      )}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setShowLanding(!showLanding)}
        >
          {showLanding ? 'Show All Components' : 'Show Landing Page'}
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default App;
