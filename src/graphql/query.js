import { gql } from '@apollo/client';

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
