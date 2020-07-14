import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Image, Heading } from "@nypl/design-system-react-components";

class BBCard extends React.Component {
  state = { isOpen: false, value: "" };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggleContentShow = this.toggleContentShow.bind(this);
  }

  createDescription() {
    let shortDescription = this.props.description.substring(0, 7);
    return shortDescription;
  }

  toggleContentShow() {
    this.setState(() => ({ isOpen: !this.state.isOpen }));
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <Card
        id="cardID"
        heading={<Heading level={2} text={this.props.title} />}
        image={
          <Image
            src={this.props.bookJacket ? this.props.bookJacket[0].thumbnails.large.url : null}
            isDecorative={true}
          />
        }
        ctas={
          <Button
            onClick={this.toggleContentShow}
            id="button1"
            type="submit"
          >Edit Record</Button>
        }
      >
        <h3>{this.props.author}</h3>
        {this.props.rate && <p>Rating: {this.props.rating}</p>}
        <p>Number of Pages: {this.props.numberOfPages}</p>
        <p>{this.props.description && (this.props.description).substring(0, 250) + "..."}</p>
      </Card>
    );
  }
}

BBCard.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string,
  author: PropTypes.string,
  authorAlphabetized: PropTypes.string,
  additionalAuthors: PropTypes.string,
  ISBN: PropTypes.number,
  ISBN13: PropTypes.number,
  rating: PropTypes.string,
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
  isOpen: PropTypes.bool,
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

export default BBCard;
