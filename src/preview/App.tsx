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
  const [loading, setLoading] = useState(false);
  const [radioValue, setRadioValue] = useState('option-1');
  const [tooltipOpenButton, setTooltipOpenButton] = useState(false);
  const [tooltipOpenIcon, setTooltipOpenIcon] = useState(false);
  const [tooltipOpenText, setTooltipOpenText] = useState(false);
  const [tooltipPositionOpen, setTooltipPositionOpen] = useState<'top' | 'right' | 'bottom' | 'left' | null>(null);

  const handleSubmit = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-surface p-8">
      <ThemeToggle />

      <div className="max-w-4xl mx-auto space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-text-primary mb-2">UI Kit Preview</h1>
          <p className="text-text-secondary">Reusable component library</p>
        </header>

        {/* Button Section */}
        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-6">Button Variants</h2>
          <div className="space-y-4">
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

        {/* Input Section */}
        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-6">Input</h2>
          <div className="max-w-md space-y-4">
            {(['sm', 'md', 'lg'] as const).map(size => (
              <div key={size} className="space-y-2">
                <label className="block text-sm font-medium text-text-primary">
                  {size.toUpperCase()} Input
                </label>
                <Input
                  size={size}
                  placeholder={`Enter ${size} text`}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </div>
            ))}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-text-primary">
                Error Input
              </label>
              <Input
                error
                placeholder="This has an error"
                value=""
                onChange={() => {}}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-text-primary">
                Disabled Input
              </label>
              <Input
                disabled
                placeholder="Disabled input"
                value="Can't edit this"
                onChange={() => {}}
              />
            </div>
          </div>
        </section>

        {/* Checkbox Section */}
        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-6">Checkbox</h2>
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
        </section>

        {/* Toggle Section */}
        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-6">Toggle (Switch)</h2>
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
        </section>

        {/* Cards Section */}
        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-6">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

            <Card className="md:col-span-2">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

            <div className="space-y-4 md:col-span-2">
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

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
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

        {/* Patterns Section */}
        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-6">Patterns</h2>
          <div className="space-y-10">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-text-primary">Forms</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Contact form */}
                <form className="rounded-lg border border-border bg-surface-secondary p-6 space-y-4">
                  <div className="text-lg font-semibold text-text-primary">Contact form</div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-text-primary">Name</label>
                    <Input placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-text-primary">Email</label>
                    <Input placeholder="you@example.com" type="email" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-text-primary">Reason</label>
                    <RadioGroup name="contact-reason" defaultValue="support">
                      <RadioButton label="Support" value="support" />
                      <RadioButton label="Sales" value="sales" />
                      <RadioButton label="Other" value="other" />
                    </RadioGroup>
                  </div>
                  <Checkbox label="Send me a copy" defaultChecked={false} />
                  <div className="pt-2">
                    <SubmitButton>Send</SubmitButton>
                  </div>
                </form>

                {/* Login form */}
                <form className="rounded-lg border border-border bg-surface-secondary p-6 space-y-4">
                  <div className="text-lg font-semibold text-text-primary">Simple login</div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-text-primary">Email</label>
                    <Input placeholder="you@example.com" type="email" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-text-primary">Password</label>
                    <Input placeholder="••••••••" type="password" />
                  </div>
                  <Checkbox label="Remember me" defaultChecked />
                  <div className="pt-2">
                    <SubmitButton>Log in</SubmitButton>
                  </div>
                </form>
              </div>
            </div>

            {/* Validation states */}
            <div className="space-y-4">
              <div className="text-lg font-semibold text-text-primary">Validation states</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-lg border border-border bg-surface-secondary p-6 space-y-3">
                  <div className="text-sm font-medium text-text-primary">Error</div>
                  <Input error placeholder="Invalid value" />
                  <div className="text-xs text-danger">Please fix the field above.</div>
                  <SubmitButton disabled>Submit</SubmitButton>
                </div>
                <div className="rounded-lg border border-border bg-surface-secondary p-6 space-y-3">
                  <div className="text-sm font-medium text-text-primary">Success</div>
                  <Input className="border-primary focus:border-primary" placeholder="Looks good" />
                  <div className="text-xs text-text-secondary">All fields are valid.</div>
                  <SubmitButton>Submit</SubmitButton>
                </div>
                <div className="rounded-lg border border-border bg-surface-secondary p-6 space-y-3">
                  <div className="text-sm font-medium text-text-primary">Disabled submit</div>
                  <Input disabled value="Read-only" onChange={() => {}} />
                  <Checkbox label="Accept terms" disabled />
                  <SubmitButton disabled>Submit</SubmitButton>
                </div>
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
