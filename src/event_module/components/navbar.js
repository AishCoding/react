import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import AddEvent from './add_event'
import SearchEvent from './search_event'
import ShowEvents from './show_events'
import UpdateEvent from './update_event'

export default function Navbar() {
    return (
        <BrowserRouter>
            <nav className="row">
                <div className="col"/>
                <div className="col-7">
                    <div className="nav nav-tabs" role="tablist">
                        <button className="nav-link bg-dark" data-bs-toggle="tab">
                            <Link to={'/show'}>Show Events</Link>
                        </button>
                        <button className="nav-link bg-dark" data-bs-toggle="tab">
                            <Link to={'/search'}>Search Event</Link>
                        </button>
                        <button className="nav-link bg-dark" data-bs-toggle="tab">
                            <Link to={'/add'}>Create Event</Link>
                        </button>
                    </div>
                </div>
                <div className="col"/>
            </nav>
            
            <Routes>
                <Route exact path="/show" element={<ShowEvents/>}/>
                <Route exact path="/search" element={<SearchEvent/>}/>
                <Route exact path="/add" element={<AddEvent/>}/>
                <Route path="/update/:id" element={<UpdateEvent/>}/>
            </Routes>
        </BrowserRouter>
    )
}