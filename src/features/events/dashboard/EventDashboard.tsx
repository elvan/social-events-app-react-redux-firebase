import { useEffect, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import { sampleData } from '../../../app/api/sampleData';
import { AppEvent } from '../../../app/types/event';
import EventForm from '../form/EventForm';
import EventList from './EventList';

type Props = {
  formOpen: boolean;
  setFormOpen: (value: boolean) => void;
};

export default function EventDashboard({ formOpen, setFormOpen }: Props) {
  const [events, setEvents] = useState<AppEvent[]>([]);

  useEffect(() => {
    setEvents(sampleData);
  }, []);

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width={6}>{formOpen && <EventForm setFormOpen={setFormOpen} />}</Grid.Column>
    </Grid>
  );
}
