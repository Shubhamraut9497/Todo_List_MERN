import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const connect = async () => {
  const mongodbUri = process.env.MONGODB_URI;

  await mongoose.connect(`${mongodbUri}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('DB connected');
  }).catch((err) => {
    console.log(`Error occurred while connecting: ${err}`);
  });
};

export default connect;
