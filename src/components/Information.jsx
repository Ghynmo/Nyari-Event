import React from 'react'
import './information.css'
import ConcertImg from '../assets/01_Preview 3.jpg'
import MapImg from '../assets/map.png'

export default function Information() {
    return (
        <div className="information-container pb-3">
            <div className="event-banner mb-4">
                <img src={ConcertImg} alt=""/>
            </div>
            <div className="information">
                <h2 className="title">ROCKING CONCERT</h2>
                <p className="description pe-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eius animi aliquam error ipsam eveniet, cupiditate nulla ducimus aliquid quisquam praesentium officia sed quidem asperiores labore consequatur corrupti ipsum nostrum.
                    Quia, asperiores facilis. Enim quasi officiis maxime animi quas dolorem vel nulla ipsa, voluptas nesciunt nostrum reiciendis perferendis incidunt sunt maiores corrupti expedita possimus eaque modi ex. Iste, optio porro.
                    Ex, consequuntur, perferendis magnam mollitia accusamus dolorem nobis modi accusantium sapiente voluptatum blanditiis suscipit fugiat nihil dicta asperiores, esse sunt eveniet debitis saepe quaerat quam! Tempore omnis nobis facilis. Accusantium.
                    Tempore ipsam ducimus nesciunt eveniet sint, voluptate temporibus voluptas amet similique nam magnam fugit minima fuga nulla! Quos, ea nostrum harum velit at labore sapiente quis cupiditate eligendi enim provident?
                    <br/><br/>
                    Consequuntur maxime necessitatibus, consequatur, tempore iste atque distinctio voluptates eveniet aperiam alias esse? Optio velit provident temporibus illo, autem ab accusantium, architecto repudiandae ut deserunt voluptatibus quos quod hic quam.
                    Alias quidem incidunt iure recusandae, ipsa eligendi ipsum veritatis ut doloribus natus cupiditate minus eos nemo eaque provident placeat vel pariatur ducimus deserunt atque reiciendis? Sit modi cupiditate quasi deserunt?
                    Beatae eius nulla tenetur magnam. Qui ducimus, adipisci ullam dignissimos, voluptas optio magni quas quidem dolor officiis iure dolores reprehenderit impedit totam porro natus iusto eum dicta alias ipsum laborum.
                </p>
                <div className="date mb-2">
                    <span className="sub-title">Date</span>
                    <span>01-02 January 2021</span>
                </div>
                <div className="location mb-2">
                    <span className="sub-title">Location</span>
                    <span>Heaven Park, Amsterdam</span>
                </div>
                <div className="contact mb-2">
                    <span className="sub-title">Contact Person</span>
                    <p>Email : anonymous@mail.com</p>
                </div>
                <div className="addional-info d-flex mb-3">
                    <div className="map">
                        <p className="sub-title">Map</p>
                        <img className="map-img" src={MapImg} alt=""/>
                    </div>
                    <div className="share-info d-flex bottom-0">
                        <p>Share</p>
                        <div className="icon d-flex">
                            <span>Facebook</span>
                            <span>Instagram</span>
                            <span>Twitter</span>
                        </div>
                    </div>
                </div>
            </div>          
        </div>
    )
}
