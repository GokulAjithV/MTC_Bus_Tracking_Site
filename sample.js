const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8080;

// Replace 'your-database-url' with your actual MongoDB connection URL
mongoose.connect('mongodb://127.0.0.1:27017/bus_data', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function(callback){
    console.log("Connection Succeeded");
})
app.use(cors());
app.use(bodyParser.json());

// Define your MongoDB schema
const userSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
});

const User = mongoose.model('busDriver', userSchema);

// Search endpoint
app.get('/api/search', async (req, res) => {
  const nameToSearch = req.query.name;

  try {
    const user = await User.findOne({ name: nameToSearch });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.json({ name: user.name, phoneNumber: user.phoneNumber });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
