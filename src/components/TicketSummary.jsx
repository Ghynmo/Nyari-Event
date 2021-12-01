import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import './ticketSummary.css'

export default function TicketSummary() {

    const CartSummary = useSelector((state) => state.CartSummary.CartSummary)

    const [Data, setData] = useState([{
        ticket: [{
            price: '',
            quantity: ''
        }]
    }])

    const [Total, setTotal] = useState([''])

    useEffect(() => {
        if(CartSummary){
            setData(CartSummary)
        }
    }, [CartSummary])

    // useEffect(() => {
    //     let num = 0
    //     if(CartSummary){
    //         Data?.map(value=>{value.ticket.map(item=>
    //             console.log(item.price)
    //             // setTotal(...Total,(Object.entries(item).map(e => e[1])))
    //             )})

    //             // for (let i = 0; i < Total.length; i++) {
    //             //     num += Total[i].price
    //             //     console.log(Total[i].price);
    //             //   }
            
    //         // console.log(num);
    //     }

    // }, [Data])

    return (
        <div className="buy-ticket card col-12 col-sm-4 col-lg-3 p-3">
            {/* {console.log('total', Total)} */}
            {/* {console.log('data',Data)} */}
            <div className="title"><h4>TICKET SUMMARY</h4></div>
            <div className="price d-flex">
                <p className="buy-subtitle">Price</p>
                <p>$</p>
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
