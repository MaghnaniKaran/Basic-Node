const { verify } = require('../utils/auth.util');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    if(token) {
        let actulaToken = token.split(' ')[1];
        if(actulaToken!==undefined) {
            const isVerifid = verify(actulaToken);
            if(isVerifid && isVerifid.email) {
                next();
                return;
            } else {
                res.status(400).send({ 
                    message: "You are not authorized to perform this request!!!"
                })    
            }
        } else {
            res.status(400).send({ 
                message: "Token is invalid!"
            })    
        }
    } else {
        res.status(400).send({ 
            message: "Token is missing!"
        })
    }
    
}