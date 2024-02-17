import { Tab, TabPane } from 'semantic-ui-react';
import { Profile } from '../../app/types/profile';
import ProfileAbout from './ProfileAbout';
import ProfileEvents from './ProfileEvents';
import ProfilePhotos from './ProfilePhotos';

type Props = {
  profile: Profile;
};

export default function ProfileContent({ profile }: Props) {
  const panes = [
    { menuItem: 'About', render: () => <ProfileAbout profile={profile} /> },
    { menuItem: 'Photos', render: () => <ProfilePhotos profile={profile} /> },
    { menuItem: 'Events', render: () => <ProfileEvents profile={profile} /> },
    { menuItem: 'Followers', render: () => <TabPane>Followers</TabPane> },
    { menuItem: 'Following', render: () => <TabPane>Following</TabPane> },
  ];

  return <Tab menu={{ fluid: true, vertical: true }} menuPosition='right' panes={panes} />;
}
