import React from 'react';
import { Form, FormField, FormButton, FormFooter, FormFooterLink } from '../../src/components/Form';
import { Checkbox } from '../../src/components/Checkbox';
import { RadioButton, RadioGroup } from '../../src/components/RadioButton';
import { SubmitButton } from '../../src/components/SubmitButton';
import { ShowcaseSection } from '../layout/ShowcaseSection';

export const FormsPatternsShowcase: React.FC = () => {
  return (
    <ShowcaseSection
      title="Form Patterns"
      description="Pre-built form patterns and templates for common use cases"
      id="form-patterns"
    >
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-text-primary">Form Patterns</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
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
              <FormField type="email" placeholder="Email" />
              <FormField type="password" placeholder="Password" />
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
              <FormField type="text" placeholder="Full Name" />
              <FormField type="email" placeholder="Email" />
              <FormField type="password" placeholder="Password" />
              <Checkbox
                label="I agree to the terms and conditions"
                defaultChecked={false}
                className="w-full"
              />
              <FormButton type="submit">Sign Up</FormButton>
            </Form>

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
              <FormField type="text" placeholder="Your name" />
              <FormField type="email" placeholder="you@example.com" />
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
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
              <FormField type="email" placeholder="Email" />
              <FormField type="password" placeholder="Password" />
              <Checkbox
                label="Remember me"
                defaultChecked
                className="w-full"
              />
              <FormButton type="submit">Sign In</FormButton>
            </Form>

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
              <FormField type="text" placeholder="Username" />
              <FormField type="email" placeholder="Email" />
              <RadioGroup name="account-type" defaultValue="personal" className="w-full">
                <RadioButton label="Personal" value="personal" />
                <RadioButton label="Business" value="business" />
              </RadioGroup>
              <FormButton type="submit">Create Account</FormButton>
            </Form>

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
              <FormField type="text" placeholder="Your name (optional)" />
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
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
              <FormField type="email" placeholder="Email" error />
              <FormField type="password" placeholder="Password" />
              <FormButton type="submit">Sign In</FormButton>
            </Form>

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
              <FormField type="text" placeholder="Display name" />
              <div className="w-full space-y-2">
                <Checkbox label="Email notifications" defaultChecked />
                <Checkbox label="Push notifications" defaultChecked={false} />
                <Checkbox label="SMS notifications" defaultChecked={false} />
              </div>
              <FormButton type="submit">Save Settings</FormButton>
            </Form>

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
                <Checkbox label="Enable analytics" defaultChecked />
                <Checkbox label="Share usage data" defaultChecked={false} />
              </div>
              <FormButton type="submit">Save Preferences</FormButton>
            </Form>
          </div>
        </div>
      </div>
    </ShowcaseSection>
  );
};

