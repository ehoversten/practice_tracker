const jwt = require('jsonwebtoken');
const User = require('../models/User');

const isAuthorized = async (req, res, next) => {

    // console.log("Headers: ", req.headers);
    // verify authentication (read header data)
    const { authorization } = req.headers;
    // console.log("Auth Headers: ", authorization);

    if(!authorization) {
        return res.status(401).json({ error: "Authorization token required"});
    }
    // Seperate 'Bearer' from Token
    const token = authorization.split(' ')[1];
    console.log("Token: ", token);
    try {
        // validate token
        const {_id} = jwt.verify(token, process.env.SECRET);
        // Attach the User ID to the REQUEST object
        // req.user = await User.findOne({_id}).select('_id').select('-password');
        req.user = await User.findOne({_id}).select('-password');
        // console.log("User Verified - My Voice is MY ID...");
        next();
    } catch(err) {
        // console.log(err);
        res.status(401).json({error: 'Request Not Authorized'});
    }
}

module.exports = isAuthorized;