import { Component } from 'react';

class ListBooksComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            books: [
                { id: 1, title: 'Dogman and black thief', description: 'Dogman nabs a history sheeter thief', author: 'D&V', additionDate: new Date() },
                { id: 2, title: 'Captain underpant and mysteriuos cats', description: 'Captain underpant fights mysterious cats', author: 'D&V', additionDate: new Date() },
                { id: 3, title: 'Sleepy Hero and twin devils', description: 'Sleep Hero fights with twin deveils', author: 'Pa', additionDate: new Date() }
            ]
        }
    }
    render() {
        return (
            <div className="container">
                <h1>Books List Down Here</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Sr.#</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Author</th>
                            <th>Added Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.books.map(
                                book =>
                                    <tr key={book.id}>
                                        <td>{book.id}</td>
                                        <td>{book.title}</td>
                                        <td>{book.description}</td>
                                        <td>{book.author}</td>
                                        <td>{book.additionDate.toString()}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListBooksComponent