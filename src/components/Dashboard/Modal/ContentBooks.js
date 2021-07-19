import React,{Fragment} from 'react';

export const ContentBooks = () => {
    return <Fragment>
        <div className="form-group">
            <label htmlFor="booksId">Id: </label>
            <input type="text" id="booksId" placeholder="Input id"/>
        </div>
        <div className="form-group">
            <label htmlFor="booksTitle">Title: </label>
            <input type="text" id="booksTitle" placeholder="Input title" />
        </div>
        <div className="form-group">
            <label htmlFor="booksAuthor">Author: </label>
            <input type="text" id="booksAuthor" placeholder="Input author"/>
        </div>
        <div className="form-group">
            <label htmlFor="booksPoster">Poster: </label>
            <input type="text" id="booksPoster" placeholder="Input poster"/>
        </div>
        <div className="form-group">
            <label htmlFor="booksGenre">Genre: </label>
            <input type="text" id="booksGenre" placeholder="Input genre"/>
        </div>
        <button type="submit" className="btn-submit">&#10004; Add</button>
    </Fragment>
};