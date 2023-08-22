const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
app.use(cors()); 

const url = 'mongodb://0.0.0.0:27017';
const database = 'bus_data';

async function getData() {
  try {
    const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = client.db(database);
    const collection = db.collection('busDriver');
    const response = await collection.find({}).toArray();
    console.log(response);

    // Express route handler
    app.get('/location', function (req, res) {
      res.send(response);
    });

    let port = 8080;
    app.listen(port, function () {
      console.log(`Server started on port ${port}`);
    });
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

//async 

getData();