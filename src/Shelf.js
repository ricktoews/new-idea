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
		console.log('spinner start');
		fetch(shelfREST)
			.then((res) => res.json())
			.then((res) => {
				console.log('getShelf', res);
				this.setState({ books: res.data });
		console.log('spinner end');
			});
	}

	render() {
		return (
        <div>
          <h3>Bookshelf</h3>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Author</th>
              </tr>
            </thead>
            <tbody>
			{this.state.books.map((book) => (
              <tr key={book.ndx}>
                <td><img src={book.image} alt={book.title}/></td>
                <td>{book.title}</td>
                <td>{book.author}</td>
              </tr>
			))}
            </tbody>
          </table>
        </div>
		);
	}
}
