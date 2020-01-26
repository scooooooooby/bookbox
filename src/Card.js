import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.author}</h2>
        <h2>{this.props.authorAlphabtized}</h2>
        <span>{this.props.id}</span>
        <span>{this.props.ISBN}</span>
        <span>{this.props.ISBN13}</span>
        <span>{this.props.rating}</span>
        <span>{this.props.publisher}</span>
        <span>{this.props.format}</span>
        <span>{this.props.numberOfPages}</span>
        <span>{this.props.publicationYear}</span>
        <span>{this.props.dateAdded}</span>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  author: PropTypes.string,
  authorAlphabtized: PropTypes.string,
  ISBN: PropTypes.number,
  ISBN13: PropTypes.number,
  rating: PropTypes.number,
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
