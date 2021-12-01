import React, { useState, useEffect } from 'react'
import './accordionTicket.css'
import { useDispatch } from 'react-redux'
import { TotalCart } from '../store/CartTotal'

const initialState = [{
    Event_id: 1,
    title: 'Music Fest 2021',
    ticket: [
        {
            id: 1,
            type: 'VVIP',
            price: 35,
            quantity: 3
        },
        {
            id: 2,
            type: 'VIP',
            price: 25,
            quantity: 1
        },
    ]
},
{
    Event_id: 2,
    title: 'FIFA 19',
    ticket: [
        {
            id: 3,
            type: 'Normal',
            price: 15,
            quantity: 2
        },
        {
            id: 4,
            type: 'Premier',
            price: 20,
            quantity: 1
        },
    ]
},
]

export default function AccordionTicket() {

    const dispatch = useDispatch()

    const [List, setList] = useState(initialState)

    const [Total, setTotal] = useState(0)

    useEffect(() => {
        // dispatch(TotalCart(Object.entries(List).map(e => e[1])))
        // console.log('get');

        let num = 0
        List?.map(value=>{value?.ticket.map(item=>
            {num += item.price*item.quantity
            setTotal(num)
            }
        )})
        
    }, [List])

    const DeleteTicket = (ItemIdx, id) => {
        setList(
            (prevState) =>({
            ...prevState,
            [ItemIdx]:{...prevState[ItemIdx],
                ticket: List[ItemIdx].ticket.filter(c => c.id !== id)
            }
        })
        )
    }

    const CounterHandle = (ItemIdx, TicketIdx, incDec) => {
        setList(
            (prevState) =>({
            ...prevState,
            [ItemIdx]:{...prevState[ItemIdx],
                ticket: {...prevState[ItemIdx].ticket, 
                    [TicketIdx]:{...prevState[ItemIdx].ticket[TicketIdx], 
                        quantity: List[ItemIdx].ticket[TicketIdx].quantity + incDec}}
            }
        })
        )
    }

    return (
        <div className="col-12 col-sm-8 pb-3" >
            {console.log(Total)}
            <div className="accordion col-12 col-sm-12 me-5 pb-3" id="accordionPanelsStayOpenExample">
                {Object.entries(List).map(e => e[1]).map((item, Itemidx)=> {return(
                    <div key={`event${item.Event_id}`} className="accordion-item mb-3 rounded-3">
                        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#ev${item.Event_id}`} aria-expanded="true" aria-controls={`ev${item.Event_id}`}>
                                <h4 className="ticket-title">{item.title}</h4>
                            </button>
                        </h2>
                        <div id={`ev${item.Event_id}`} className="accordion-collapse collapse show text-center" aria-labelledby="panelsStayOpen-headingOne">
                            
                            {Object.entries(item.ticket).map(e => e[1]).map((ticket, Ticketidx)=> {return(
                                <div key={`ticket${ticket.id}`} className="accordion-body">
                                    <div className="ticket d-flex p-2 mb-3 align-items-center">
                                        <div className="ticket-left me-auto">
                                            <div className="d-flex">
                                                <p className="sub-ticket-title">Type</p>
                                                <p className="title">{ticket.type}</p>
                                            </div>
                                            <div className="d-flex">
                                                <p className="sub-ticket-title">Price</p>
                                                <p className="price">${ticket.price}</p>
                                            </div>
                                            <div className="d-flex"></div>
                                            <select className="date form-select" name="date" id="">
                                                <option value="date">Select Date</option>
                                            </select>
                                        </div>
                                        <div className="ticket-right d-flex flex-column align-items-center text-center">
                                            <div className="quantity">
                                                <p className="mb-1">Quantity</p>
                                                <div className="ticket-btn d-flex mb-3">
                                                    <button className="ticket-min btn btn-light" onClick={()=>CounterHandle(Itemidx, Ticketidx, -1)}>-</button>
                                                    <div className="counter">{ticket.quantity}</div>
                                                    <button className="ticket-add btn btn-light" onClick={()=>CounterHandle(Itemidx, Ticketidx, 1)}>+</button>
                                                </div>
                                            </div>
                                            <button className="delete-btn p-1 btn btn-danger" onClick={()=>DeleteTicket(Itemidx, ticket.id)}>Delete</button>
                                        </div>
                                    </div>
                                    <hr className="mb-0"/>
                                </div>
                            )})}
                        </div>
                    </div>

                )})}

            </div>
            
        </div>
    )
}
