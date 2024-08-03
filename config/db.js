import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://nishchay:120120120@cluster0.n2oj2ro.mongodb.net/food-del').then(() => console.log("DB Connected"));

}


