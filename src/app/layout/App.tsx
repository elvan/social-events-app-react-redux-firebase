import { useState } from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/dashboard/EventDashboard';
import { AppEvent } from '../types/event';
import NavBar from './nav/NavBar';

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<AppEvent | null>(null);

  function handleSelectEvent(event: AppEvent | null) {
    setSelectedEvent(event);
    setFormOpen(true);
  }

  function handleCreateFormOpen() {
    setSelectedEvent(null);
    setFormOpen(true);
  }

  return (
    <>
      <NavBar setFormOpen={handleCreateFormOpen} />
      <Container className='main'>
        <EventDashboard
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          selectedEvent={selectedEvent}
          selectEvent={handleSelectEvent}
        />
      </Container>
    </>
  );
}

export default App;
