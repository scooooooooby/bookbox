import React from 'react';
import './App.css';
import Card from './Card.js';
import Airtable from 'airtable';

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.REACT_APP_API_KEY
});

const base = Airtable.base('appDlF1n3LmT47cDl');

function getRecords(list) {
  base('Books').select({}).eachPage(function page(records, fetchNextSet) {
    list = records;
    console.log(list[0].fields.Title);
    return list;
  }, function done(error) {
    console.log(error);
  });
};

class App extends React.Component {
  render(props) {
    let books = [];
    console.log(books);

    let done = true;

    const isItDoneYet = new Promise((resolve, reject) => {
      if (done) {
        getRecords(books);
        resolve(books)
      } else {
        const why = 'Still working on something else'
        reject(why)
      }
    });

    const checkIfItsDone = () => {
      isItDoneYet
        .then(books => {
          console.log(books)
        })
        .catch(err => {
          console.error(err)
        })
    }

    return (
      <div className="App">
        <header className="App-header">
          <Card 
            title="ke"
          />
        </header>
      </div>
    );
  }
}

export default App;
