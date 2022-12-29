const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


// Setup Presave Middleware Method to hash Password
userSchema.pre('save', async function (next) {
    // const {username, email, password } = req;

    console.log("IN - User presave method")
    // console.log(username, email, password);

    // const exists = await this.findOne(this.email)

    // if(exists) {
    //     throw Error("Email already in use");
    // }
    console.log("hashing password");
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({username, email, password: hash})
    next();
})

// Static Method - Signup Variation to Pre Hook
userSchema.statics.signup = async (username, email, password) => {
    const exists = await this.findOne({email})

    if(exists) {
        throw Error("Email already in use");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({username, email, password: hash})
    return user;
}

// Static Method - Signup Variation to Pre Hook
userSchema.methods.signup = async (username, email, password) => {
    const exists = await this.findOne({email})

    if(exists) {
        throw Error("Email already in use");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({username, email, password: hash})
    return user;
}

module.exports = model('User', userSchema);


