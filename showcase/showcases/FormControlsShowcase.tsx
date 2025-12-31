import React, { useState } from 'react';
import { Input } from '../../src/components/Input';
import { Checkbox } from '../../src/components/Checkbox';
import { Toggle } from '../../src/components/Toggle';
import { SearchBar } from '../../src/components/SearchBar';
import { cn } from '../../src/utils/cn';
import { ShowcaseSection } from '../layout/ShowcaseSection';

export const FormControlsShowcase: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [toggleChecked, setToggleChecked] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  return (
    <ShowcaseSection
      title="Form Controls"
      description="Input fields, checkboxes, toggles, and search components"
      id="form-controls"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
        <div>
          <h3 className="text-base font-medium text-text-primary mb-2">Input</h3>
          <div className="space-y-2">
            {(['sm', 'md', 'lg'] as const).map(size => (
              <div key={size} className="space-y-2">
                <label className="block text-sm font-medium text-text-primary">
                  {size.toUpperCase()} Input
                </label>
                <div className="flex justify-center">
                  <Input
                    size={size}
                    placeholder={`Enter ${size} text`}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className={cn(
                      'p-3 border-none rounded-xl bg-surface text-text-primary text-sm outline-none',
                      'focus:border focus:border-border-focus'
                    )}
                  />
                </div>
              </div>
            ))}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-text-primary">
                Error Input
              </label>
              <div className="flex justify-center">
                <Input
                  error
                  placeholder="This has an error"
                  value=""
                  onChange={() => {}}
                  className={cn(
                    'p-3 border-none rounded-xl bg-surface text-text-primary text-sm outline-none',
                    'focus:border focus:border-border-focus'
                  )}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-text-primary">
                Disabled Input
              </label>
              <div className="flex justify-center">
                <Input
                  disabled
                  placeholder="Disabled input"
                  value="Can't edit this"
                  onChange={() => {}}
                  className={cn(
                    'p-3 border-none rounded-xl bg-surface text-text-primary text-sm outline-none',
                    'focus:border focus:border-border-focus'
                  )}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium text-text-primary mb-2">SearchBar</h3>
          <div className="space-y-2">
            {(['sm', 'md', 'lg'] as const).map(size => (
              <div key={size} className="space-y-2">
                <label className="block text-sm font-medium text-text-primary">
                  {size.toUpperCase()} SearchBar
                </label>
                <div className="flex justify-center">
                  <SearchBar
                    size={size}
                    placeholder={`Search ${size}...`}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    aria-label="Search"
                  />
                </div>
              </div>
            ))}
            <div className="text-xs text-text-secondary text-center">
              Value: {searchValue || '(empty)'}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium text-text-primary mb-2">Checkbox</h3>
          <div className="space-y-2">
            <Checkbox
              label="Basic checkbox"
              checked={checkboxChecked}
              onChange={(e) => setCheckboxChecked(e.target.checked)}
            />
            <Checkbox
              label="Disabled checkbox"
              disabled
              checked={false}
              onChange={() => {}}
            />
            <Checkbox
              label="Error checkbox"
              error
              checked={false}
              onChange={() => {}}
            />
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium text-text-primary mb-2">Toggle (Switch)</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <Toggle
                checked={toggleChecked}
                onChange={(e) => setToggleChecked(e.target.checked)}
              />
              <span className="text-sm text-text-primary">Basic toggle</span>
            </div>
            <div className="flex items-center gap-3">
              <Toggle
                disabled
                checked={false}
                onChange={() => {}}
              />
              <span className="text-sm text-text-primary">Disabled toggle</span>
            </div>
            <div className="flex items-center gap-3">
              <Toggle
                error
                checked={false}
                onChange={() => {}}
              />
              <span className="text-sm text-text-primary">Error toggle</span>
            </div>
          </div>
        </div>
      </div>
    </ShowcaseSection>
  );
};

