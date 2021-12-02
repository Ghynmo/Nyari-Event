import React, { useState } from 'react'
import AccordionTicket from '../components/AccordionTicket'
import TicketSummary from '../components/TicketSummary'

export default function Cart() {

    return (
        <div className="mx-5 p-4">
            <div className="ticket-cart row d-flex">
                <AccordionTicket/>
                <TicketSummary/>
            </div>
        </div>
    )
}
