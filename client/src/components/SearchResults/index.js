import React from 'react';
import './style.css';

export default (props) => {
    if (props.bookData.length > 0) {
        return (
            props.bookData.map(data => {
                return (
                    <div key={data.id} className="card mb-3">
                        <div className="container">
                            <div className="row no-gutters">
                                <div className="col-md-10">
                                    <h5 className="card-title">{data.volumeInfo.title}</h5>
                                    <p className="card-text"><small className="text-muted">Written by: {data.volumeInfo.authors}</small></p>
                                </div>
                                <div className="col-md-2">
                                    <a href={data.volumeInfo.previewLink} rel="noopener noreferrer" target="_blank"><button type="button" className="btn btn-primary btn-sm">View</button></a>
                                    <button type="button" className="btn btn-success btn-sm"
                                        onClick={() => props.handleSave(data.volumeInfo.title, data.volumeInfo.authors, data.volumeInfo.description, data.volumeInfo.imageLinks.thumbnail, data.volumeInfo.previewLink)}>Save</button>
                                </div>
                            </div>
                            <div className="row no-gutters">
                                <div className="col-md-2">
                                    <img src={data.volumeInfo.imageLinks.thumbnail} className="card-img" style={{ maxHeight: "200px", maxWidth: "150px" }} alt="thumbnail" />
                                </div>
                                <div className="col-md-10">
                                    <div className="card-body">
                                        <p className="card-text">{data.volumeInfo.description}</p>
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

