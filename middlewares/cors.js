function cors(req, res, next) {
    const { origin } = req.headers; 
    res.header('Access-Control-Allow-Origin', 'http://localhost:3005');
    next();
}

module.exports = {
    cors,
}