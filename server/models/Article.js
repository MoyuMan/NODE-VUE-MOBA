const mongoose = require('mongoose')


const schema = new mongoose.Schema({
    title: { type: String },
    categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }],
    body: { type: String },
},{
    timestamps: true
})


module.exports = mongoose.model('Article', schema) //集合名字默认是类名小写复数形式