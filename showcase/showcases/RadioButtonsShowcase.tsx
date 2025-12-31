import React, { useState } from 'react';
import { RadioButton, RadioGroup } from '../../src/components/RadioButton';
import { ShowcaseSection } from '../layout/ShowcaseSection';

export const RadioButtonsShowcase: React.FC = () => {
  const [radioValue, setRadioValue] = useState('option-1');

  return (
    <ShowcaseSection
      title="Radio Buttons"
      description="Single and grouped radio button components for selection"
      id="radio-buttons"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="space-y-2">
          <div className="text-sm font-medium text-text-primary">Single Radio</div>
          <RadioButton label="Standalone radio" value="standalone" defaultChecked />
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium text-text-primary">Grouped Radios</div>
          <RadioGroup
            name="example-group"
            legend="Choose an option"
            value={radioValue}
            onValueChange={(v) => setRadioValue(v)}
          >
            <RadioButton label="Option 1" value="option-1" />
            <RadioButton label="Option 2" value="option-2" />
            <RadioButton label="Option 3" value="option-3" />
          </RadioGroup>
          <div className="text-xs text-text-secondary">Selected: {radioValue}</div>
        </div>

        <div className="space-y-2 md:col-span-2 lg:col-span-3">
          <div className="text-sm font-medium text-text-primary">Disabled Radios</div>
          <div className="flex flex-wrap gap-4">
            <RadioButton label="Disabled (standalone)" value="disabled-standalone" disabled />
            <RadioGroup name="disabled-group" legend="Disabled group" defaultValue="a" disabled>
              <RadioButton label="A" value="a" />
              <RadioButton label="B" value="b" />
            </RadioGroup>
          </div>
        </div>
      </div>
    </ShowcaseSection>
  );
};

