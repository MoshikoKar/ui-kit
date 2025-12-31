import React from 'react';
import { Button } from '../../src/components/Button';
import { SubmitButton } from '../../src/components/SubmitButton';
import { ShowcaseSection } from '../layout/ShowcaseSection';

export const ButtonsShowcase: React.FC = () => {
  const handleSubmit = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
  };

  return (
    <>
      <ShowcaseSection
        title="Button Variants"
        description="Different button styles and states for various use cases"
        id="buttons"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {(['primary', 'secondary', 'danger', 'ghost'] as const).map(variant => (
            <div key={variant} className="space-y-2">
              <h3 className="text-base font-semibold text-text-primary capitalize border-b border-border/30 pb-1">
                {variant}
              </h3>
              <div className="flex flex-wrap gap-2">
                {(['sm', 'md', 'lg'] as const).map(size => (
                  <Button key={size} variant={variant} size={size}>
                    {variant} {size}
                  </Button>
                ))}
                <Button variant={variant} size="md" disabled>
                  Disabled
                </Button>
                <Button variant={variant} size="md" loading>
                  Loading
                </Button>
              </div>
            </div>
          ))}
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Submit Button"
        description="SubmitButton changes state based on form validity and submission status"
        id="submit-buttons"
      >
        {(['sm', 'md', 'lg'] as const).map(size => (
          <div key={size} className="space-y-2 p-4 rounded-lg bg-surface-secondary/50">
            <h3 className="text-base font-semibold text-text-primary capitalize">{size.toUpperCase()}</h3>
            <div className="flex flex-wrap items-start gap-4">
              <div className="space-y-1">
                <SubmitButton size={size} disabled>
                  Submit Form
                </SubmitButton>
                <p className="text-xs text-text-secondary">Disabled (form incomplete)</p>
              </div>
              <div className="space-y-1">
                <SubmitButton size={size} onSubmit={handleSubmit}>
                  Submit Form
                </SubmitButton>
                <p className="text-xs text-text-secondary">Ready (form valid)</p>
              </div>
            </div>
          </div>
        ))}
      </ShowcaseSection>
    </>
  );
};

