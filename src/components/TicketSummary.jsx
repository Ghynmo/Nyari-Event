import React from 'react'
import './ticketSummary.css'

export default function TicketSummary() {
    return (
        <div className="buy-ticket card col-12 col-sm-2 p-3">
            <div className="title"><h4>TICKET SUMMARY</h4></div>
            <div className="price d-flex">
                <p className="buy-subtitle">Price</p>
                <p>$60</p>
            </div>
            <div className="payment d-flex align-items-baseline">
                <p className="buy-subtitle">Payment</p>
                <select className="p-1 form-select" name="payment" id="">
                    <option value="Gopay">Gopay</option>
                    <option value="OVO">OVO</option>
                    <option value="Dana">Dana</option>
                </select>
            </div>
            <button className="buy-btn btn w-100 p-2">BUY TICKET <span>(3)</span></button>
        </div>
    )
}
