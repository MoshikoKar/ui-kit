import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { RadioButton, RadioGroup } from './RadioButton';

describe('RadioButton', () => {
  it('renders with label', () => {
    render(<RadioButton value="option1" label="Option 1" />);
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  it('renders as radio role', () => {
    render(<RadioButton value="option1" label="Option 1" />);
    expect(screen.getAllByRole('radio')[0]).toBeInTheDocument();
  });

  it('handles onChange events', () => {
    const handleChange = vi.fn();
    render(<RadioButton value="option1" label="Option 1" onChange={handleChange} />);
    
    fireEvent.click(screen.getByRole('radio'));
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('respects checked prop', () => {
    const { rerender } = render(
      <RadioButton value="option1" label="Option 1" checked={false} onChange={() => {}} />
    );
    expect(screen.getByRole('radio')).not.toBeChecked();

    rerender(
      <RadioButton value="option1" label="Option 1" checked={true} onChange={() => {}} />
    );
    expect(screen.getByRole('radio')).toBeChecked();
  });

  it('disables radio when disabled', () => {
    render(<RadioButton value="option1" label="Option 1" disabled />);
    expect(screen.getByRole('radio')).toBeDisabled();
  });
});

describe('RadioGroup', () => {
  it('renders children', () => {
    render(
      <RadioGroup>
        <RadioButton value="option1" label="Option 1" />
        <RadioButton value="option2" label="Option 2" />
      </RadioGroup>
    );
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('renders with legend', () => {
    render(
      <RadioGroup legend="Choose an option">
        <RadioButton value="option1" label="Option 1" />
      </RadioGroup>
    );
    expect(screen.getByText('Choose an option')).toBeInTheDocument();
  });

  it('controls radio buttons through context', () => {
    const handleValueChange = vi.fn();
    render(
      <RadioGroup value="option1" onValueChange={handleValueChange}>
        <RadioButton value="option1" label="Option 1" />
        <RadioButton value="option2" label="Option 2" />
      </RadioGroup>
    );

    const radios = screen.getAllByRole('radio');
    expect(radios[0]).toBeChecked();
    expect(radios[1]).not.toBeChecked();

    fireEvent.click(radios[1]);
    expect(handleValueChange).toHaveBeenCalledWith('option2');
  });

  it('disables all radios when group is disabled', () => {
    render(
      <RadioGroup disabled>
        <RadioButton value="option1" label="Option 1" />
        <RadioButton value="option2" label="Option 2" />
      </RadioGroup>
    );

    const radios = screen.getAllByRole('radio');
    expect(radios[0]).toBeDisabled();
    expect(radios[1]).toBeDisabled();
  });
});

