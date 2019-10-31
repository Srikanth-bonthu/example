import React from "react";
import { connect } from "react-redux";
import { selectBook } from "../action";
import { bindActionCreators } from "redux";
class BookList extends React.Component {
  renderList(book) {
    console.log(book)
      return (
        <li key={book.title} onClick={() => this.props.selectBook(book)}>
           {book.title}
</li>
        );
    }
  

  render() {
    return (
      <ul >
{this.props.books.map(book => {
      
   return (this.renderList(book))
})}
      </ul>
      );
  }
}

function mapStateToProps(state) {
  console.log(state)
    return {
    books: state.books.Books
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectBook: selectBook
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
