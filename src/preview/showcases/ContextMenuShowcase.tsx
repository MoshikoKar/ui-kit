import React from 'react';
import { ContextMenu } from '../../components/ContextMenu';
import { ShowcaseSection } from '../layout/ShowcaseSection';

const contextMenuGroups = [
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
];

export const ContextMenuShowcase: React.FC = () => {
  return (
    <ShowcaseSection
      title="Context Menu"
      description="Right-click context menus with grouped actions and icons"
      id="context-menu"
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-text-primary">Action Menu</h3>
          <div className="flex justify-center">
            <ContextMenu groups={contextMenuGroups} />
          </div>
        </div>
      </div>
    </ShowcaseSection>
  );
};

