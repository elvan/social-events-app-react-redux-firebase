import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';

export default function App() {
  return (
    <>
      <h1>SocialEvents</h1>
      <Container className='main'>
        <EventDashboard />
      </Container>
    </>
  );
}
