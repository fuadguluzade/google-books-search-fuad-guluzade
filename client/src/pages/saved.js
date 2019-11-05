import React, { Component } from 'react';
import API from '../utils/API';
import ShowSaved from '../components/ShowSaved';

class Saved extends Component {
    state = {
        books: []
    }

    loadSaved() {
        API.getBooks()
        .then(res => {
            this.setState({ books: res.data })
        })
        .catch(e => console.log(e));
    }

    componentDidMount() {
        this.loadSaved();
    }

    handleDelete = bookId => {
        API.deleteBook(bookId)
            .then(res => {alert("Book was deeted"); this.loadSaved()})
            .catch(e => console.log(e));
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ShowSaved books={this.state.books} handleDelete={this.handleDelete} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Saved;