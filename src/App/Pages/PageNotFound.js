import React from 'react'
import { Link } from 'react-router-dom'
import error from '../Assets/error.svg'

export default function PageNotFound() {
    return (
        <div className="min-vh-100 container text-center justify-content-center align-items-center d-flex flex-column">
                <img src={error} className="img-fluid w-50 " />
                Go back
        </div>
    )
}
