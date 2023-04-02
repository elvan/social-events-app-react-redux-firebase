import React, { useState } from 'react';
import { Header, Segment } from 'semantic-ui-react';
import EventDetailedChatForm from './EventDetailedChatForm';

export default function EventDetailedChat({ eventId }) {
  const [showReplyForm, setShowReplyForm] = useState({
    open: false,
    commentId: null,
  });

  return (
    <>
      <Segment
        textAlign='center'
        attached='top'
        inverted
        color='teal'
        style={{ border: 'none' }}
      >
        <Header>Chat about this event</Header>
      </Segment>

      <Segment attached>
        <EventDetailedChatForm
          eventId={eventId}
          parentId={0}
          closeForm={setShowReplyForm}
        />
      </Segment>
    </>
  );
}
