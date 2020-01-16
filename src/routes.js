const {Router} = require('express');
const axios = require('axios'); 
const Dev = require('./models/Dev');
const routes = Router();

routes.post('/devs', async (request, response ) => {
    const {github_username, techs} = request.body;
    const techArray = techs.split(',').map(tech => tech.trim());

    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    const {name = login, avatar_url, bio} = apiResponse.data;

    const devResponse = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techArray,
    });

    return response.json(devResponse);
});

module.exports = routes