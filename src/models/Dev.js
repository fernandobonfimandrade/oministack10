const mongoose = require('mongoose');
const PointSchema = require('./utils/pointSchema');

const devSchema = new mongoose.Schema({
    github_username: String,
    name: String,
    avatar_url: String,
    bio: String,
    techs: [String],
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
});

module.exports = mongoose.model('Dev',devSchema);