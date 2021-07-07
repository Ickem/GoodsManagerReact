import React, {Fragment} from 'react';
import {Route, Link} from 'react-router-dom';
import SearchBar from './SearchBar/SearchBar';
import Books from './Books/Books';
import Films from './Films/Films';
import booksJSON from '../../utils/books.json';
import filmsJSON from '../../utils/films.json';

import './Dashboard.css'

class Dashboard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            valueSearchInput:'',
            filteredDataBooks: booksJSON,
            filteredDataFilms: filmsJSON,
            jsonDataBooks: booksJSON,
            jsonDataFilms: filmsJSON
        };
    }

    getValueSearch(e) {
        const inputValue=e.target.value;
        const {jsonDataBooks, jsonDataFilms} = this.state;
        this.setState((valueSearchInput)=>({
            valueSearchInput: inputValue
        }));
        if(window.location.pathname.includes('books')){
            this.filterByNameBooks(inputValue,jsonDataBooks);
        }
        if(window.location.pathname.includes('films')){
            this.filterByNameFilms(inputValue, jsonDataFilms);
        }
    }

    filterByNameBooks(inputValue, jsonData){
        this.setState({
            filteredDataBooks: jsonData.filter(item=>(
                    item.title.toLowerCase().includes(inputValue.toLowerCase()))
            )
        })
    }

    filterByNameFilms(inputValue, jsonData){
        this.setState({
            filteredDataFilms: jsonData.filter(item=>(
                    item.title.toLowerCase().includes(inputValue.toLowerCase()))
            )
        })
    }

    render(){
        return <Fragment>
            <div className="dashboard-header">
                <h2>Dashboard</h2>
                <SearchBar
                    onChange={this.getValueSearch.bind(this)}
                    value={this.state.valueSearchInput}/>
            </div>

            <div className="dashboard-wrapper">
                <div className="sections">
                    <h2>Sections</h2>
                    <Link
                        to="/dashboard/books"
                        className="links"
                        onClick={()=>{
                            this.setState({filteredDataBooks: booksJSON,
                                           valueSearchInput:''});
                        }
                            }>Books</Link>
                    <Link
                        to="/dashboard/films"
                        className="links"
                        onClick={()=> {
                            this.setState({filteredDataFilms: filmsJSON,
                                           valueSearchInput: ''});
                        }
                            }>Films</Link>
                </div>
                <div className="content">
                    <Route path="/dashboard/books">
                        <Books jsonData={this.state.filteredDataBooks}/>
                    </Route>
                    <Route path="/dashboard/films">
                        <Films jsonData={this.state.filteredDataFilms}/>
                    </Route>
                </div>
            </div>
        </Fragment>
    }
}

export default Dashboard;