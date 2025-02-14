import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "your-mongodb-connection-string";

export const connectDB = async () => {
    try {
        if (mongoose.connection.readyState === 1) {
            console.log("✅ Already connected to MongoDB.");
            return;
        }

        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ MongoDB Connected Successfully!");
    } catch (error) {
        console.error("❌ MongoDB Connection Failed:", error);
        process.exit(1); // Stop the server if DB connection fails
    }
};





// mongoose
// .connect(databaseURL)
// .then(() => console.log("DB Connection Successfull"))
// .catch((err) => console.log(err.message));

// mongoose.connection.on("connected", () => {
//     console.log("Connected to database:", mongoose.connection.db.databaseName);
//   });