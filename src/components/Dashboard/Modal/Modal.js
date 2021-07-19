import React,{Fragment} from 'react';
import {ContentBooks} from './ContentBooks';
import {ContentFilms} from './ContentFilms';

import './Modal.css';

export default function Modal({
        active,
        setActive,
        sectionsValue,
        sectionsList,
        handleChange
    }){
    return(
        <div className={active ? "modal active" : "modal"} onClick={()=>setActive()}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <h2>Additions</h2>
                <hr/>
                <form>
                    <div className="form-group">
                        <span>Sections:</span>
                        <select value={sectionsValue} className="sections-list" onChange={handleChange}>
                            {sectionsList}
                        </select>
                    </div>
                    {sectionsValue==0 ? <ContentBooks /> : <ContentFilms />}
                </form>
            </div>
        </div>
    );
}