import React from 'react'
import './filter.css'

export default function Filter() {
    return (
        <div className="filter d-flex justify-content-between">
            <p className="title">Filter</p>
            <div className="filter-input d-flex">
                <select name="category" className="input-box category" id="">
                    <option value="Category">Category</option>
                </select>
                <input className="input-box" type="text" placeholder="Date" name="location"/>
                <input className="input-box" type="text" placeholder="Location" name="location"/>
                <input className="input-box" type="text" placeholder="Max-Price" name="max-price"/>
            </div>
            <button>Add more Filter +</button>
        </div>
    )
}
