import { gql } from '@apollo/client';

export const InsertEvent = gql`
mutation MyMutation($object: events_insert_input = {}) {
  insert_events_one(object: $object) {
    id
  }
}
`