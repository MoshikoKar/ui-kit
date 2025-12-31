import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ContextMenu, ContextMenuGroupData } from './ContextMenu';

const EditIcon = () => <svg data-testid="edit-icon" />;
const DeleteIcon = () => <svg data-testid="delete-icon" />;
const CopyIcon = () => <svg data-testid="copy-icon" />;

const mockGroups: ContextMenuGroupData[] = [
  {
    id: 'group-1',
    items: [
      { id: 'edit', label: 'Edit', icon: <EditIcon />, onClick: vi.fn() },
      { id: 'copy', label: 'Copy', icon: <CopyIcon />, onClick: vi.fn() },
    ],
  },
  {
    id: 'group-2',
    items: [
      { id: 'delete', label: 'Delete', icon: <DeleteIcon />, variant: 'danger', onClick: vi.fn() },
    ],
  },
];

describe('ContextMenu', () => {
  it('renders correctly', () => {
    const { container } = render(<ContextMenu groups={mockGroups} />);
    
    expect(container.querySelector('[class*="card"]')).toBeInTheDocument();
  });

  it('renders all groups', () => {
    render(<ContextMenu groups={mockGroups} />);
    
    const lists = screen.getAllByRole('list');
    expect(lists).toHaveLength(2);
  });

  it('renders all items', () => {
    render(<ContextMenu groups={mockGroups} />);
    
    expect(screen.getByText('Edit')).toBeInTheDocument();
    expect(screen.getByText('Copy')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
  });

  it('renders icons for each item', () => {
    render(<ContextMenu groups={mockGroups} />);
    
    expect(screen.getByTestId('edit-icon')).toBeInTheDocument();
    expect(screen.getByTestId('delete-icon')).toBeInTheDocument();
    expect(screen.getByTestId('copy-icon')).toBeInTheDocument();
  });

  it('shows separators by default', () => {
    const { container } = render(<ContextMenu groups={mockGroups} />);
    
    const separators = container.querySelectorAll('[class*="separator"]');
    expect(separators).toHaveLength(1); // One separator between two groups
  });

  it('hides separators when showSeparators is false', () => {
    const { container } = render(<ContextMenu groups={mockGroups} showSeparators={false} />);
    
    const separators = container.querySelectorAll('[class*="separator"]');
    expect(separators).toHaveLength(0);
  });

  it('calls onClick when item is clicked', () => {
    const onClickMock = vi.fn();
    const groups: ContextMenuGroupData[] = [
      {
        id: 'group-1',
        items: [
          { id: 'test', label: 'Test Item', icon: <EditIcon />, onClick: onClickMock },
        ],
      },
    ];
    
    render(<ContextMenu groups={groups} />);
    
    fireEvent.click(screen.getByText('Test Item'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled item is clicked', () => {
    const onClickMock = vi.fn();
    const groups: ContextMenuGroupData[] = [
      {
        id: 'group-1',
        items: [
          { id: 'test', label: 'Disabled Item', icon: <EditIcon />, onClick: onClickMock, disabled: true },
        ],
      },
    ];
    
    render(<ContextMenu groups={groups} />);
    
    fireEvent.click(screen.getByText('Disabled Item'));
    expect(onClickMock).not.toHaveBeenCalled();
  });

  it('applies disabled styles to disabled items', () => {
    const groups: ContextMenuGroupData[] = [
      {
        id: 'group-1',
        items: [
          { id: 'test', label: 'Disabled Item', icon: <EditIcon />, disabled: true },
        ],
      },
    ];
    
    render(<ContextMenu groups={groups} />);
    
    const item = screen.getByText('Disabled Item').closest('li');
    expect(item).toHaveStyle({ cursor: 'not-allowed', opacity: '0.5' });
  });

  it('applies danger variant styles', () => {
    render(<ContextMenu groups={mockGroups} />);
    
    const deleteItem = screen.getByText('Delete').closest('li');
    expect(deleteItem?.className).toContain('delete');
  });

  it('applies custom className', () => {
    const { container } = render(<ContextMenu groups={mockGroups} className="custom-class" />);
    
    expect(container.querySelector('.custom-class')).toBeInTheDocument();
  });

  it('renders single group without separator', () => {
    const singleGroup: ContextMenuGroupData[] = [
      {
        id: 'group-1',
        items: [
          { id: 'edit', label: 'Edit', icon: <EditIcon /> },
        ],
      },
    ];
    
    const { container } = render(<ContextMenu groups={singleGroup} />);
    
    const separators = container.querySelectorAll('[class*="separator"]');
    expect(separators).toHaveLength(0);
  });

  it('handles items without onClick', () => {
    const groups: ContextMenuGroupData[] = [
      {
        id: 'group-1',
        items: [
          { id: 'test', label: 'No Action', icon: <EditIcon /> },
        ],
      },
    ];
    
    render(<ContextMenu groups={groups} />);
    
    // Should not throw
    fireEvent.click(screen.getByText('No Action'));
  });

  it('applies accent variant to group', () => {
    const accentGroup: ContextMenuGroupData[] = [
      {
        id: 'group-1',
        variant: 'accent',
        items: [
          { id: 'test', label: 'Accent Item', icon: <EditIcon /> },
        ],
      },
    ];
    
    render(<ContextMenu groups={accentGroup} />);
    
    const list = screen.getByRole('list');
    expect(list.className).toContain('accent');
  });
});

