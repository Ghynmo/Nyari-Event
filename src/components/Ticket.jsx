import React, { useEffect, useState } from 'react'
import './ticket.css'
import useTicket from '../hooks/useTicket'
import { useDispatch, useSelector } from 'react-redux'
import { CountingCart } from '../store/CartSlice'

const ticketState = [{
    id: 0,
    type: '',
    price: 0,
    information: ''
}]

export default function Ticket(props) {

    
    const {TicketEvent, TicketData} = useTicket()
    const [state, setstate] = useState(ticketState)
    // const [ticketCount, setticketCount] = useState([{}])
    const CartCounter = useSelector(state => state.CartCounter.CartCounter)
    
    const event_id = props.event_id
    
    const dispatch = useDispatch()

    useEffect(() => {
        TicketEvent({ 
            variables: {
                eventId: event_id
            }
        })
    }, [])

    useEffect(() => {
        setstate(TicketData?.ticket)
    }, [TicketData])
    
    // const ticketCounter = (e) => {
    //     setticketCount({
    //         ...ticketCount,
    //         [e.target.name]: e.target.value
    //     })
    // }

    return (
        <div className="side-ticket col-12 col-sm-3 p-2">
            {console.log(Object.keys(CartCounter)[1])}
            {console.log(CartCounter[Object.keys(CartCounter)[1]])}
            <h1>Get the Ticket </h1>
            <hr/>
            <div className="ticket-list">
                {state?.map(value => {return(
                    <div key={value.id} className="ticket row rounded-3 d-flex p-2 mb-3 align-items-end">
                        <div className="ticket-left col-3 col-sm-12 col-md-6 me-auto">
                            <p className="title">{value.type}</p>
                            <p className="price">${value.price}</p>
                        </div>
                        <div className="ticket-right col-3 col-sm-12 col-md-6">
                            <div className="quantity d-flex flex-column align-items-center">
                                <p className="mb-1">Quantity</p>
                                <div className="ticket-btn d-flex mb-3">
                                    {/* <button className="btn btn-light ticket-min" onClick={numberplus}>-</button>
                                    <div className="counter text-center" name={value.id} >{number}</div>
                                    <button className="btn btn-light ticket-add" onClick={numberplus}>+</button> */}
                                    <input type="number" name={value.type} className="w-100 form-control" min="0" 
                                    onChange={(e) => {dispatch(CountingCart([e.target.name, e.target.value]))}}/>
                                </div>
                            </div>
                            <select className="date form-select" name="date" id="">
                                <option value="date">Date</option>
                            </select>
                        </div>
                    </div>
                )})}
            </div>
            <button className="btn text-white get-ticket my-1 py-2 w-100">ADD TO CART</button>
        </div>
    )
}
