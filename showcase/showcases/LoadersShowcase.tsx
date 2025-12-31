import React from 'react';
import { Loader, Spinner } from '../../src/components/Loader';
import { ShowcaseSection } from '../layout/ShowcaseSection';

export const LoadersShowcase: React.FC = () => {
  return (
    <ShowcaseSection
      title="Loaders"
      description="Loading indicators and spinners for async operations"
      id="loaders"
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <Spinner size="sm" />
            <span className="text-sm text-text-secondary">Small</span>
          </div>
          <div className="flex items-center gap-2">
            <Spinner size="md" />
            <span className="text-sm text-text-secondary">Medium</span>
          </div>
          <div className="flex items-center gap-2">
            <Spinner size="lg" />
            <span className="text-sm text-text-secondary">Large</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium text-text-primary">Inline Loader</div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-text-secondary">Processing</span>
            <Loader variant="inline" size="sm" label="Loading" />
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium text-text-primary">Full Container Loader</div>
          <Loader variant="container" size="lg" label="Loading content" />
        </div>
      </div>
    </ShowcaseSection>
  );
};

