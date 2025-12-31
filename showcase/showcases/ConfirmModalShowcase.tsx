import React, { useState } from 'react';
import { ConfirmModal } from '../../src/components/ConfirmModal';
import { ShowcaseSection } from '../layout/ShowcaseSection';
import { Button } from '../../src/components/Button';

export const ConfirmModalShowcase: React.FC = () => {
  const [neutralOpen, setNeutralOpen] = useState(false);
  const [dangerOpen, setDangerOpen] = useState(false);

  const neutralIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );

  const dangerIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );

  const handleNeutralConfirm = () => {
    console.log('Neutral action confirmed');
    setNeutralOpen(false);
  };

  const handleNeutralCancel = () => {
    console.log('Neutral action cancelled');
    setNeutralOpen(false);
  };

  const handleDangerConfirm = () => {
    console.log('Danger action confirmed');
    setDangerOpen(false);
  };

  const handleDangerCancel = () => {
    console.log('Danger action cancelled');
    setDangerOpen(false);
  };

  return (
    <>
      <ConfirmModal
        isOpen={neutralOpen}
        title="Confirm Action"
        description="Are you sure you want to proceed with this action?"
        icon={neutralIcon}
        confirmLabel="Confirm"
        cancelLabel="Cancel"
        variant="neutral"
        onConfirm={handleNeutralConfirm}
        onCancel={handleNeutralCancel}
        onClose={() => setNeutralOpen(false)}
      />

      <ConfirmModal
        isOpen={dangerOpen}
        title="Delete Item"
        description="Are you sure you want to delete this item? This action cannot be undone."
        icon={dangerIcon}
        confirmLabel="Delete"
        cancelLabel="Cancel"
        variant="danger"
        onConfirm={handleDangerConfirm}
        onCancel={handleDangerCancel}
        onClose={() => setDangerOpen(false)}
      />

      <ShowcaseSection
        title="Confirm Modal"
        description="A generic confirmation modal component for irreversible or sensitive actions"
        id="confirm-modal"
      >
        <div className="space-y-4">
          <div className="p-4 rounded-lg border border-border bg-surface-secondary">
            <p className="text-sm text-text-secondary mb-4">
              The confirm modal component is fully data-driven with no hard-coded text, icons, or colors.
              It supports multiple variants (neutral, danger, warning, info) and includes full accessibility support.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button
                variant="primary"
                size="sm"
                onClick={() => setNeutralOpen(true)}
              >
                Open Neutral Modal
              </Button>
              <Button
                variant="danger"
                size="sm"
                onClick={() => setDangerOpen(true)}
              >
                Open Danger Modal
              </Button>
            </div>
          </div>

          <div className="p-4 rounded-lg border border-border bg-surface-secondary">
            <h3 className="text-sm font-semibold text-text-primary mb-2">Usage Example</h3>
            <pre className="text-xs text-text-secondary overflow-x-auto p-3 bg-surface rounded border border-border">
{`<ConfirmModal
  isOpen={isOpen}
  title="Confirm Action"
  description="Are you sure you want to proceed?"
  icon={iconComponent}
  confirmLabel="Confirm"
  cancelLabel="Cancel"
  variant="danger"
  onConfirm={() => console.log('Confirmed')}
  onCancel={() => setIsOpen(false)}
  onClose={() => setIsOpen(false)}
/>`}
            </pre>
          </div>
        </div>
      </ShowcaseSection>
    </>
  );
};

