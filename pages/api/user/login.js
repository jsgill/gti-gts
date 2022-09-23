import dbConnect from '../../../database/db';
import User from '../../../models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const handlerAuth = async (req, res) => {
  const { method } = req;
  await dbConnect();
  if (method === 'POST') {
    try {
      const { email, password } = req.body;
      if (!email) return res.status(404).send('Email is required');
      if (!password) return res.status(404).send('Password is required');
      let user = await User.findOne({ email: email });
      if (!user) {
        return res.status(400).send('User already exist');
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).send({ msg: 'Password not Match' });
      }
      // Create token
      const payload = {
        user: {
          id: user.id,
        },
      };
      const jwttoken = jwt.sign(payload, 'mysecrettoken', {
        expiresIn: 300000,
      });
      user.token = jwttoken;
      return res
        .status(200)
        .send({ msg: 'User logged in successfully', data: user });
    } catch (err) {
      console.log('++++++ Server error ++++++', err);
    }
  }
};
export default handlerAuth;
