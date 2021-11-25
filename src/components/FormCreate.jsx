import React, { useState, useEffect } from 'react'
import './formCreate.css'

export default function FormCreate() {

    const initialState = {
        title: '',
        category: '',
        tag: [],
        date: '',
        time: 0,
        location: '',
        contact: {
            name: '',
            email: '',
            phone: 0
        },
        price: false,
        ticket: [{}],
        description: ''
    }
    
    const [data, setdata] = useState(initialState)
    const [today, settoday] = useState('')

    useEffect(() => {
        var getDate = new Date();
        settoday (getDate.getFullYear()+'-'+(getDate.getMonth()+1)+'-'+getDate.getDate())
    }, [])


    const onChangeHandle = (e) => {
        setdata({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="event-form col-sm-10">
            {/* {console.log(data)} */}
            
            <h3 className="col-sm-12">Create New Event</h3>
            <div>
                <form action="">
                    <div className="choose-img col-sm-12 d-flex align-items-center justify-content-center">
                        <input type="file"/>
                    </div>
                    
                    <div className="col-sm-6 d-flex flex-column pb-4">
                        <label htmlFor="">Title</label>
                        <input type="text" name="title" onChange={onChangeHandle}/>
                    </div>

                    <div className="d-flex pb-4">
                        <div className="col-sm-6 d-flex flex-column">
                            <label htmlFor="">Tag</label>
                            <input type="text" name="tag" onChange={onChangeHandle}/>
                        </div>
                        <div className="col-sm-3 d-flex flex-column ms-4">
                            <label htmlFor="">Category</label>
                            <select name="category" id="" onChange={onChangeHandle}>
                                <option defaultValue="Category" disabled hidden>Category</option>
                                <option value="None">None</option>
                                <option value="Music">Music</option>
                                <option value="Game">Game</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="row d-flex justify-content-start pb-4">
                        <div className="col-12 col-sm-3 d-flex flex-column">
                            <label htmlFor="">Date</label>
                            <input type="date" min={today} name="date" onChange={onChangeHandle}/>
                        </div>
                        <div className="col-12 col-sm-3 d-flex flex-column">
                            <label htmlFor="">Time</label>
                            <input type="time" name="time" onChange={onChangeHandle}/>
                        </div>
                    </div>

                    <div className="col-sm-6 d-flex flex-column pb-4">
                        <label htmlFor="">Location</label>
                        <input type="text"/>
                    </div>

                    <div className="d-flex flex-column pb-4">Contact Person
                        <div className="row d-flex justify-content-start">
                            <div className="col-12 col-sm-3 d-flex flex-column">
                                <label htmlFor="">Name</label>
                                <input type="text"/>
                            </div>
                            <div className="col-12 col-sm-3 d-flex flex-column">
                                <label htmlFor="">Email</label>
                                <input type="text"/>
                            </div>
                            <div className="col-12 col-sm-3 d-flex flex-column">
                                <label htmlFor="">Phone</label>
                                <input type="text"/>
                            </div>
                        </div>
                    </div>

                    <div className="pb-4">
                        <div className="pricing">
                            <label>Pricing</label>
                            <input type="radio"/><label htmlFor="">Free</label>
                            <input type="radio"/><label htmlFor="">Paid</label>
                        </div>
                        <div>Ticket List
                            <table>
                                <thead>
                                    <tr>
                                        <th className="col-sm-2 pe-3">No</th>
                                        <th className="col-sm-4 pe-3">Ticket Type</th>
                                        <th className="col-sm-4 pe-3">Information</th>
                                        <th className="col-sm-2 pe-3">Price</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr className="">
                                        <td className="col-sm-2">1</td>
                                        <td className="col-sm-4">VVIP</td>
                                        <td className="col-sm-4">null</td>
                                        <td className="col-sm-2">$25</td>
                                    </tr>
                                    <tr className="">
                                        <td className="col-sm-2">2</td>
                                        <td className="col-sm-4">VIP</td>
                                        <td className="col-sm-4">null</td>
                                        <td className="col-sm-2">$25</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="col-sm-12 d-flex flex-column pb-4">
                        <label htmlFor="">Description</label>
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
