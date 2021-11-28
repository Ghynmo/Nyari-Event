import { gql } from '@apollo/client';

export const GetEvents = gql`
  query MyQuery {
      events {
        category
        date
        description
        event_contacts {
          name
          phone
          email
        }
        event_tags {
          tag
        }
        location
        pricing
        tickets {
          information
          price
          type
        }
        time
        title
      }
    }
`