const mongoose = require('mongoose')


const schema = new mongoose.Schema({
    name: { type: String },
    parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' },
    // 这里建议使用 name：String 
})

schema.virtual('children', {
    localField: '_id',
    foreignField: 'parent',
    justOne: false,
    ref: 'Category'
})

schema.virtual('newsList', {
    localField: '_id',
    foreignField: 'categories',//外键
    justOne: false,
    ref: 'Article'
})


module.exports = mongoose.model('Category', schema)