import React,{Fragment} from 'react';
import Card from '../Card/Card';
import './Books.css';

export default function Books({jsonData}){
    return <Fragment>
        <h1 className="books-title">Books</h1>
        <div className="books-wrapper">
        {jsonData.map((item)=>(
            <Card
                key={item.id}
                item={item}
            />
        ))}
        </div>
    </Fragment>
}