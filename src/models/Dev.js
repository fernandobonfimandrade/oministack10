const mongoose = require('mongoose');

const devSchema = new mongoose.Schema({
    github_username: String,
    name: String,
    avatar_url: String,
    bio: String,
    techs: [String],
});

module.exports = mongoose.model('Dev',devSchema);