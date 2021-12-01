import { useLazyQuery } from "@apollo/client"
import { Ticket } from "../graphql/query"

export default function useTicket() {
    const [TicketEvent, {data: TicketData, loading: TicketLoading, error: TicketError}] = useLazyQuery(Ticket)
    
    return {
        TicketEvent, TicketData, TicketLoading, TicketError
    }
}