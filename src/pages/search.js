import React, { Component } from 'react';
import Form from '../components/Form';
import API from '../utils/API';
import SearchResults from '../components/SearchResults';

class Search extends Component {
    state = {
        book: '',
        bookData: []
    }

    handleInput = event => {
        this.setState({ book: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        API.getFromGoogle(this.state.book)
            .then(res => {
                console.log(res.data.items);
                this.setState({ bookData: res.data.items });
            })
            .catch(e => console.log(e));
    }

    handleSave = (title, authors, description, image, link) => {
        API.saveBook({
            title,
            authors,
            description,
            image,
            link
        }).catch(e => console.log(e));
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Form handleInput={this.handleInput} handleSubmit={this.handleSubmit} />
                        <SearchResults bookData={this.state.bookData} handleSave={this.handleSave} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;