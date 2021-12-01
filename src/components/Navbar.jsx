import React, { useEffect, useState } from 'react'
import './navbar.css'
import useSearch from '../hooks/useSearch'
import Logo from '../assets/white t-01.png'
import {Link} from 'react-router-dom'


export default function Navbar(props) {

    const {SearchEvent, SearchData} = useSearch()
    const [SearchValue, setSearchValue] = useState('')

    useEffect(() => {
        if(props.getSearchData){
            props.getSearchData(SearchData)
        }
    }, [SearchData, props])

    useEffect(() => {
        if(props.getSearchTitle){
            props.getSearchTitle(SearchValue)
        }
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
        <nav className="navbar navbar-expand-lg fixed-top navbar-light shadow px-5">
            <div className="container">
                <div className="nav-left d-flex me-auto align-items-center">
                    <img src={Logo} alt="Logo" className="logo pe-2"/>
                    <div className="searchbar d-flex">
                        <input className="form-control" type="text" placeholder="Search Here..." name="search" onChange={onChangeSearch}/>
                        <button className="btn btn-outline-light" onClick={onClickSearch}>Search</button>
                    </div>
                </div>
                <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="nav-right navbar-nav">
                        <li className="nav-item"><Link to='/' className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link to='/' className="nav-link">Cart</Link></li>
                        <li className="nav-item"><Link to='/detail/create-event' className="nav-link">+ Create Event</Link></li>
                        <li className="nav-item"><Link to='/' className="nav-link">Notification</Link></li>
                        <li className="nav-item"><Link to='/detail/profile' className="nav-link">Profile</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
