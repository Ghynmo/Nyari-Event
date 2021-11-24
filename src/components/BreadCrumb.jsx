import React from 'react'

export default function BreadCrumb() {
    return (
        <div className="breadcrumb d-flex pb-3">
            <div className="track-item"> Home</div>
            <div className="track-arrow"> {'>'} </div>
            <div className="track-item">[Event name]</div>
        </div>
    )
}
