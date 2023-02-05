const mongoose = require ('mongoose');
mongoose.set('strictQuery', false);

const connect = () => {
    mongoose.connect( "mongodb+srv://shruti31:shruti31>@cluster0.pturoip.mongodb.net/?retryWrites=true&w=majority", () => {
        console.log("connected to db")
    })
}
module.exports = connect;