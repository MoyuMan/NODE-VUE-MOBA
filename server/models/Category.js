const mongoose = require('mongoose')


const schema = new mongoose.Schema({
    name: { type: String },
    parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' },
    // 这里建议使用 name：String 
})


module.exports = mongoose.model('Category', schema)