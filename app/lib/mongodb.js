import mongoose from "mongoose";
const connectdb = async() =>
{
    try{
        if(mongoose.connection.readyState == 0){
            await mongoose.connect(process.env.MONGODB_URI, process.env.MONGODB_URI);
            console.log("Connected to Mongo");
        }
    } 
    catch(error)
    {
        console.log(error);
    }
};
export default connectdb;