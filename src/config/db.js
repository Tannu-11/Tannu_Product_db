// src/config/db.js
import mongoose from "mongoose";

const connectDb = async () => {
    const testUri = process.env.MONGO_URI || "mongodb+srv://anu26dec2006_db_user:MRhjwMABcEsanejV@74nnu.u0zvfa6.mongodb.net/?appName=74nnu";

    try {
        await mongoose.connect(testUri);
        console.log("✅ MongoDB connected successfully!");
    } catch (error) {
        console.error("❌ MongoDB connection failed:", error.message);
    }
};

export default connectDb;
