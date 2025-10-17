import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || '';

async function connectDB(): Promise<void> {
  if (!MONGO_URI) {
    console.warn('MONGO_URI not set — skipping DB connection');
    return;
  }

  try {
    await mongoose.connect(MONGO_URI, {
      // useNewUrlParser and useUnifiedTopology are defaults in newer mongoose versions
    } as mongoose.ConnectOptions);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    throw err;
  }
}

export default connectDB;
