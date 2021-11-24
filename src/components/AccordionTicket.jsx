import React from 'react'
import './accordionTicket.css'

export default function AccordionTicket() {
    return (
        <div className="accordion me-5" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        <h4 className="ticket-title">MUSIC FEST 2021</h4>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show text-center" aria-labelledby="panelsStayOpen-headingOne">
                    <div className="accordion-body">
                        <div className="ticket d-flex p-2 mb-3 align-items-center">
                            <div className="ticket-left me-auto">
                                <div className="d-flex">
                                    <p className="sub-ticket-title">Type</p>
                                    <p className="title">VIP</p>
                                </div>
                                <div className="d-flex">
                                    <p className="sub-ticket-title">Price</p>
                                    <p className="price">$25</p>
                                </div>
                                <div className="d-flex"></div>
                                <select className="date" name="date" id="">
                                    <option value="date">Select Date</option>
                                </select>
                            </div>
                            <div className="ticket-right d-flex flex-column align-items-center text-center">
                                <div className="quantity">
                                    <p className="mb-1">Quantity</p>
                                    <div className="ticket-btn d-flex mb-3">
                                        <button className="ticket-min">-</button>
                                        <div className="counter">1</div>
                                        <button className="ticket-add">+</button>
                                    </div>
                                </div>
                                <button className="delete-btn p-1">Delete</button>
                            </div>
                        </div>
                        <hr className="mb-0"/>
                    </div>
                    <button className="add-ticket p-1 mb-3">+ Add Ticket</button>
                </div>
            </div>
        </div>
    )
}
