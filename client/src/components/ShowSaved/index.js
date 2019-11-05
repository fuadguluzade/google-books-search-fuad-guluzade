import React from 'react';
import './style.css';

export default (props) => {
    if (props.books.length > 0) {        
        return (
            props.books.map(book => {
                return (
                    <div key={book._id} className="card mb-3">
                        <div className="container">
                            <div className="row no-gutters">
                                <div className="col-md-10">
                                    <h5 className="card-title">{book.title}</h5>
                                    <p className="card-text"><small className="text-muted">Written by: {book.authors}</small></p>
                                </div>
                                <div className="col-md-2">
                                    <a href={book.link} rel="noopener noreferrer" target="_blank"><button type="button" className="btn btn-primary btn-sm">View</button></a>
                                    <button type="button" className="btn btn-danger btn-sm"
                                        onClick={() => props.handleDelete(book._id)}>Delete</button>
                                </div>
                            </div>
                            <div className="row no-gutters">
                                <div className="col-md-2">
                                    <img src={book.image} className="card-img" style={{ maxHeight: "200px", maxWidth: "150px" }} alt="thumbnail" />
                                </div>
                                <div className="col-md-10">
                                    <div className="card-body">
                                        <p className="card-text">{book.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    } else {
        return null;
    }
}