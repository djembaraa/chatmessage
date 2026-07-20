import mongoose from 'mongoose';

export async function connectDB() {
    try {
        const mongoURI = process.env.MONGO_URI;

        if (!mongoURI) {
            throw new Error('MONGO_URI is not defined in the environment variables');
        }

        const conn = await mongoose.connect(mongoURI)
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // 1 means failure, 0 means success
    }
}