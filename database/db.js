import mongoose from 'mongoose';

const MONGO_URL = process.env.MONGO_URL;
const dbConnect = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('Mongodb Connected ...');
  } catch (err) {
    console.error('error message +++++', err);
    //exit process with failure
    process.exit(1);
  }
};
export default dbConnect;
