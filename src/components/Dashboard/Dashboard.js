import React, {Fragment} from 'react';
import {Route, Link} from 'react-router-dom';
import Header from './Header/Header';
import Books from './Books/Books';
import Films from './Films/Films';
import Footer from './Footer/Footer';
import Modal from './Modal/Modal';
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
            jsonDataFilms: filmsJSON,
            modalActive: false,
            sectionsValue: 0,
            sectionsList: [
                'books',
                'films'
            ],
            inputBooks:{
                id: '',
                title: '',
                author: '',
                poster: '',
                genre: ''
            }
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

    showModalForm(){
        this.setState({modalActive:true});
    }

    setModalActive(){
        this.setState({modalActive: false});
    }

    handleChangeBooks(e){
        this.setState({sectionsValue: e.target.value});
    }

    addInfo(e){
        e.preventDefault();
        //push info to the server


        const newStateInputBooks = this.state.inputBooks;
        for(var key in newStateInputBooks) {
            if(newStateInputBooks[key] !== ''){
                newStateInputBooks[key] = '';
            } else {
                console.log('The fields cannot be empty');
                return;
            }

        }
        this.setState({inputBooks: newStateInputBooks});
        console.log('Information added');

        //similar logic for adding to the "films" section
    }

    handleChangeInput(e){
        const {name, value} = e.target;
        this.setState({inputBooks:{
            ...this.state.inputBooks, [name]:value
        }});
    }

    render(){
        const optionsBooks = this.state.sectionsList.map((item, i)=>(
                <option key={i} value={i}>{item}</option>
        ));

        return <Fragment>
            <Header
                modalActive={this.state.modalActive}
                showModalForm={this.showModalForm.bind(this)}
                getValueSearch={this.getValueSearch.bind(this)}
                valueSearchInput={this.state.valueSearchInput}
            />

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
            <Footer />
            <Modal
                active={this.state.modalActive}
                setActive={this.setModalActive.bind(this)}
                sectionsValue={this.state.sectionsValue}
                sectionsList={optionsBooks}
                handleChange={this.handleChangeBooks.bind(this)}
                inputBooks ={this.state.inputBooks}
                handleChangeInput={this.handleChangeInput.bind(this)}
                onSubmit={this.addInfo.bind(this)}
            />
        </Fragment>
    }
}

export default Dashboard;