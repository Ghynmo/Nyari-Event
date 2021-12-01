import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Information from '../components/Information'
import Comment from '../components/Comment'
import Ticket from '../components/Ticket'
import { useParams } from 'react-router';

export default function EventDetail() {

    const { event_id } = useParams()

    return (
        <div className="mx-5 p-4">
            <BreadCrumb/>
            <div className="w-100 row d-flex">
                <div className="col-12 col-sm-9">
                    <Information event_id={event_id}/>
                    <Comment event_id={event_id}/>
                </div>
                <Ticket event_id={event_id}/>
            </div>
        </div>
    )
}
