import React from 'react'
import './ticket.css'

export default function Ticket() {
    return (
        <div className="side-ticket p-2 text-center w-25">
            <h1>Get the Ticket</h1>
            <hr/>
            <div className="ticket-list">
                <div className="ticket d-flex p-2 mb-3">
                    <div className="ticket-left me-auto">
                        <p className="title">VVIP</p>
                        <p className="price">$35</p>
                    </div>
                    <div className="ticket-right">
                        <div className="quantity">
                            <p className="mb-1">Quantity</p>
                            <div className="ticket-btn d-flex mb-3">
                                <button className="ticket-min">-</button>
                                <div className="counter">1</div>
                                <button className="ticket-add">+</button>
                            </div>
                        </div>
                        <select className="date" name="date" id="">
                            <option value="date">Date</option>
                        </select>
                    </div>
                </div>
                <div className="ticket d-flex p-2 mb-3">
                    <div className="ticket-left me-auto">
                        <p className="title">VIP</p>
                        <p className="price">$25</p>
                    </div>
                    <div className="ticket-right">
                        <div className="quantity">
                            <p className="mb-1">Quantity</p>
                            <div className="ticket-btn d-flex mb-3">
                                <button className="ticket-min">-</button>
                                <div className="counter">1</div>
                                <button className="ticket-add">+</button>
                            </div>
                        </div>
                        <select className="date" name="date" id="">
                            <option value="date">Date</option>
                        </select>
                    </div>
                </div>
            </div>
            <button className="get-ticket my-1 py-2 w-100">ADD TO CART</button>
        </div>
    )
}
