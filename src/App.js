import React from 'react';
import './App.css';
import Card from './Card.js';
import Airtable from 'airtable';

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.REACT_APP_API_KEY
});

const base = Airtable.base('appDlF1n3LmT47cDl');

const receivedRecords = new Promise((resolve, reject) => {
  base('Books').select({}).eachPage(function page(records, fetchNextSet) {
    resolve(records);
  }, function done(error) {
    console.log(error);
  });
});

receivedRecords.then((data) => {
  console.log(data);
  return data;
});

class App extends React.Component {
  componentDidMount() {
    const self = this;

    receivedRecords.then(function(response) {
      self.setState({data: response});
    });
  }

  render(props) {
    return (
      <div className="App">
        <header className="App-header">
        { this.state && this.state.data &&
          (this.state.data).map(function(data, key) {
            return <Card
              title = {data.fields["Title"]}
              author = {data.fields["Author"]}
              authorAlphabetized = {data.fields["Author l-f"]}
              id = {key}
              ISBN = {data.fields["ISBN"]}
              ISBN13 = {data.fields["ISBN13"]}
              rating = {data.fields["My Rating"]}
              publisher = {data.fields["Publisher"]}
              format = {data.fields["Book Format"]}
              numberOfPages = {data.fields["Number of Pages"]}
              publicationYear = {data.fields["Publication Year"]}
              dateAdded = {data.fields["Date Added"]}
            />
          })
        }
        </header>
      </div>
    );
  }
}

export default App;
