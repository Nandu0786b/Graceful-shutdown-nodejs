import mongoose from 'mongoose';

const connectDB = async (DATABASE_URL) => {
    const DB_OPTIONS = {
      dbName: "cred",
      maxPoolSize: 10 // Max pool size 500
    }
    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log('Connected to MongoDB successfully...');
};

export default connectDB;
