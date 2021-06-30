import React from 'react';
import './Card.css'

export default function Card({item}){
    return <div className="card">
        <div className="title">{item.name}</div>
        <div className="poster">
            <img src={item.poster}/>
        </div>
        <div className="author">{item.author}</div>
    </div>
}