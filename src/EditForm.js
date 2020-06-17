var Airtable = require('airtable');
var base = new Airtable({apiKey: 'YOUR_API_KEY'}).base('appDlF1n3LmT47cDl');

base('Books').update([
  {
    "id": "recXPDidOimtge2Nu",
    "fields": {
      "Title": "Wilder Girls",
      "My Rating": "3",
      "Date Read": "2020-06-03",
      "Date Added": "2020-06-02",
      "Read Count": 1
    }
  },
  {
    "id": "recahdDBLG3gz2nrS",
    "fields": {
      "Title": "The Return",
      "Author": "Rachel Harrison"
    }
  }
], function(err, records) {
  if (err) {
    console.error(err);
    return;
  }
  records.forEach(function(record) {
    console.log(record.get('Book Id'));
  });
});