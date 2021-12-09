const mongoose = require('mongoose');
const crypto = require('crypto');
const { v1: uuidv1 } = require('uuid');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxLength: 32
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,

    },
    about: {
        type: String,
        trim: true
    },


    role: {
        type: Number,
        default: 0,
    },
    history: {
        type: Array,
        default: []

    }
},
    { timestamps: true }
);

// userSchema.methods.generateJWT = function () {
//     const token = jwt.sign({
//         id: this.id, email: this.email
//     }, process.env.JWT_SECRET_KEY,
//         {
//             expiresIn: "3h"
//         })
//     return token;
// }

//virtual fields, y we need??? cause this are not store in mongo database

// userSchema.virtual('password')
//     .set(function (password) {
//         this._password = password
//         this.salt = uuidv1()
//         this.hashed_password = this.encryptPassword(password)
//     })
//     .get(function () {
//         return this._password;
//     })

// userSchema.methods.encryptPassword = function (password) {
//     if (!password) return '';
//     try {
//         return crypto
//             .createHmac('sha1', this.salt)
//             .update(password)
//             .digest('hex')
//     } catch (err) {
//         return "";
//     }
// };

//this part is for the backend there is and modification to make the user object a unqiue. *Hamzeh
const categorySchema = new mongoose.Schema(
    {
        name:{
            type : String,
            trim:true,
            required : true,
            maxlength:32,
            unique:true
        }
    },
    {timestamps : true}
);

module.exports = mongoose.model('User', userSchema);