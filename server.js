const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/User')

const db = "mongodb+srv://astrolabs:makeithappen@cluster0-ewbtt.mongodb.net/test?retryWrites=true&w=majority"

mongoose
    .connect(db, {})
    .then(()=> console.log("DB Connected"))
    .catch(err=> console.log(err));

const app = express();

//Configure body parser
app.use(bodyParser.urlencoded({extended: false}));


//User routes
const userRoutes = require('./routes/User');
app.use('/users', userRoutes);

//Post routes
const postRoutes = require('./routes/User');
app.use('/posts', postsRoutes);

//Homepage
app.get('/', (req,res) => res.json(
    {
	msg: "Hello! Amingo!!"
    }
));

//About
app.get('/about', (req,res) => res.json({
	msg: "About page"
}));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));



