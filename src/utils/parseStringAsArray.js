module.exports = function parseStringAsArray(arrayAsString){
    return  arrayAsString.split(',').map(value => value.trim());
}