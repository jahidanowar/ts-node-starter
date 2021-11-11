import mongoose from "mongoose";

export default async function connect() {
    try{
        await mongoose.connect(String(process.env.MONGODB_URI))
    } catch (e) {
        console.log(e)
        process.exit(1)
    }
}