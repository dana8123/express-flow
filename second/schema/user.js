const { default: mongoose, Schema } = require("mongoose");

const schema = new Schema({
    name: { type: String },
    email: { type: String },
    text: { type: String },
    // created_at: { default: new Date() }
})

const UserModel = mongoose.model('User', schema)

module.exports = (UserModel)