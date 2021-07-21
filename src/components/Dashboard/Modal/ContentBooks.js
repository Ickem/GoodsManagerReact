import React,{Fragment} from 'react';

export const ContentBooks = ({inputBooks, handleChange}) => {
    return <Fragment>
        <div className="form-group">
            <label htmlFor="booksId">Id: </label>
            <input type="text" name="id" id="booksId" value={inputBooks.id} placeholder="Enter id" onChange={handleChange} />
        </div>
        <div className="form-group">
            <label htmlFor="booksTitle">Title: </label>
            <input type="text" name="title" id="booksTitle" value={inputBooks.title} placeholder="Enter title" onChange={handleChange} />
        </div>
        <div className="form-group">
            <label htmlFor="booksAuthor">Author: </label>
            <input type="text" name="author" id="booksAuthor" value={inputBooks.author} placeholder="Enter author" onChange={handleChange} />
        </div>
        <div className="form-group">
            <label htmlFor="booksPoster">Poster: </label>
            <input type="text" name="poster" id="booksPoster" value={inputBooks.poster} placeholder="Enter poster" onChange={handleChange} />
        </div>
        <div className="form-group">
            <label htmlFor="booksGenre">Genre: </label>
            <input type="text" name="genre" id="booksGenre" value={inputBooks.genre} placeholder="Enter genre" onChange={handleChange} />
        </div>
        <button type="submit" className="btn-submit">&#10004; Add</button>
    </Fragment>
};