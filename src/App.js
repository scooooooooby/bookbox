import React from 'react';
import './App.scss';
import BBCard from './Card.js';
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
}).then((data) => {
  console.log(data);
  return data;
});

class App extends React.Component {
  componentDidMount() {
    const self = this;

    receivedRecords.then(function (response) {
      self.setState({ data: response });
    });
  }

  render(props) {
    return (
      <div className="App">
        <header className="App-header">
          {this.state && this.state.data &&
            (this.state.data).map(function (data, index) {
              return <BBCard
                title={data.fields["Title"]}
                key={index}
                author={data.fields["Author"]}
                authorAlphabetized={data.fields["Author l-f"]}
                rating={data.fields["My Rating"]}
                numberOfPages={data.fields["Number of Pages"]}
                tags={data.fields["Tags"]}
                description={data.fields["Book Description"]}
                bookJacket={data.fields["Book Cover"]}
              />
            })
          }
        </header>
      </div>
    );
  }
}

export default App;
