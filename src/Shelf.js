import React, { Component } from 'react';

var shelfREST = 'https://rest.toewsweb.net/index.php/bookshelf';

export class Shelf extends Component {
	constructor() {
		super()
		this.state = {
			books: []
		}
		this.getShelf('professional-development');
	}

	getShelf(shelfName) {
		fetch(shelfREST)
			.then((res) => res.json())
			.then((res) => {
				console.log('getShelf', res);
				this.setState({ books: res });
			});
	}

	render() {
		return (
        <div>
          <h3>Bookshelf</h3>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
			{this.state.books.map((book) => (
              <tr>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td><img src={book.image} alt={book.title}/></td>
              </tr>
			))}
            </tbody>
          </table>
        </div>
		);
	}
}
