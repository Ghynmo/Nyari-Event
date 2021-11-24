import React from 'react'
import './ticketSummary.css'

export default function TicketSummary() {
    return (
        <div className="buy-ticket p-3">
            <div className="title"><h4>TICKET SUMMARY</h4></div>
            <div className="price d-flex">
                <p className="buy-subtitle">Price</p>
                <p>$60</p>
            </div>
            <div className="payment d-flex align-items-baseline">
                <p className="buy-subtitle">Payment</p>
                <select className="p-1" name="payment" id="">
                    <option value="Gopay">Gopay</option>
                    <option value="OVO">OVO</option>
                    <option value="Dana">Dana</option>
                </select>
            </div>
            <button className="buy-btn w-100 p-2">BUY TICKET <span>(3)</span></button>
        </div>
    )
}
