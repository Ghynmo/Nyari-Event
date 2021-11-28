import React, { useState, useEffect } from 'react'
import useInsertEvent from '../hooks/useInsertEvent'
// import MapsAPI from './MapsAPI'
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
        pricing: false,
        ticket: [],
        description: ''
    }
    
    const {insertEvent, loadingInsert} = useInsertEvent()
    
    const [data, setdata] = useState(initialState)
    const [today, settoday] = useState('')
    const [array, setarray] = useState([])
    const [object, setobject] = useState({
        ticketID:'',
        ticketType:'',
        ticketPrice:0,
        ticketInfo:'',
    })
    const [tagCounter, settagCounter] = useState(1)
    const [ticketCounter, setticketCounter] = useState(1)
    const [getDate, setgetDate] = useState(null)
    
    
    useEffect(() => {
        var getDate = new Date();
        settoday (getDate.getFullYear()+'-'+(getDate.getMonth()+1)+'-'+getDate.getDate())
    }, [])
    
    useEffect(() => {
        let date = new Date(data.date)
        console.log(date.getDate())
        console.log(date.getMonth()+1)
        console.log(date.getFullYear())
        setgetDate(date)
    }, [data.date])
    
    if (loadingInsert){
        return <h3>Loading...</h3>
    }
    
    const onChangeHandle = (e) => {
        e.preventDefault()
        setdata({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const onChangeArray = (e) => {
        e.preventDefault()
        setarray([
            e.target.value
        ])
    }

    const onClickTag = (e) => {
        e.preventDefault()
        if (array[0] !== undefined){
            setdata((prevState) =>({
                ...prevState,
                tag: [...prevState.tag,{
                    id: tagCounter,
                    tagValue: array[0]
                }]
            }))
            settagCounter(tagCounter+1)
            setarray([])
        } else{
            console.log('Tag Must be filled')
        }
    }

    const deleteTag = (id) => {
        const newTag = data.tag.filter((item)=>item.id !== id)
        setdata({
            ...data,
            tag: newTag
        })
    }

    const onChangeContact = (e) => {
        e.preventDefault()
        setdata((prevState) =>({
            ...prevState,
            contact: {
                ...prevState.contact,
                [e.target.name]: e.target.value
            }
        }))
    }

    const onChangeTickets = (e) => {
        e.preventDefault()
        setobject({
            ...object,
            [e.target.name]: e.target.value
        })
    }

    const addTicket = (e) => {
        e.preventDefault()
        setdata((prevState) =>({
            ...prevState,
            ticket: [...prevState.ticket,{
                ticketID: ticketCounter,
                ticketType: object.ticketType,
                ticketPrice: object.ticketPrice,
                ticketInfo: object.ticketInfo
            }
            ]
        }))
        setticketCounter(ticketCounter+1)
    }

    const deleteTicket = (id) => {
        const newTicket = data.ticket.filter((item)=>item.ticketID !== id)
        setdata({
            ...data,
            ticket: newTicket
        })
    }

    const saveEvents = (e) => {
        e.preventDefault()
        insertEvent({
            variables:{
                object:{
                    title: data.title,
                    category: data.category,
                    event_tags: {data: {tag: data.tag,}},
                    date: data.date,
                    time: data.time,
                    location: data.location,
                    event_contacts: {data: {
                        name: data.contact.name,
                        email: data.contact.email,
                        phone: data.contact.phone,
                    }},
                    pricing: data.pricing,
                    // type: object.ticketType,
                    // price: object.ticketPrice,
                    // information: object.ticketInfo,
                    description: data.description,
                }
            }
        })
        console.log(
            data.title,
            data.category,
            data.tag,
            data.date,
            data.time,
            data.location,
            data.contact.name,
            data.contact.email,
            data.contact.phone,
            data.pricing,
            object.ticketType,
            object.ticketPrice,
            object.ticketInfo,
            data.description,
        )
    }

    return (
        <div className="event-form col-sm-10">
            {console.log(data)}
            
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
                            <div className="d-flex mb-1">
                                <input className="form-control" type="text" value={array} name="tag" onChange={onChangeArray}/>
                                <button className="btn btn-warning h-100 w-25" type="button" onClick={onClickTag}>Enter</button>
                            </div>
                            <div>
                                {(data.tag).map((val)=>
                                        <div className="btn btn-sm btn-secondary m-1" key={val.id}>
                                            {val.tagValue}
                                            <button className="btn btn-sm btn-dark ms-2 text-white-50" onClick={()=>{deleteTag(val.id)}}>X</button>
                                        </div>
                                )}
                            </div>
                        </div>
                        <div className="col-sm-3 d-flex flex-column ms-4">
                            <label className="form-label" htmlFor="">Category</label>
                            <select className="form-select" name="category" id="" onChange={onChangeHandle}>
                                <option defaultValue="Category" disabled hidden>Category</option>
                                <option value="">None</option>
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
                                <input className="form-check-input" name="pricing" id="flexRadioDefault1" value="false" type="radio" defaultChecked/>
                                <label className="form-check-label" htmlFor="flexRadioDefault1">Free</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" name="pricing" id="flexRadioDefault2" value="true" type="radio"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault2">Paid</label>
                            </div>
                        </div>
                        <div>Ticket List
                            <table className="table table-bordered text-center">
                                <thead className="table-dark text-white">
                                    <tr>
                                        <th className="col-sm-4 pe-3">Ticket Type</th>
                                        <th className="col-sm-2 pe-3">Price $</th>
                                        <th className="col-sm-4 pe-3">Information</th>
                                        <th className="col-sm-2 pe-3"></th>
                                    </tr>
                                </thead>

                                <tbody>
                                {data?.ticket.map(ticket=> 
                                    <tr key={ticket.ticketID}>
                                        <td className="col-sm-4">{ticket.ticketType}</td>
                                        <td className="col-sm-2">{ticket.ticketPrice}</td>
                                        <td className="col-sm-4">{ticket.ticketInfo}</td>
                                        <td className="col-sm-2">
                                            <button className="btn btn-warning me-2">Edit</button>
                                            <button className="btn btn-danger" onClick={()=>{deleteTicket(ticket.ticketID)}}>Delete</button>
                                        </td>
                                    </tr>
                                    )}
                                </tbody>
                            </table>
                            <table>
                                <thead>
                                    <tr className="table table-borderless text-center">
                                        <th className="col-sm-4"><input className="form-control" type="text" placeholder="Example: VIP" name="ticketType" onChange={onChangeTickets}/></th>
                                        <th className="col-sm-2"><input className="form-control" type="number" min="0" step="0.1" name="ticketPrice" onChange={onChangeTickets}/></th>
                                        <th className="col-sm-4"><textarea className="form-control" cols="30" rows="1" name="ticketInfo" onChange={onChangeTickets}/></th>
                                        <th className="col-sm-2"><button className="btn btn-primary" onClick={addTicket}>Add Ticket</button></th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>

                    <div className="col-sm-12 d-flex flex-column pb-4">
                        <label className="form-label" htmlFor="">Description</label>
                        <textarea className="form-control" name="description" id="" cols="30" rows="10" onChange={onChangeHandle}></textarea>
                    </div>

                    {/* <MapsAPI/> */}

                    <div className="text-end">
                        <button className="btn btn-primary" type="submit" onClick={saveEvents}>Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
