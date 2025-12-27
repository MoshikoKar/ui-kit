import React from 'react';
import { cn } from '../utils/cn';
import styles from './ContextMenu.module.css';

export type ContextMenuItemVariant = 'default' | 'danger' | 'accent';

export interface ContextMenuItemData {
  id: string;
  label: string;
  icon: React.ReactNode;
  variant?: ContextMenuItemVariant;
  onClick?: () => void;
  disabled?: boolean;
}

export interface ContextMenuGroupData {
  id: string;
  items: ContextMenuItemData[];
  variant?: 'default' | 'accent';
}

export interface ContextMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  groups: ContextMenuGroupData[];
  showSeparators?: boolean;
}

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

export interface ContextMenuGroupProps {
  group: ContextMenuGroupData;
  isLastGroup: boolean;
}

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

export interface ContextMenuItemProps {
  item: ContextMenuItemData;
  isAccentGroup: boolean;
}

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

export const ContextMenuSeparator: React.FC = () => {
  return <div className={styles.separator} />;
};

