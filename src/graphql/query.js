import { gql } from '@apollo/client';

export const Info = gql`
query MyQuery($id: Int!) {
  events_by_pk(id: $id) {
    id
    likes
    location
    banner
    date
    description
    time
    title
    event_contacts {
      email
      name
      phone
    }
  }
}

`

export const Ticket = gql`
query MyQuery($eventId: Int!) {
  ticket(where: {events_id: {_eq: $eventId}}) {
    id
    information
    price
    type
  }
}

`

export const Comments = gql`
query MyQuery($event_id: Int!) {
  comments(where: {event_id: {_eq: $event_id}}) {
    id
    comment
    user {
      name
    }
  }
}

`