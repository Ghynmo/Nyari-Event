import { gql } from '@apollo/client';

<<<<<<< HEAD
export const GetEvent = gql`
  query MyQuery {
    events(limit: 10) {
      id
      title
      location
      time
      date
      banner
      tickets {
        price
      }
    }
  }
`

export const GetHotEvent = gql`
  query MyQuery {
    events(order_by: {likes: desc_nulls_last}, limit: 5) {
      id
      title
      date
      banner
      likes
    }
  }
`

// query MyQuery {
//   events(where: {category: {_eq: "Music"}}) {
//     id
//   }
// }

export const Filter = gql`
  query MyQuery($where: events_bool_exp = {}) {
    events(where: $where) {
      id
      title
      location
      time
      date
      banner
      tickets {
        price
      }
    }
  }
`

export const Search = gql`
  query MyQuery($title: String = "") {
    events(where: {title: {_iregex: $title}}) {
      id
      title
      location
      time
      date
      banner
      tickets {
        price
      }
    }
  }
`
=======
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
>>>>>>> create_event
