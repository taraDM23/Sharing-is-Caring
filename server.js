const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

const PORT = process.env.PORT || 3001;


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
  
// }
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);
app.get('*',(req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
});

// Connect to the Mongo DB
mongoose.connect("mongodb://user1:password1@ds123619.mlab.com:23619/heroku_w4xs3q9j", { useNewUrlParser: true, useUnifiedTopology: true } );
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
