import { gql } from '@apollo/client';

export const InsertComment = gql`
mutation MyMutation($comment: String!, $event_id: Int!, $user_id: Int!) {
  insert_comments_one(object: {comment: $comment, event_id: $event_id, user_id: $user_id}) {
    id
  }
}
`