const { Schema, model } = require("mongoose")

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true
    },
    coverImageURL: {
        type: String,
        require: false,
    },
    createBy: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
}, {
    timeseries: true
}
)

const Blog=model("blog",blogSchema)

module.exports=Blog