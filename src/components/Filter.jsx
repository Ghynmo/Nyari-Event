import React from 'react'
import './filter.css'

export default function Filter() {
    return (
        <div className="filter row d-flex justify-content-between">
            <div className="filter-input row d-flex mb-3 align-items-baseline">
                <p className="title col-sm-2">Filter</p>
                <select name="category" className="input-box form-select col-6 col-sm-2 category" id="">
                    <option value="Category">Category</option>
                </select>
                <input className="input-box form-control col-6 col-sm-2" type="text" placeholder="Date" name="location"/>
                <input className="input-box form-control col-6 col-sm-2" type="text" placeholder="Location" name="location"/>
                <input className="input-box form-control col-6 col-sm-2" type="text" placeholder="Max-Price" name="max-price"/>
                <button className="col-12 col-sm-4 col-lg-2 btn btn-dark mt-2">Add more Filter +</button>
            </div>
        </div>
    )
}
