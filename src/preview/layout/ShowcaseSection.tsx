import React from 'react';
import { Container, Section } from './Container';
import { cn } from '../../utils/cn';

interface ShowcaseSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({
  title,
  description,
  children,
  className,
  id,
}) => {
  return (
    <Section id={id} className={cn('scroll-mt-20', className)}>
      <Container>
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-text-primary mb-1">{title}</h2>
          {description && (
            <p className="text-text-secondary text-sm max-w-3xl">{description}</p>
          )}
        </div>
        <div className="space-y-4">{children}</div>
      </Container>
    </Section>
  );
};

