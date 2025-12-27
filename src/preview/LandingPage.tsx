import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../components/Button';
import { SubmitButton } from '../components/SubmitButton';
import { Card, CardHeader, CardContent, CardFooter } from '../components/Card';
import { Input } from '../components/Input';
import { Checkbox } from '../components/Checkbox';
import { Toggle } from '../components/Toggle';
import { RadioGroup, RadioButton } from '../components/RadioButton';
import { Loader } from '../components/Loader';
import { Tooltip } from '../components/Tooltip';
import { SearchBar } from '../components/SearchBar';
import { SocialLinks } from '../components/SocialLinks';
import { Form, FormField, FormButton, FormFooter, FormFooterLink } from '../components/Form';
import { ThemeSwitch } from '../components/ThemeSwitch';
import { ContextMenu } from '../components/ContextMenu';
import { ThemeToggle } from './layout/ThemeToggle';

export const LandingPage: React.FC = () => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [formData, setFormData] = useState({ email: '', password: '', remember: false });
  const [radioValue, setRadioValue] = useState('option1');
  const [toggleChecked, setToggleChecked] = useState(false);
  const [contextMenuOpen, setContextMenuOpen] = useState(false);
  const contextMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (contextMenuRef.current && !contextMenuRef.current.contains(event.target as Node)) {
        setContextMenuOpen(false);
      }
    };

    if (contextMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [contextMenuOpen]);

  const socialLinks = [
    { platform: 'github' as const, url: 'https://github.com' },
    { platform: 'linkedin' as const, url: 'https://linkedin.com' },
    { platform: 'x' as const, url: 'https://x.com' },
    { platform: 'instagram' as const, url: 'https://instagram.com' },
  ];

  return (
    <div className="min-h-screen bg-surface">
      <ThemeToggle />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-text-primary mb-6">
            Beautiful UI Components
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            A modern, accessible component library built with React and TypeScript
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
            <Button variant="secondary" size="lg">
              View Docs
            </Button>
            <Tooltip
              open={tooltipOpen}
              onOpenChange={setTooltipOpen}
              content="This is a tooltip example"
              position="bottom"
            >
              <Button variant="ghost" size="lg">
                Learn More
              </Button>
            </Tooltip>
          </div>
          
          <div className="flex justify-center mb-8">
            <SubmitButton
              variant="primary"
              size="lg"
              onSubmit={async () => {
                await new Promise(resolve => setTimeout(resolve, 1500));
              }}
            >
              Submit Message
            </SubmitButton>
          </div>

          <div className="flex justify-center items-center gap-4">
            <Loader size="md" label="Loading..." />
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 px-4 bg-surface-secondary">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-6 text-center">
            Search Components
          </h2>
          <div className="flex justify-center">
            <SearchBar
              size="lg"
              placeholder="Search for components..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
            Featured Components
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold text-text-primary">Button</h3>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary mb-4">
                  Beautiful, accessible buttons with multiple variants and sizes.
                </p>
                <Button variant="primary">Click Me</Button>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm">Learn More</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold text-text-primary">Input</h3>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary mb-4">
                  Clean input fields with error states and validation.
                </p>
                <Input placeholder="Enter text..." size="md" />
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm">Learn More</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold text-text-primary">Card</h3>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary mb-4">
                  Flexible card components for displaying content.
                </p>
                <div className="h-20 bg-surface-secondary rounded flex items-center justify-center">
                  <span className="text-text-secondary">Card Content</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm">Learn More</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Context Menu Section */}
      <section className="py-16 px-4 bg-surface-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
            Context Menu
          </h2>
          <div className="flex justify-center">
            <div className="relative" ref={contextMenuRef}>
              <Button
                variant="primary"
                onClick={() => setContextMenuOpen(!contextMenuOpen)}
              >
                Right-click or Click for Menu
              </Button>
              {contextMenuOpen && (
                <div className="absolute top-full left-0 mt-2 z-50">
                  <ContextMenu
                    groups={[
                      {
                        id: 'actions',
                        items: [
                          {
                            id: 'edit',
                            label: 'Edit',
                            icon: (
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                              </svg>
                            ),
                            onClick: () => {
                              setContextMenuOpen(false);
                              alert('Edit clicked');
                            },
                          },
                          {
                            id: 'copy',
                            label: 'Copy',
                            icon: (
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                              </svg>
                            ),
                            onClick: () => {
                              setContextMenuOpen(false);
                              alert('Copy clicked');
                            },
                          },
                        ],
                      },
                      {
                        id: 'danger',
                        items: [
                          {
                            id: 'delete',
                            label: 'Delete',
                            variant: 'danger',
                            icon: (
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <polyline points="3 6 5 6 21 6" />
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                              </svg>
                            ),
                            onClick: () => {
                              setContextMenuOpen(false);
                              alert('Delete clicked');
                            },
                          },
                        ],
                      },
                    ]}
                  />
                </div>
              )}
            </div>
          </div>
          <p className="text-center text-text-secondary mt-4">
            Click the button above to see the context menu
          </p>
        </div>
      </section>

      {/* Form Controls Section */}
      <section className="py-16 px-4 bg-surface-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
            Form Controls
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4">Checkbox</h3>
                <div className="space-y-3">
                  <Checkbox label="Accept terms and conditions" />
                  <Checkbox label="Subscribe to newsletter" defaultChecked />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4">Toggle</h3>
                <div className="space-y-3">
                  <Toggle
                    label="Enable notifications"
                    checked={toggleChecked}
                    onChange={(e) => setToggleChecked(e.target.checked)}
                  />
                  <Toggle label="Dark mode" defaultChecked />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4">Radio Buttons</h3>
                <RadioGroup
                  value={radioValue}
                  onValueChange={setRadioValue}
                  legend="Choose an option"
                >
                  <RadioButton value="option1" label="Option 1" />
                  <RadioButton value="option2" label="Option 2" />
                  <RadioButton value="option3" label="Option 3" />
                </RadioGroup>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-4">Login Form</h3>
              <Form title="Sign In" showLogo>
                <FormField
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <FormField
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <div className="w-full flex items-center justify-between">
                  <Checkbox
                    label="Remember me"
                    checked={formData.remember}
                    onChange={(e) => setFormData({ ...formData, remember: e.target.checked })}
                  />
                </div>
                <FormButton type="submit">Sign In</FormButton>
                <FormFooter>
                  Don't have an account?{' '}
                  <FormFooterLink href="#">Sign up</FormFooterLink>
                </FormFooter>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-8">
            Connect With Us
          </h2>
          <p className="text-text-secondary mb-8">
            Follow us on social media for updates and news
          </p>
          <div className="flex justify-center">
            <SocialLinks links={socialLinks} orientation="horizontal" />
          </div>
        </div>
      </section>

      {/* Theme Switch Section */}
      <section className="py-16 px-4 bg-surface-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-8">
            Customize Your Experience
          </h2>
          <p className="text-text-secondary mb-6">
            Switch between light and dark themes
          </p>
          <div className="flex justify-center">
            <ThemeSwitch />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-text-secondary mb-4">
            Built with ❤️ using React, TypeScript, and Tailwind CSS
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="sm">Documentation</Button>
            <Button variant="ghost" size="sm">GitHub</Button>
            <Button variant="ghost" size="sm">License</Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

