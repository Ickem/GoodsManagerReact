import React,{Fragment} from 'react';
import Card from '../Card/Card'
import booksJSON from '../../../utils/books.json'
import './Books.css';

export default function Books() {
    return <Fragment>
        <h1 className="books-title">Books</h1>
        <div className="books-wrapper">
        {booksJSON.map((item)=>(
            <Card
                key={item.id}
                item={item}
            />
        ))}
        </div>
    </Fragment>
}