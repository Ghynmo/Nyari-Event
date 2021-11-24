import React from 'react'
import './formCreate.css'

export default function FormCreate() {
    return (
        <div className="event-form mb-5">
            <h3>Create New Event</h3>
            <div>
                <form action="">
                    <div className="choose-img d-flex align-items-center justify-content-center">
                        <input type="file"/>
                    </div>
                    
                    <div className="d-flex flex-column pb-4">
                        <label for="">Title</label>
                        <input type="text"/>
                    </div>
                    
                    <div className="d-flex justify-content-start pb-4">
                        <div className="d-flex flex-column me-5">
                            <label for="">Category</label>
                            <input type="text"/>
                        </div>
                        <div className="d-flex flex-column">
                            <label for="">Tag</label>
                            <input type="text"/>
                        </div>
                    </div>
                    
                    <div className="d-flex justify-content-start pb-4">
                        <div className="d-flex flex-column me-5">
                            <label for="">Date</label>
                            <input type="text"/>
                        </div>
                        <div className="d-flex flex-column">
                            <label for="">Time</label>
                            <input type="text"/>
                        </div>
                    </div>

                    <div className="d-flex flex-column pb-4">
                        <label for="">Location</label>
                        <input type="text"/>
                    </div>

                    <div className="d-flex flex-column pb-4">Contact Person
                        <div className="d-flex justify-content-around">
                            <div className="d-flex flex-column">
                                <label for="">Name</label>
                                <input type="text"/>
                            </div>
                            <div className="d-flex flex-column">
                                <label for="">Email</label>
                                <input type="text"/>
                            </div>
                            <div className="d-flex flex-column">
                                <label for="">Phone</label>
                                <input type="text"/>
                            </div>
                        </div>
                    </div>

                    <div className="pb-4">
                        <div className="pricing">
                            <label>Pricing</label>
                            <input type="radio"/><label for="">Free</label>
                            <input type="radio"/><label for="">Paid</label>
                        </div>
                        <div>Ticket List
                            <table>
                                <tr>
                                    <th>No</th>
                                    <th>Ticket Type</th>
                                    <th>Information</th>
                                    <th>Price</th>
                                </tr>

                                <tr>
                                    <td>1</td>
                                    <td>VVIP</td>
                                    <td>null</td>
                                    <td>$25</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>VIP</td>
                                    <td>null</td>
                                    <td>$15</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div className="d-flex flex-column pb-4">
                        <label for="">Description</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>

                    <div className="text-end">
                        <button type="submit">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
