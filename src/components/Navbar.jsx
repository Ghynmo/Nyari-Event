import React, { useEffect, useState } from 'react'
import './navbar.css'
import useSearch from '../hooks/useSearch'


export default function Navbar(props) {

    const {SearchEvent, SearchData} = useSearch()
    const [SearchValue, setSearchValue] = useState('')

    useEffect(() => {
        props.getSearchData(SearchData)
    }, [SearchData, props])

    useEffect(() => {
        props.getSearchTitle(SearchValue)
    }, [SearchValue])

    const onChangeSearch = (e) => {
        e.preventDefault()
        setSearchValue(
             e.target.value
        )
    }

    const onClickSearch = (e) => {
        e.preventDefault()
        SearchEvent({ 
            variables: {
                title: SearchValue
            }
        })
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light shadow px-5">
            <div className="container">
                <div className="nav-left d-flex me-auto">
                    <img src="" alt="Logo" className="logo pe-2"/>
                    <div className="searchbar">
                        <input className="form-control" type="text" placeholder="Search Here..." name="search" onChange={onChangeSearch}/>
                        <button className="btn btn-outline-light" onClick={onClickSearch}>Search</button>
                    </div>
                </div>
                <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="nav-right navbar-nav">
                        <li className="nav-item"><a href="home.html" className="nav-link">Home</a></li>
                        <li className="nav-item"><a href="cart.html" className="nav-link">Cart</a></li>
                        <li className="nav-item"><a href="create_event.html" className="nav-link">+ Create Event</a></li>
                        <li className="nav-item"><a href="home.html" className="nav-link">Notification</a></li>
                        <li className="nav-item"><a href="login.html" className="nav-link">Profile</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
