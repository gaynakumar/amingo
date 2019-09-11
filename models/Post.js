// Create a new model models/Post.js
// Post.js fields
// String: message
// String: email
// Date: date created
//Create a new route file routes/Post.js
//Create a new route to save Post data in database


const mongoose = require('mongoose');
const PostSchema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Post = mongoose.model('posts', PostSchema);