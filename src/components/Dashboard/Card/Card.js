import React from 'react';
import './Card.css';

export default function Card({item}){
    return <div className="card">
        <div className="title">{item.title}</div>
        <div className="poster">
            <img src={item.poster} alt="" />
        </div>
        <div className="author">
            {item.author ? 'Author:'+item.author : 'Year:'+item.Year}
        </div>
    </div>
}