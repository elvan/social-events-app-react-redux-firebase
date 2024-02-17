import { doc, setDoc } from 'firebase/firestore';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu, MenuItem } from 'semantic-ui-react';
import { sampleData } from '../../api/sampleData';
import { db } from '../../config/firebase';
import { useAppSelector } from '../../store/store';
import SignedInMenu from './SignedInMenu';
import SignedOutButtons from './SignedOutButtons';

export default function NavBar() {
  const { authenticated } = useAppSelector((state) => state.auth);

  function seedData() {
    sampleData.forEach(async (event) => {
      const { id, ...rest } = event;
      await setDoc(doc(db, 'events', id), {
        ...rest,
      });
    });
  }

  return (
    <Menu inverted={true} fixed='top'>
      <Container>
        <MenuItem header as={NavLink} to='/'>
          <img src='/logo.png' alt='logo' />
          SocialEvents
        </MenuItem>
        <MenuItem name='Events' as={NavLink} to='/events' />
        <MenuItem name='Scratch' as={NavLink} to='/scratch' />
        <MenuItem>
          <Button
            as={NavLink}
            to='/createEvent'
            floated='right'
            positive={true}
            inverted={true}
            content='Create event'
          />
        </MenuItem>
        {import.meta.env.DEV && (
          <MenuItem>
            <Button inverted={true} color='teal' content='Seed data' onClick={seedData} />
          </MenuItem>
        )}
        {authenticated ? <SignedInMenu /> : <SignedOutButtons />}
      </Container>
    </Menu>
  );
}
