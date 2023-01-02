const errorResult = (err, req, res, next) => {   
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV !== 'development' ? null : err.stack,
    });
};

module.exports = { errorResult };
