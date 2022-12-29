

// login user
const login = async (req, res) => {
    res.json({ msg: 'login user'});
}

// register user
const register = async (req, res) => {
    res.json({ msg: 'register user'});
}


module.exports = { login, register };