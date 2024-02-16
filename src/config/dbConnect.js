const mongoose = require("mongoose");

const dbConnect = async () => {
    try{ 
        const connect = await mongoose.connect(process.env.MONGO_URL);
        console.log(connect.connection.host)
        // console.log(`DB connected Successfully`);
    } catch (error) {
        console.log(error.message)
        process.exit(1);
    }
};

module.exports = dbConnect;

