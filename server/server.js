const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');

// routes includes 
const canvasRoute = require('./routes/canvas.router');
const fileUploadRoute = require('./routes/fileUpload.router'); 
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Route */
app.use('/api/canvas', canvasRoute);
app.use('/api/fileUpload', fileUploadRoute);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
