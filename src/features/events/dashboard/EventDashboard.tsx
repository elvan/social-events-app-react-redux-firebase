import { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import { useFireStore } from '../../../app/hooks/firestore/useFirestore';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useAppSelector } from '../../../app/store/store';
import { actions } from '../eventSlice';
import EventList from './EventList';

export default function EventDashboard() {
  const { data: events, status } = useAppSelector((state) => state.events);
  const { loadCollection } = useFireStore('events');

  useEffect(() => {
    loadCollection(actions);
  }, [loadCollection]);

  if (status === 'loading') return <LoadingComponent />;

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
