import { gql } from '@apollo/client';

export const Comments = gql`
subscription MySubscription($event_id: Int!) {
  comments(where: {event_id: {_eq: $event_id}}) {
    comment
    user {
      name
      photo
    }
    id
  }
}
`