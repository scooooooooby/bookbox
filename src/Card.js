import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    return (
      <div>
        <h1>Title: {this.props.title}</h1>
        <h2>Author: {this.props.author}</h2>
        <h2>Author alphabetized: {this.props.authorAlphabetized}</h2>
        <p>Book ID: {this.props.id}</p>
        <p>ISBN: {this.props.ISBN}</p>
        <p>ISBN13: {this.props.ISBN13}</p>
        <p>Rating: {this.props.rating}</p>
        <p>Publisher: {this.props.publisher}</p>
        <p>Format: {this.props.format}</p>
        <p>Number of Pages: {this.props.numberOfPages}</p>
        <p>Publication Year: {this.props.publicationYear}</p>
        <p>Date Added: {this.props.dateAdded}</p>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  author: PropTypes.string,
  authorAlphabetized: PropTypes.string,
  ISBN: PropTypes.number,
  ISBN13: PropTypes.number,
  rating: PropTypes.array,
  publisher: PropTypes.string,
  format: PropTypes.string,
  numberOfPages: PropTypes.number,
  publicationYear: PropTypes.number,
  dateAdded: PropTypes.string,
  shelves: PropTypes.array,
  // description: record.get('Book Description');
  // myReview : record.get('My Review');
  // spoiler : record.get('Spoilers');
  // quotes : record.get('Quotes');
  // privateNotes : record.get('Private Notes');
  // readCount : record.get('Read Count');
  // recommendedFor : record.get('Recommended For');
  // recommendedBy : record.get('Recommended By');
  // Cover : record.get('Book Cover');
  // Tags : record.get('Tags');
};

export default Card;
