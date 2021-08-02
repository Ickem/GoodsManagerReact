import React,{Fragment} from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

import './Films.css';

export default function Films({jsonData}) {
    return <Fragment>
        <h1 className="films-title">Films</h1>
        <div className="films-wrapper">
        {jsonData.map((item)=>(
            <Card
                key={item.id}
                item={item}
                year={item.year}
            />
        ))}
        </div>
    </Fragment>
}

Films.propTypes = {
    jsonData: PropTypes.array.isRequired
};