var Airtable = require('airtable');
var base = new Airtable({apiKey: 'YOUR_API_KEY'}).base('appDlF1n3LmT47cDl');

base('Books').update(id, title)[
  {
    "id": id,
    "fields": {
      "Title": title,
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