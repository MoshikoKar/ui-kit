import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '../../components/Card';
import { Button } from '../../components/Button';
import { ShowcaseSection } from '../layout/ShowcaseSection';

export const CardsShowcase: React.FC = () => {
  return (
    <ShowcaseSection
      title="Cards"
      description="Flexible card components with header, content, and footer sections"
      id="cards"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <Card>
          <CardContent>
            <div className="space-y-2">
              <div className="text-lg font-semibold text-text-primary">Basic Card</div>
              <div className="text-sm text-text-secondary">
                This is a basic card using composable children.
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="space-y-1">
              <div className="text-lg font-semibold text-text-primary">Card Header</div>
              <div className="text-sm text-text-secondary">Optional description area</div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-text-secondary">
              Card content can hold any layout and components.
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm">Cancel</Button>
            <Button variant="primary" size="sm">Confirm</Button>
          </CardFooter>
        </Card>

        <Card className="lg:col-span-2 xl:col-span-1">
          <CardHeader>
            <div className="space-y-1">
              <div className="text-lg font-semibold text-text-primary">Card with Actions</div>
              <div className="text-sm text-text-secondary">Header actions area</div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="secondary" size="sm">Secondary</Button>
              <Button variant="ghost" size="sm">Ghost</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-md border border-border bg-surface px-4 py-3 text-sm text-text-secondary">
                Slot A
              </div>
              <div className="rounded-md border border-border bg-surface px-4 py-3 text-sm text-text-secondary">
                Slot B
              </div>
              <div className="rounded-md border border-border bg-surface px-4 py-3 text-sm text-text-secondary">
                Slot C
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </ShowcaseSection>
  );
};

