
import mongoose, {Schema} from "mongoose";

const contactSchema = new Schema({
    fullname:{
        type: String,
        required:[true, "Name is required."],
        trim: true,
        minLength:[2,"Name must be larger than 2 characteristics"],
        maxLength:[100,"Name must be lesser than 50 characteristics"],
    },

    email: {
        type: String,
        required:[true, "Email is required."],
        match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
    } ,

    age:{
        type: Number,
        required:[true, "Age is required."],
    },

    date:{
        type: Date,
        default: Date.now,
    },
}); 

const Contact =
mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;