import { Grid } from 'semantic-ui-react';
import { useAppSelector } from '../../../app/store/store';
import EventList from './EventList';

export default function EventDashboard() {
  const { events } = useAppSelector((state) => state.events);

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Filters</h2>
      </Grid.Column>
    </Grid>
  );
}
