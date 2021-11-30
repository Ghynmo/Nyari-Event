import React, { useEffect, useState } from 'react'
import useFilter from '../hooks/useFilter'
import './filter.css'

export default function Filter(props) {

    const {FilterEvent, FilterData} = useFilter()
    const [FilterValue, setFilterValue] = useState({
        category: {},
        location: {},
        date: {}
        })

    useEffect(() => {
        props.getFilterData(FilterData)
    }, [FilterData, props])

    const onChangeFilter = (e) => {
        e.preventDefault()
        if (e.target.value !== ""){
            if (e.target.name === "category"){
                setFilterValue({
                    ...FilterValue,
                    category: {_eq: e.target.value}
                })
            }
            if (e.target.name === "location"){
                setFilterValue({
                    ...FilterValue,
                    location: {_eq: e.target.value}
                })
            }
            if (e.target.name === "date"){
                setFilterValue({
                    ...FilterValue,
                    date: {_lte: e.target.value}
                })
            }
        }
    }

    const onClickFilter = (e) => {
        e.preventDefault()
        FilterEvent({ 
            variables: {
            where: {
                category: FilterValue.category,
                location: FilterValue.location,
                date: FilterValue.date
                }
            }
        })
    }

    return (
        <div className="filter row d-flex justify-content-between">
                <form className="filter-input row d-flex mb-3 align-items-baseline">
                    <p className="title col-sm-2">Filter</p>
                    <select name="category" className="input-box form-select col-6 col-sm-2 category" id="" onChange={onChangeFilter}>
                        <option value="Category">Category</option>
                        <option value="Music">Music</option>
                    </select>
                    <input className="input-box form-control col-6 col-sm-2" type="date" placeholder="Date" name="date" onChange={onChangeFilter}/>
                    <input className="input-box form-control col-6 col-sm-2" type="text" placeholder="Location" name="location" onChange={onChangeFilter}/>
                    <input className="input-box form-control col-6 col-sm-2" type="number" min="0" step="0.1" placeholder="Max-Price" name="max-price"/>
                    <button type="submit" className="col-12 col-sm-4 col-lg-2 btn btn-primary mt-2" onClick={onClickFilter}>Save Filter</button>
                </form>
            </div>
    )
}
