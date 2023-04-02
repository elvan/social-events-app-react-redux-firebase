import React from 'react';
import { Tab } from 'semantic-ui-react';

export default function ProfileContent({ profile, isCurrentUser }) {
  const panes = [
    {
      menuItem: 'About',
      render: () => 'AboutTab',
    },
    { menuItem: 'Photos', render: () => <Tab.Pane>Photos</Tab.Pane> },
    { menuItem: 'Events', render: () => <Tab.Pane>Events</Tab.Pane> },
    { menuItem: 'Followers', render: () => <Tab.Pane>Followers</Tab.Pane> },
    { menuItem: 'Following', render: () => <Tab.Pane>Following</Tab.Pane> },
  ];

  return (
    <Tab
      menu={{ fluid: true, vertical: true }}
      menuPosition='right'
      panes={panes}
    />
  );
}
