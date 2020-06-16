import React from 'react';
import PropTypes from 'prop-types';
import * as DS from '@nypl/design-system-react-components';


class Card extends React.Component {
  createDescription () {
    let shortDescription = (this.props.description).substring(0, 7);
    return shortDescription;
  }

  render() {
    return (
      <div>
        <DS.EditionCard 
          id={this.key}
          editionHeadingElement={this.props.title}
          editionInfo={["Author", "Name", "Something", "Yes"]}
        />
        <div className="card" key={this.key}>
          <div className="card__image">
            {this.props.bookJacket ? 
              <img src={this.props.bookJacket[0].thumbnails.large.url} alt="" /> : <div>No image</div>
            }
          </div>

          <div className="card__content">
            <h2>{this.props.title}</h2>
            <h3>{this.props.author}</h3>
            <p>Rating: {this.props.rating}</p>
            <p>Number of Pages: {this.props.numberOfPages}</p>
            <p>{this.props.description}</p>
            <p>Tags: {this.props.tags}</p>
          </div>

          <div className="card__ctas">
            <button>EDIT TEH TING</button>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorAlphabetized: PropTypes.string,
  additionalAuthors: PropTypes.string,
  ISBN: PropTypes.number,
  ISBN13: PropTypes.number,
  rating: PropTypes.array,
  publisher: PropTypes.string,
  format: PropTypes.string,
  numberOfPages: PropTypes.number,
  publicationYear: PropTypes.number,
  dateRead: PropTypes.string,
  dateAdded: PropTypes.string,
  shelves: PropTypes.array,
  readCount: PropTypes.number,
  tags: PropTypes.array,
  bookJacket: PropTypes.array,
  // description: record.get('Book Description');
  // myReview : record.get('My Review');
  // spoiler : record.get('Spoilers');
  // quotes : record.get('Quotes');
  // privateNotes : record.get('Private Notes');
  // readCount : record.get('Read Count');
  // recommendedFor : record.get('Recommended For');
  // recommendedBy : record.get('Recommended By');
  // Tags : record.get('Tags');
};

export default Card;
