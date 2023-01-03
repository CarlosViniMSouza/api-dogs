const jwt = require('jsonwebtoken');

const authToken = async (req, res, next) => {
    let token;

    if (req.headers.authorization && 
        req.headers.startsWith('Bearer')
    ) {
        try {
            token = req.headers.authorization.split(' ')[1];

            next();
        } catch (error) {
            res.status(401);

            throw new Error('Not Authorized!');
        }
    }

    if (!token) {
        res.status(401);

        throw new Error('Token Not Authorized!');
    }
};

module.exports = { authToken };
