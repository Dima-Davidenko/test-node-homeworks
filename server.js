const mongoose = require('mongoose');

const app = require('./app');

const { DB_HOST, PORT } = process.env;

mongoose.set('strictQuery', true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
    console.log('Server is running. Use our API on port: 3000');
  })
  .catch(err => {
    console.log(err.message);
    process.exit(1);
  });