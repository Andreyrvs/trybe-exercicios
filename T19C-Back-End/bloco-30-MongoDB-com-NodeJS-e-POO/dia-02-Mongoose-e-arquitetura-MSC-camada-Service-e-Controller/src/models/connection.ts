import 'dotenv/config';
import mongoose from 'mongoose';

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI
    || 'mongodb://root:12345@localhost:27017/?authMechanism=DEFAULT',
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;