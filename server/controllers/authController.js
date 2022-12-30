

const authController = {

    register(req, res) {
        return "In register controller";
    }

}

module.exports.signup_get = (req, res) => {
    res.send("Signup controller");
}


module.exports = authController;