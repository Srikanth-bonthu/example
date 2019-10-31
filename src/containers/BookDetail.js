import React from "react";
import { connect } from "react-redux";
class BookDetail extends React.Component{
    render() {
        if (!this.props.book) {
          return (
           <div>   Please select a book from above to get started.
            </div>
          );
        }
    
        return(
            <div>
            <div>Title: {this.props.book.title}</div>
            <div>Pages: {this.props.book.pages}</div>
            <div>Pages: {this.props.book.author}</div>

        </div>
        );
    }
}
function mapStateToProps(state){
    return {
        book: state.activeBook
      };
    }
export default connect(mapStateToProps)(BookDetail);