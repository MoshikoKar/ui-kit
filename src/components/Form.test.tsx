import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Form, FormField, FormButton, FormFooter, FormFooterLink } from './Form';

describe('Form', () => {
  it('renders with title', () => {
    render(<Form title="Login Form">Content</Form>);
    expect(screen.getByText('Login Form')).toBeInTheDocument();
  });

  it('renders children', () => {
    render(<Form>Form content</Form>);
    expect(screen.getByText('Form content')).toBeInTheDocument();
  });

  it('renders with footer', () => {
    render(<Form footer={<span>Footer text</span>}>Content</Form>);
    expect(screen.getByText('Footer text')).toBeInTheDocument();
  });

  it('applies size classes', () => {
    const { container, rerender } = render(<Form size="sm">Content</Form>);
    expect(container.firstChild).toHaveClass('max-w-xs');

    rerender(<Form size="md">Content</Form>);
    expect(container.firstChild).toHaveClass('max-w-sm');

    rerender(<Form size="lg">Content</Form>);
    expect(container.firstChild).toHaveClass('max-w-md');

    rerender(<Form size="full">Content</Form>);
    expect(container.firstChild).toHaveClass('w-full');
  });

  it('handles onSubmit', () => {
    const handleSubmit = vi.fn((e) => e.preventDefault());
    render(
      <Form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </Form>
    );

    fireEvent.submit(screen.getByRole('form'));
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});

describe('FormField', () => {
  it('renders with label', () => {
    render(<FormField label="Email" />);
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('renders input', () => {
    render(<FormField label="Email" />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('shows error message when error is a string', () => {
    render(<FormField label="Email" error="Invalid email" />);
    expect(screen.getByText('Invalid email')).toBeInTheDocument();
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('shows helper text', () => {
    render(<FormField label="Email" helperText="We'll never share your email" />);
    expect(screen.getByText("We'll never share your email")).toBeInTheDocument();
  });

  it('does not show helper text when there is an error', () => {
    render(
      <FormField 
        label="Email" 
        error="Error" 
        helperText="Helper" 
      />
    );
    expect(screen.queryByText('Helper')).not.toBeInTheDocument();
    expect(screen.getByText('Error')).toBeInTheDocument();
  });

  it('sets aria-invalid when error', () => {
    render(<FormField label="Email" error={true} />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });
});

describe('FormButton', () => {
  it('renders with children', () => {
    render(<FormButton>Submit</FormButton>);
    expect(screen.getByRole('button')).toHaveTextContent('Submit');
  });

  it('renders google variant', () => {
    render(<FormButton variant="google">Sign in with Google</FormButton>);
    expect(screen.getByRole('button')).toHaveTextContent('Sign in with Google');
  });
});

describe('FormFooter', () => {
  it('renders children', () => {
    render(<FormFooter>Footer content</FormFooter>);
    expect(screen.getByText('Footer content')).toBeInTheDocument();
  });
});

describe('FormFooterLink', () => {
  it('renders as link', () => {
    render(<FormFooterLink href="/forgot">Forgot password?</FormFooterLink>);
    expect(screen.getByRole('link')).toHaveTextContent('Forgot password?');
  });

  it('has correct href', () => {
    render(<FormFooterLink href="/signup">Sign up</FormFooterLink>);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/signup');
  });
});

