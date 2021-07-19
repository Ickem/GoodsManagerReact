import React,{Fragment} from 'react';

export const ContentFilms = () => {
    return <Fragment>
        <div className="form-group">
            <label htmlFor="filmsId">Id: </label>
            <input type="text" id="filmsId" placeholder="Input id"/>
        </div>
        <div className="form-group">
            <label htmlFor="filmsTitle">Title: </label>
            <input type="text" id="filmsTitle" placeholder="Input title" />
        </div>
        <div className="form-group">
            <label htmlFor="filmsYear">Year: </label>
            <input type="text" id="filmsYear" placeholder="Input year"/>
        </div>
        <div className="form-group">
            <label htmlFor="filmsGenre">Genre: </label>
            <input type="text" id="filmsGenre" placeholder="Input genre"/>
        </div>
        <div className="form-group">
            <label htmlFor="filmsCountry">Country: </label>
            <input type="text" id="filmsCountry" placeholder="Input country"/>
        </div>
        <div className="form-group">
            <label htmlFor="filmsPoster">Poster: </label>
            <input type="text" id="filmsPoster" placeholder="Input poster"/>
        </div>
        <button type="submit" className="btn-submit">&#10004; Add</button>
    </Fragment>
};
