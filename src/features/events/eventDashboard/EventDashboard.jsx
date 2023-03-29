import { Grid } from 'semantic-ui-react';

export default function EventDashboard() {
  return (
    <Grid>
      <Grid.Column width={10}>EventList</Grid.Column>
      <Grid.Column width={6}>EventForm</Grid.Column>
    </Grid>
  );
}
