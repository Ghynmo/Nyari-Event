import React from 'react'
import AccordionTicket from '../components/AccordionTicket'
import TicketSummary from '../components/TicketSummary'
import Navbar from '../components/Navbar'


export default function Cart() {

    return (
        <div>
            <Navbar/>
            <div className="mx-5 mt-5 pt-5 p-4">
                <div className="ticket-cart row d-flex">
                    <AccordionTicket/>
                    <TicketSummary/>
                </div>
            </div>
        </div>
    )
}
