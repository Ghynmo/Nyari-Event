import React from 'react'
import useFilter from '../hooks/useFilter'
import './filter.css'

export default function Filter() {

    const {data, loading, error} = useFilter()

    if (loading) {
        return <h2>Loading...</h2>
    }

    if (error) {
        console.log(error)
        return null
    }

    const filterHandle = () => {
        console.log("data")
    }

    return (
        <div className="filter row d-flex justify-content-between">
            <div className="filter-input row d-flex mb-3 align-items-baseline">
                <p className="title col-sm-2">Filter</p>
                <select name="category" className="input-box form-select col-6 col-sm-2 category" id="">
                    <option value="Category">Category</option>
                </select>
                <input className="input-box form-control col-6 col-sm-2" type="date" placeholder="Date" name="location"/>
                <input className="input-box form-control col-6 col-sm-2" type="text" placeholder="Location" name="location"/>
                <input className="input-box form-control col-6 col-sm-2" type="number" min="0" step="0.1" placeholder="Max-Price" name="max-price"/>
                <button className="col-12 col-sm-4 col-lg-2 btn btn-primary mt-2" onClick={filterHandle}>Save Filter</button>
            </div>
        </div>
    )
}
