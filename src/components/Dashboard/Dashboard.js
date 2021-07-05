import React, {Fragment} from 'react';
import {Route, Link} from 'react-router-dom';
import SearchBar from './SearchBar/SearchBar';
import Books from './Books/Books';
import Films from './Films/Films';
import './Dashboard.css'

export default function Dashboard() {
    return <Fragment>
        <div className="dashboard-header">
            <h2>Dashboard</h2>
           <SearchBar />
        </div>

        <div className="dashboard-wrapper">
            <div className="sections">
                <h2>Sections</h2>
                <Link to="/dashboard/books" className="links">Books</Link>
                <Link to="/dashboard/films" className="links">Films</Link>
            </div>
            <div className="content">
                <Route path="/dashboard/books">
                    <Books />
                </Route>
                <Route path="/dashboard/films">
                    <Films />
                </Route>
            </div>
        </div>
    </Fragment>
}