import React from 'react'
import AccordionTicket from '../components/AccordionTicket'
import TicketSummary from '../components/TicketSummary'

export default function Cart() {
    return (
        <div class="mx-5 p-4">
            <div class="ticket-cart d-flex">
                <AccordionTicket/>
                <TicketSummary/>
            </div>
        </div>
    )
}
