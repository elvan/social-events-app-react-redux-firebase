import { useEffect, useRef, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import { QueryOptions } from '../../../app/hooks/firestore/types';
import { useFireStore } from '../../../app/hooks/firestore/useFirestore';
import { useAppSelector } from '../../../app/store/store';
import { actions } from '../eventSlice';
import EventFilters from './EventFilters';
import EventList from './EventList';
import EventListItemPlaceholder from './EventListItemPlaceholder';

export default function EventDashboard() {
  const contextRef = useRef(null);
  const { data: events, status } = useAppSelector((state) => state.events);
  const { loadCollection } = useFireStore('events');
  const [query, setQuery] = useState<QueryOptions[]>([
    { attribute: 'date', operator: '>=', value: new Date() },
  ]);

  useEffect(() => {
    loadCollection(actions, {
      queries: query,
    });
  }, [loadCollection, query]);

  return (
    <Grid>
      <Grid.Column width={10} ref={contextRef}>
        {status === 'loading' ? (
          <>
            <EventListItemPlaceholder />
            <EventListItemPlaceholder />
          </>
        ) : (
          <EventList events={events} />
        )}
      </Grid.Column>
      <Grid.Column width={6}>
        <div className='ui fixed top sticky' style={{ top: 98, width: 405 }}>
          <EventFilters setQuery={setQuery} />
        </div>
      </Grid.Column>
    </Grid>
  );
}
