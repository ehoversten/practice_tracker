const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    }
}, {
    timestamps: true
});


// Setup Presave Middleware Method to hash Password
userSchema.pre('save', async function (next) {
    // console.log(this);  // user instance 
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)

    next();
});

userSchema.post('save', function(doc, next) {
    console.log("new user created and saved", doc);
    next();
});


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


