function requestLogger (request, response, next) {
    console.log("Method: ", request.methods);
    console.log("Path: ", request.path);
    console.log("Body: ", request.body);
    next();
}

module.exports = {
    requestLogger
}