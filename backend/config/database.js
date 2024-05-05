const mongoose = require('mongoose')

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI).then((connection) => {
        
        console.log(
            `MongoDB Database connected with HOST ${connection.connection.host}`
        );
    });
};

module.exports = connectDatabase;
