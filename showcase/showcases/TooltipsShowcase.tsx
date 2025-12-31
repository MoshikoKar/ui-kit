import React, { useState } from 'react';
import { Tooltip } from '../../src/components/Tooltip';
import { Button } from '../../src/components/Button';
import { ShowcaseSection } from '../layout/ShowcaseSection';

export const TooltipsShowcase: React.FC = () => {
  const [tooltipOpenButton, setTooltipOpenButton] = useState(false);
  const [tooltipOpenIcon, setTooltipOpenIcon] = useState(false);
  const [tooltipOpenText, setTooltipOpenText] = useState(false);
  const [tooltipPositionOpen, setTooltipPositionOpen] = useState<'top' | 'right' | 'bottom' | 'left' | null>(null);

  return (
    <ShowcaseSection
      title="Tooltips"
      description="Contextual tooltips with multiple positioning options"
      id="tooltips"
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-4">
          <Tooltip
            open={tooltipOpenButton}
            onOpenChange={setTooltipOpenButton}
            content="Tooltip on a button"
            position="top"
            delay={250}
          >
            <Button variant="secondary" size="md">Hover me</Button>
          </Tooltip>

          <Tooltip
            open={tooltipOpenIcon}
            onOpenChange={setTooltipOpenIcon}
            content="Tooltip on an icon"
            position="right"
          >
            <button
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-border bg-surface hover:bg-surface-tertiary transition-colors"
              aria-label="Info"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-text-primary"
                />
                <path d="M12 10v6" stroke="currentColor" strokeWidth="2" className="text-text-primary" />
                <path d="M12 7h.01" stroke="currentColor" strokeWidth="3" className="text-text-primary" />
              </svg>
            </button>
          </Tooltip>

          <Tooltip
            open={tooltipOpenText}
            onOpenChange={setTooltipOpenText}
            content="Tooltip on text"
            position="bottom"
          >
            <span tabIndex={0} className="text-sm text-text-secondary underline underline-offset-4 cursor-help">
              Hover or focus this text
            </span>
          </Tooltip>

          <Tooltip
            open={true}
            onOpenChange={() => {}}
            content="Disabled tooltip"
            position="left"
            disabled
          >
            <Button variant="ghost" size="md" disabled>
              Disabled
            </Button>
          </Tooltip>
        </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
          {(['top', 'right', 'bottom', 'left'] as const).map((pos) => (
            <Tooltip
              key={pos}
              open={tooltipPositionOpen === pos}
              onOpenChange={(next) => setTooltipPositionOpen(next ? pos : null)}
              content={`Position: ${pos}`}
              position={pos}
            >
              <span className="inline-flex items-center justify-center rounded-md border border-border bg-surface px-3 py-2 text-sm text-text-secondary">
                {pos}
              </span>
            </Tooltip>
          ))}
        </div>
      </div>
    </ShowcaseSection>
  );
};

