import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import { useFireStore } from '../../../app/hooks/firestore/useFirestore';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useAppSelector } from '../../../app/store/store';
import { actions } from '../eventSlice';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedSidebar from './EventDetailedSidebar';

export default function EventDetailedPage() {
  const { id } = useParams();
  const event = useAppSelector((state) => state.events.data.find((e) => e.id === id));
  const { status } = useAppSelector((state) => state.events);
  const { loadDocument } = useFireStore('events');

  useEffect(() => {
    if (!id) return;
    loadDocument(id, actions);
  }, [id, loadDocument]);

  if (status === 'loading') return <LoadingComponent />;

  if (!event) return <h2>Event not found</h2>;

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader event={event} />
        <EventDetailedInfo event={event} />
        <EventDetailedChat eventId={event.id} />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSidebar event={event} />
      </Grid.Column>
    </Grid>
  );
}
