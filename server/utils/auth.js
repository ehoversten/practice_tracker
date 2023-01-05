const jwt = require('jsonwebtoken');
const User = require('../models/User');

const isAuthorized = async (req, res, next) => {

    // verify authentication (read header data)
    const { authorization } = req.headers;
    console.log("Headers: ", authorization);;

    if(!authorization) {
        return res.status(401).json({ error: "Authorization token required"});
    }

    const token = authorization.split(' ')[1];
    console.log("Token: ", token);
    try {
        // validate token
        const {_id} = jwt.verify(token, process.env.SECRET);
        // Attach the User ID to the REQUEST object
        req.user = await User.findOne({_id}).select('_id');
        console.log("User Verified - My Voice is MY ID...");
        next();
    } catch(err) {
        // console.log(err);
        res.status(401).json({error: 'Request Not Authorized'});
    }
}

module.exports = isAuthorized;