import React,{Fragment} from 'react';
import Card from '../Card/Card'
import filmsJSON from '../../../utils/films.json'
import './Films.css';

export default function Films() {
    return <Fragment>
        <h1 className="films-title">Films</h1>
        <div className="films-wrapper">
        {filmsJSON.map((item)=>(
            <Card
                key={item.id}
                item={item}
                year={item.year}
            />
        ))}
        </div>
    </Fragment>
}