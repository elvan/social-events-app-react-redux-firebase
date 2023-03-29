import { Grid } from 'semantic-ui-react';
import { sampleData } from '../../../app/api/sampleData';
import EventList from './EventList';

export default function EventDashboard() {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={sampleData} />
      </Grid.Column>
      <Grid.Column width={6}>EventForm</Grid.Column>
    </Grid>
  );
}
