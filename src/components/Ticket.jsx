import React from 'react'
import './ticket.css'

export default function Ticket() {
    return (
        <div className="side-ticket col-12 col-sm-3 p-2">
            <h1>Get the Ticket</h1>
            <hr/>
            <div className="ticket-list">
                <div className="ticket row rounded-3 d-flex p-2 mb-3">
                    <div className="ticket-left col-3 col-sm-12 col-md-6 me-auto">
                        <p className="title">Type1</p>
                        <p className="price">$35</p>
                    </div>
                    <div className="ticket-right col-3 col-sm-12 col-md-6">
                        <div className="quantity d-flex flex-column align-items-center">
                            <p className="mb-1">Quantity</p>
                            <div className="ticket-btn d-flex mb-3">
                                <button className="btn btn-light ticket-min">-</button>
                                <div className="counter text-center">1</div>
                                <button className="btn btn-light ticket-add">+</button>
                            </div>
                        </div>
                        <select className="date form-select" name="date" id="">
                            <option value="date">Date</option>
                        </select>
                    </div>
                </div>
            </div>
            <button className="btn text-white get-ticket my-1 py-2 w-100">ADD TO CART</button>
        </div>
    )
}
