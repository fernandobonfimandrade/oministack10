const socketio = require('socket.io');
const parseStringAsArray = require('./utils/parseStringAsArray');
const calculateDistence = require('./utils/calculateDistance');
const connections = [];

exports.setupWebsocket = (server) => {
    const io = socketio(server);

    io.on('connection', socket => {
        const {latitude, longitude, techs} = socket.handshake.query;

        connections.push({
            id: socket.id,
            coordinates: {
                latitude: Number(latitude),
                longitude: Number(longitude),
            },
            techs: parseStringAsArray(techs),
        });
    });
};


exports.findConnections = (coordinates, techs) => {
    return connections.filter(connection => {
        return calculateDistence(coordinates, connection.coordinates) < 10 
        && connections.techs.some(item => techs.includes(item))
    })
}