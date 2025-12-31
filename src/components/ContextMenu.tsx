import React from 'react';
import { cn } from '../utils/cn';
import styles from './ContextMenu.module.css';

/** Visual variant for context menu items */
export type ContextMenuItemVariant = 'default' | 'danger' | 'accent';

/**
 * Configuration for a single context menu item.
 */
export interface ContextMenuItemData {
  /** Unique identifier for the item */
  id: string;
  /** Display text for the item */
  label: string;
  /** Icon element to display beside the label */
  icon: React.ReactNode;
  /** Visual variant - 'danger' shows destructive action styling */
  variant?: ContextMenuItemVariant;
  /** Callback fired when item is clicked */
  onClick?: () => void;
  /** Whether the item is disabled */
  disabled?: boolean;
}

/**
 * Configuration for a group of context menu items.
 */
export interface ContextMenuGroupData {
  /** Unique identifier for the group */
  id: string;
  /** Array of menu items in this group */
  items: ContextMenuItemData[];
  /** Visual variant for the group */
  variant?: 'default' | 'accent';
}

/**
 * Props for the ContextMenu component.
 */
export interface ContextMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Array of menu groups to display */
  groups: ContextMenuGroupData[];
  /** Whether to show separators between groups. Defaults to true. */
  showSeparators?: boolean;
}

/**
 * A styled context menu component with grouped items and separators.
 * Supports multiple item variants including default, danger, and accent.
 * 
 * @example
 * ```tsx
 * <ContextMenu
 *   groups={[
 *     {
 *       id: 'actions',
 *       items: [
 *         { id: 'edit', label: 'Edit', icon: <EditIcon />, onClick: handleEdit },
 *         { id: 'delete', label: 'Delete', icon: <TrashIcon />, variant: 'danger', onClick: handleDelete },
 *       ],
 *     },
 *   ]}
 * />
 * ```
 */
export const ContextMenu: React.FC<ContextMenuProps> = ({
  groups,
  showSeparators = true,
  className,
  ...props
}) => {
  return (
    <div className={cn(styles.card, className)} {...props}>
      {groups.map((group, groupIndex) => (
        <React.Fragment key={group.id}>
          <ContextMenuGroup
            group={group}
            isLastGroup={groupIndex === groups.length - 1}
          />
          {showSeparators && groupIndex < groups.length - 1 && (
            <ContextMenuSeparator />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

/**
 * Props for the ContextMenuGroup component.
 */
export interface ContextMenuGroupProps {
  /** Group configuration data */
  group: ContextMenuGroupData;
  /** Whether this is the last group (affects accent styling) */
  isLastGroup: boolean;
}

/**
 * Internal component for rendering a group of menu items.
 */
export const ContextMenuGroup: React.FC<ContextMenuGroupProps> = ({
  group,
  isLastGroup,
}) => {
  const isAccentGroup = group.variant === 'accent' || (isLastGroup && group.items.some(item => item.variant === 'accent'));
  
  return (
    <ul className={cn(styles.list, isAccentGroup && styles.accent)}>
      {group.items.map((item) => (
        <ContextMenuItem
          key={item.id}
          item={item}
          isAccentGroup={isAccentGroup}
        />
      ))}
    </ul>
  );
};

/**
 * Props for the ContextMenuItem component.
 */
export interface ContextMenuItemProps {
  /** Item configuration data */
  item: ContextMenuItemData;
  /** Whether this item is in an accent group */
  isAccentGroup: boolean;
}

/**
 * Internal component for rendering a single menu item.
 */
export const ContextMenuItem: React.FC<ContextMenuItemProps> = ({
  item,
  isAccentGroup: _isAccentGroup,
}) => {
  const variant = item.variant || 'default';
  const isDanger = variant === 'danger';

  const handleClick = () => {
    if (!item.disabled && item.onClick) {
      item.onClick();
    }
  };

  const renderIcon = () => {
    if (!item.icon) return null;
    
    if (React.isValidElement(item.icon)) {
      return React.cloneElement(item.icon as React.ReactElement<any>, {
        stroke: 'currentColor',
        width: 19,
        height: 19,
      });
    }
    
    return item.icon;
  };

  return (
    <li
      className={cn(
        styles.element,
        isDanger && styles.delete
      )}
      onClick={handleClick}
      style={{
        cursor: item.disabled ? 'not-allowed' : 'pointer',
        opacity: item.disabled ? 0.5 : 1,
      }}
    >
      {renderIcon()}
      <p className={styles.label}>{item.label}</p>
    </li>
  );
};

/**
 * Visual separator between context menu groups.
 */
export const ContextMenuSeparator: React.FC = () => {
  return <div className={styles.separator} />;
};

