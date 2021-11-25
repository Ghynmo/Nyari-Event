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
        ticket: [{
            ticketType: '',
            price: 0,
            information: ''
        }],
        description: ''
    }
    
    const [data, setdata] = useState(initialState)
    const [today, settoday] = useState('')
    const [array, setarray] = useState([])

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

    const onChangeTag = (e) => {
        setarray([
            e.target.value
        ])
    }

    const onClickTag = (e) => {
        e.preventDefault()
        setdata((prevState) =>({
            ...prevState,
            tag: [
                ...prevState.tag,
                array[0]  
            ]
        }))
        setarray([])
    }

    const onChangeContact = (e) => {
        setdata((prevState) =>({
            ...prevState,
            contact: {
                ...prevState.contact,
                [e.target.name]: e.target.value
            }
        }))
    }

    return (
        <div className="event-form col-sm-10">
            {console.log(data.tag)}
            {/* {console.log(array)} */}
            
            <h3 className="col-sm-12">Create New Event</h3>
            <div>
                <form action="">
                    <div className="choose-img col-sm-12 d-flex align-items-center justify-content-center">
                        <input className="form-control w-50" type="file" id="formFile"/>
                    </div>
                    
                    <div className="col-sm-6 d-flex flex-column pb-4">
                        <label className="form-label" htmlFor="">Title</label>
                        <input className="form-control" type="text" name="title" onChange={onChangeHandle}/>
                    </div>

                    <div className="d-flex pb-4">
                        <div className="col-sm-4 d-flex flex-column">
                            <label className="form-label" htmlFor="">Tag</label>
                            <input className="form-control" type="text" value={array} name="tag" onChange={onChangeTag}/>
                        </div>
                        <button className="btn btn-warning" type="button" onClick={onClickTag} onKeyPress={e=>e.key === 'enter'? {onClickTag}:console.log('hehehS')}>Enter</button>
                        {(data.tag).map((val, idx)=> <button key={idx}>{val}</button>)}
                        <div className="col-sm-3 d-flex flex-column ms-4">
                            <label className="form-label" htmlFor="">Category</label>
                            <select className="form-select" name="category" id="" onChange={onChangeHandle}>
                                <option defaultValue="Category" disabled hidden>Category</option>
                                <option value="None">None</option>
                                <option value="Music">Music</option>
                                <option value="Game">Game</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="row d-flex justify-content-start pb-4">
                        <div className="col-12 col-sm-6 d-flex flex-column">
                            <label className="form-label" htmlFor="">Date</label>
                            <input className="form-control" type="date" min={today} name="date" onChange={onChangeHandle}/>
                        </div>
                        <div className="col-12 col-sm-6 d-flex flex-column">
                            <label className="form-label" htmlFor="">Time</label>
                            <input className="form-control" type="time" name="time" onChange={onChangeHandle}/>
                        </div>
                    </div>

                    <div className="col-sm-6 d-flex flex-column pb-4">
                        <label className="form-label" htmlFor="">Location</label>
                        <input className="form-control" type="text" name="location" onChange={onChangeHandle}/>
                    </div>

                    <div className="d-flex input-group flex-column pb-4">Contact Person
                        <div className="row d-flex justify-content-start">
                            <div className="col-12 col-sm-4 d-flex flex-column">
                                <label className="form-label" htmlFor="">Name</label>
                                <input className="form-control" type="text" name="name" onChange={onChangeContact}/>
                            </div>
                            <div className="col-12 col-sm-4 d-flex flex-column">
                                <label className="form-label" htmlFor="">Email</label>
                                <input className="form-control" type="email" name="email" onChange={onChangeContact}/>
                            </div>
                            <div className="col-12 col-sm-4 d-flex flex-column">
                                <label className="form-label" htmlFor="">Phone</label>
                                <input className="form-control" type="phone" name="phone" onChange={onChangeContact}/>
                            </div>
                        </div>
                    </div>

                    <div className="pb-4">
                        <div className="pricing d-flex">
                            <p className="me-3">Pricing</p>
                            <div className="form-check">
                                <input className="form-check-input" name="pricing" id="flexRadioDefault1" value="false" onChange={onChangeContact} type="radio" defaultChecked/>
                                <label className="form-label" htmlFor="flexRadioDefault1">Free</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" name="pricing" id="flexRadioDefault2" value="true" onChange={onChangeContact} type="radio"/>
                                <label className="form-label" htmlFor="flexRadioDefault2">Paid</label>
                            </div>
                        </div>
                        <div>Ticket List
                            <table className="table table-bordered text-center">
                                <thead className="table-dark text-white">
                                    <tr>
                                        <th className="col-sm-1 pe-3">No</th>
                                        <th className="col-sm-4 pe-3">Ticket Type</th>
                                        <th className="col-sm-2 pe-3">Price $</th>
                                        <th className="col-sm-5 pe-3">Information</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr className="">
                                        <td className="col-sm-1">1</td>
                                        <td className="col-sm-4"><input className="form-control" type="text"/></td>
                                        <td className="col-sm-2"><input className="form-control" type="number" min="0" step="0.1"/></td>
                                        <td className="col-sm-5"><textarea className="form-control" cols="30" rows="2"/></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="w-100 text-end">
                                <button className="btn btn-primary">Add Ticket</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 d-flex flex-column pb-4">
                        <label className="form-label" htmlFor="">Description</label>
                        <textarea className="form-control" name="" id="" cols="30" rows="10"></textarea>
                    </div>

                    <div className="text-end">
                        <button className="btn btn-primary" type="submit">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
