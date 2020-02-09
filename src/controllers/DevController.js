const axios = require('axios'); 
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
//index, show, store, update, destroy

module.exports = {
    async index(request, response){
        const devs = await Dev.find().sort({name:1});
        return response.json(devs);
    },
    async store(request, response ){
        const {github_username, techs, latitude, longitude} = request.body;
        const techArray = parseStringAsArray(techs.toUpperCase());
        let devCadastrato = await Dev.findOne({github_username});

        if(!devCadastrato){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
            const {name = login, avatar_url, bio} = apiResponse.data;
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };
            devCadastrato = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techArray,
                location,
            })

            //filtrar conexoes que estao a no maximo a 10km de distancias e que o dev tenha uma das techs pesquisadas.
        }

    
        return response.json(devCadastrato);
    },
    async update(){
        return
    },
    async destroy(){
        return
    }
}