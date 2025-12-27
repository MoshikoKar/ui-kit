import React, { useState } from 'react';
import { ThemeProvider } from '../theme/ThemeProvider';
import { Button } from '../components/Button';
import { SubmitButton } from '../components/SubmitButton';
import { Input } from '../components/Input';
import { Checkbox } from '../components/Checkbox';
import { Toggle } from '../components/Toggle';
import { Card, CardContent, CardFooter, CardHeader } from '../components/Card';
import { Loader, Spinner } from '../components/Loader';
import { RadioButton, RadioGroup } from '../components/RadioButton';
import { Tooltip } from '../components/Tooltip';
import { ThemeSwitch } from '../components/ThemeSwitch';
import { Form, FormField, FormButton, FormFooter, FormFooterLink } from '../components/Form';
import { SearchBar } from '../components/SearchBar';
import { SocialLinks } from '../components/SocialLinks';
import { ContextMenu, ContextMenuItemData, ContextMenuGroupData } from '../components/ContextMenu';
import { cn } from '../utils/cn';

const ThemeToggle: React.FC = () => {
  return (
    <div className="fixed top-4 right-4 z-50">
      <ThemeSwitch />
    </div>
  );
};

const ComponentShowcase: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [toggleChecked, setToggleChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('option-1');
  const [tooltipOpenButton, setTooltipOpenButton] = useState(false);
  const [tooltipOpenIcon, setTooltipOpenIcon] = useState(false);
  const [tooltipOpenText, setTooltipOpenText] = useState(false);
  const [tooltipPositionOpen, setTooltipPositionOpen] = useState<'top' | 'right' | 'bottom' | 'left' | null>(null);
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = async () => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
  };

  return (
    <div className="min-h-screen bg-surface">
      <ThemeToggle />

      <div className="w-full space-y-12 px-4">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-text-primary mb-2">UI Kit Preview</h1>
          <p className="text-text-secondary">Reusable component library</p>
        </header>

        {/* Button Section */}
        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-6">Button Variants</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {(['primary', 'secondary', 'danger', 'ghost'] as const).map(variant => (
              <div key={variant} className="space-y-2">
                <h3 className="text-lg font-medium text-text-primary capitalize">{variant}</h3>
                <div className="flex flex-wrap gap-4">
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
        </section>

        {/* Submit Button Section */}
        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-6">Submit Button</h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm text-text-secondary">
                SubmitButton changes state based on form validity and submission status
              </p>
            </div>
            
            {(['sm', 'md', 'lg'] as const).map(size => (
              <div key={size} className="space-y-2">
                <h3 className="text-lg font-medium text-text-primary capitalize">{size.toUpperCase()}</h3>
                <div className="flex flex-wrap items-center gap-4">
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
          </div>
        </section>

        {/* Input, Checkbox, and Toggle Section */}
        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-6">Form Controls</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Input Section */}
            <div>
              <h3 className="text-lg font-medium text-text-primary mb-4">Input</h3>
              <div className="space-y-4">
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

            {/* SearchBar Section */}
            <div>
              <h3 className="text-lg font-medium text-text-primary mb-4">SearchBar</h3>
              <div className="space-y-4">
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

            {/* Checkbox Section */}
            <div>
              <h3 className="text-lg font-medium text-text-primary mb-4">Checkbox</h3>
              <div className="space-y-4">
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

            {/* Toggle Section */}
            <div>
              <h3 className="text-lg font-medium text-text-primary mb-4">Toggle (Switch)</h3>
              <div className="space-y-4">
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
        </section>

        {/* Cards Section */}
        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-6">Cards</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
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
        </section>

        {/* Loaders Section */}
        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-6">Loaders</h2>
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-6">
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

            <div className="space-y-3">
              <div className="text-sm font-medium text-text-primary">Inline Loader</div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-text-secondary">Processing</span>
                <Loader variant="inline" size="sm" label="Loading" />
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-medium text-text-primary">Full Container Loader</div>
              <Loader variant="container" size="lg" label="Loading content" />
            </div>
          </div>
        </section>

        {/* Radio Buttons Section */}
        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-6">Radio Buttons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className="text-sm font-medium text-text-primary">Single Radio</div>
              <RadioButton label="Standalone radio" value="standalone" defaultChecked />
            </div>

            <div className="space-y-4">
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

            <div className="space-y-4 md:col-span-2 lg:col-span-3">
              <div className="text-sm font-medium text-text-primary">Disabled Radios</div>
              <div className="flex flex-wrap gap-8">
                <RadioButton label="Disabled (standalone)" value="disabled-standalone" disabled />
                <RadioGroup name="disabled-group" legend="Disabled group" defaultValue="a" disabled>
                  <RadioButton label="A" value="a" />
                  <RadioButton label="B" value="b" />
                </RadioGroup>
              </div>
            </div>
          </div>
        </section>

        {/* Tooltips Section */}
        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-6">Tooltips</h2>
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-6">
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

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
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
        </section>

        {/* Social Links Section */}
        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-6">Social Links</h2>
          <div className="space-y-10">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-text-primary">Vertical Orientation</h3>
              <div className="flex justify-center">
                <SocialLinks
                  orientation="vertical"
                  links={[
                    { platform: 'linkedin', url: 'https://linkedin.com/' },
                    { platform: 'github', url: 'https://www.github.com/' },
                    { platform: 'instagram', url: 'https://www.instagram.com/' },
                    { platform: 'youtube', url: 'https://youtube.com/' },
                    { platform: 'facebook', url: 'https://facebook.com/' },
                    { platform: 'x', url: 'https://x.com/' },
                    { platform: 'pinterest', url: 'https://pinterest.com/' },
                    { platform: 'spotify', url: 'https://spotify.com/' },
                    { platform: 'telegram', url: 'https://telegram.org/' },
                  ]}
                />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-text-primary">Horizontal Orientation</h3>
              <div className="flex justify-center">
                <SocialLinks
                  orientation="horizontal"
                  links={[
                    { platform: 'linkedin', url: 'https://linkedin.com/' },
                    { platform: 'github', url: 'https://www.github.com/' },
                    { platform: 'instagram', url: 'https://www.instagram.com/' },
                    { platform: 'youtube', url: 'https://youtube.com/' },
                    { platform: 'facebook', url: 'https://facebook.com/' },
                    { platform: 'x', url: 'https://x.com/' },
                    { platform: 'pinterest', url: 'https://pinterest.com/' },
                    { platform: 'spotify', url: 'https://spotify.com/' },
                    { platform: 'telegram', url: 'https://telegram.org/' },
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Context Menu Section */}
        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-6">Context Menu</h2>
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-text-primary">Action Menu</h3>
              <div className="flex justify-center">
                <ContextMenu
                  groups={[
                    {
                      id: 'group-1',
                      items: [
                        {
                          id: 'rename',
                          label: 'Rename',
                          icon: (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#7e8590"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                              <path d="m15 5 4 4" />
                            </svg>
                          ),
                          onClick: () => console.log('Rename clicked'),
                        },
                        {
                          id: 'add-member',
                          label: 'Add Member',
                          icon: (
                            <svg
                              className="lucide lucide-user-round-plus"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              strokeWidth="2"
                              stroke="#7e8590"
                              fill="none"
                              viewBox="0 0 24 24"
                              height="24"
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M2 21a8 8 0 0 1 13.292-6" />
                              <circle r="5" cy="8" cx="10" />
                              <path d="M19 16v6" />
                              <path d="M22 19h-6" />
                            </svg>
                          ),
                          onClick: () => console.log('Add Member clicked'),
                        },
                      ],
                    },
                    {
                      id: 'group-2',
                      items: [
                        {
                          id: 'settings',
                          label: 'Settings',
                          icon: (
                            <svg
                              className="lucide lucide-settings"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              strokeWidth="2"
                              stroke="#7e8590"
                              fill="none"
                              viewBox="0 0 24 24"
                              height="24"
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                              <circle r="3" cy="12" cx="12" />
                            </svg>
                          ),
                          onClick: () => console.log('Settings clicked'),
                        },
                        {
                          id: 'delete',
                          label: 'Delete',
                          variant: 'danger',
                          icon: (
                            <svg
                              className="lucide lucide-trash-2"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              strokeWidth="2"
                              stroke="#7e8590"
                              fill="none"
                              viewBox="0 0 24 24"
                              height="24"
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M3 6h18" />
                              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                              <line y2="17" y1="11" x2="10" x1="10" />
                              <line y2="17" y1="11" x2="14" x1="14" />
                            </svg>
                          ),
                          onClick: () => console.log('Delete clicked'),
                        },
                      ],
                    },
                    {
                      id: 'group-3',
                      variant: 'accent',
                      items: [
                        {
                          id: 'team-access',
                          label: 'Team Access',
                          icon: (
                            <svg
                              className="lucide lucide-users-round"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              strokeWidth="2"
                              stroke="#7e8590"
                              fill="none"
                              viewBox="0 0 24 24"
                              height="24"
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M18 21a8 8 0 0 0-16 0" />
                              <circle r="5" cy="8" cx="10" />
                              <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
                            </svg>
                          ),
                          onClick: () => console.log('Team Access clicked'),
                        },
                      ],
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Patterns Section */}
        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-6">Patterns</h2>
          <div className="space-y-10">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-text-primary">Form Patterns</h3>
              
              {/* First row: 3 forms */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
                {/* Login form with logo */}
                <Form
                  title="Welcome Back"
                  showLogo
                  onSubmit={(e) => {
                    e.preventDefault();
                    console.log('Login submitted');
                  }}
                  footer={
                    <FormFooter>
                      Don't have an account?{' '}
                      <FormFooterLink href="#">Sign up</FormFooterLink>
                    </FormFooter>
                  }
                >
                  <FormField
                    type="email"
                    placeholder="Email"
                  />
                  <FormField
                    type="password"
                    placeholder="Password"
                  />
                  <FormButton type="submit">Sign In</FormButton>
                  <FormButton variant="google" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Sign in with Google
                  </FormButton>
                </Form>

                {/* Sign up form with checkbox */}
                <Form
                  title="Create Account"
                  onSubmit={(e) => {
                    e.preventDefault();
                    console.log('Sign up submitted');
                  }}
                  footer={
                    <FormFooter>
                      Already have an account?{' '}
                      <FormFooterLink href="#">Sign in</FormFooterLink>
                    </FormFooter>
                  }
                >
                  <FormField
                    type="text"
                    placeholder="Full Name"
                  />
                  <FormField
                    type="email"
                    placeholder="Email"
                  />
                  <FormField
                    type="password"
                    placeholder="Password"
                  />
                  <Checkbox
                    label="I agree to the terms and conditions"
                    defaultChecked={false}
                    className="w-full"
                  />
                  <FormButton type="submit">Sign Up</FormButton>
                </Form>

                {/* Contact form with radio buttons */}
                <Form
                  title="Contact Us"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    console.log('Contact submitted');
                  }}
                  footer={
                    <FormFooter>
                      By submitting, you agree to our{' '}
                      <FormFooterLink href="#">Terms</FormFooterLink>
                    </FormFooter>
                  }
                >
                  <FormField
                    type="text"
                    placeholder="Your name"
                  />
                  <FormField
                    type="email"
                    placeholder="you@example.com"
                  />
                  <RadioGroup name="contact-reason" defaultValue="support" className="w-full">
                    <RadioButton label="Support" value="support" />
                    <RadioButton label="Sales" value="sales" />
                    <RadioButton label="Other" value="other" />
                  </RadioGroup>
                  <SubmitButton 
                    onSubmit={async () => {
                      await new Promise(resolve => setTimeout(resolve, 1000));
                    }}
                    successText="Message Sent"
                    className="w-full"
                  >
                    Send Message
                  </SubmitButton>
                </Form>
              </div>

              {/* Second row: 3 forms */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
                {/* Login with remember me checkbox */}
                <Form
                  title="Login"
                  onSubmit={(e) => {
                    e.preventDefault();
                    console.log('Login submitted');
                  }}
                  footer={
                    <FormFooter>
                      Forgot your password?{' '}
                      <FormFooterLink href="#">Reset it</FormFooterLink>
                    </FormFooter>
                  }
                >
                  <FormField
                    type="email"
                    placeholder="Email"
                  />
                  <FormField
                    type="password"
                    placeholder="Password"
                  />
                  <Checkbox
                    label="Remember me"
                    defaultChecked
                    className="w-full"
                  />
                  <FormButton type="submit">Sign In</FormButton>
                </Form>

                {/* Registration with radio group */}
                <Form
                  title="Register"
                  onSubmit={(e) => {
                    e.preventDefault();
                    console.log('Registration submitted');
                  }}
                  footer={
                    <FormFooter>
                      Need help?{' '}
                      <FormFooterLink href="#">Contact support</FormFooterLink>
                    </FormFooter>
                  }
                >
                  <FormField
                    type="text"
                    placeholder="Username"
                  />
                  <FormField
                    type="email"
                    placeholder="Email"
                  />
                  <RadioGroup name="account-type" defaultValue="personal" className="w-full">
                    <RadioButton label="Personal" value="personal" />
                    <RadioButton label="Business" value="business" />
                  </RadioGroup>
                  <FormButton type="submit">Create Account</FormButton>
                </Form>

                {/* Survey form with checkbox and radio */}
                <Form
                  title="Quick Survey"
                  width={320}
                  onSubmit={async (e) => {
                    e.preventDefault();
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    console.log('Survey submitted');
                  }}
                  footer={
                    <FormFooter>
                      Your feedback helps us improve
                    </FormFooter>
                  }
                >
                  <FormField
                    type="text"
                    placeholder="Your name (optional)"
                  />
                  <RadioGroup name="satisfaction" defaultValue="satisfied" className="w-full">
                    <RadioButton label="Very Satisfied" value="very-satisfied" />
                    <RadioButton label="Satisfied" value="satisfied" />
                    <RadioButton label="Neutral" value="neutral" />
                    <RadioButton label="Dissatisfied" value="dissatisfied" />
                  </RadioGroup>
                  <Checkbox
                    label="Subscribe to newsletter"
                    defaultChecked={false}
                    className="w-full"
                  />
                  <SubmitButton 
                    onSubmit={async () => {
                      await new Promise(resolve => setTimeout(resolve, 1000));
                    }}
                    successText="Survey Sent"
                    className="w-full"
                  >
                    Send Survey
                  </SubmitButton>
                </Form>
              </div>

              {/* Third row: 3 forms */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
                {/* Form with error state */}
                <Form
                  title="Login"
                  onSubmit={(e) => {
                    e.preventDefault();
                    console.log('Form submitted');
                  }}
                  footer={
                    <FormFooter>
                      Forgot your password?{' '}
                      <FormFooterLink href="#">Reset it</FormFooterLink>
                    </FormFooter>
                  }
                >
                  <FormField
                    type="email"
                    placeholder="Email"
                    error
                  />
                  <FormField
                    type="password"
                    placeholder="Password"
                  />
                  <FormButton type="submit">Sign In</FormButton>
                </Form>

                {/* Settings form with multiple checkboxes */}
                <Form
                  title="Settings"
                  width={320}
                  onSubmit={(e) => {
                    e.preventDefault();
                    console.log('Settings saved');
                  }}
                  footer={
                    <FormFooter>
                      Changes are saved automatically
                    </FormFooter>
                  }
                >
                  <FormField
                    type="text"
                    placeholder="Display name"
                  />
                  <div className="w-full space-y-2">
                    <Checkbox
                      label="Email notifications"
                      defaultChecked
                    />
                    <Checkbox
                      label="Push notifications"
                      defaultChecked={false}
                    />
                    <Checkbox
                      label="SMS notifications"
                      defaultChecked={false}
                    />
                  </div>
                  <FormButton type="submit">Save Settings</FormButton>
                </Form>

                {/* Preference form with radio and checkbox */}
                <Form
                  title="Preferences"
                  width={320}
                  onSubmit={(e) => {
                    e.preventDefault();
                    console.log('Preferences saved');
                  }}
                  footer={
                    <FormFooter>
                      <FormFooterLink href="#">Privacy Policy</FormFooterLink>
                    </FormFooter>
                  }
                >
                  <RadioGroup name="theme-preference" defaultValue="dark" className="w-full">
                    <RadioButton label="Light Theme" value="light" />
                    <RadioButton label="Dark Theme" value="dark" />
                    <RadioButton label="Auto" value="auto" />
                  </RadioGroup>
                  <div className="w-full space-y-2">
                    <Checkbox
                      label="Enable analytics"
                      defaultChecked
                    />
                    <Checkbox
                      label="Share usage data"
                      defaultChecked={false}
                    />
                  </div>
                  <FormButton type="submit">Save Preferences</FormButton>
                </Form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <ComponentShowcase />
    </ThemeProvider>
  );
};

export default App;
