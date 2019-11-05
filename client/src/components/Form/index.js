import React from 'react';

export default (props) => {
    return (
        <form className="mb-3">
            <h1>Book Search</h1>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="search">Book</label>
                    <input onChange={props.handleInput} type="text" id="search" className="form-control" placeholder="Search" />
                </div>
                <button onClick={props.handleSubmit} type="submit" className="btn btn-primary">Search</button>
            </fieldset>
        </form>
    )
}