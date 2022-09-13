import dbConnect from '../../../database/db';
import User from '../../../models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const handlerUser = async (req, res) => {
  const { method } = req;
  await dbConnect();
  // CREATE USER
  if (method === 'POST') {
    try {
      const { username, email, password, confirm_password } = req.body;
      if (!username) return res.status(404).send('Username is required');
      if (!email) return res.status(404).send('email is required');
      if (!password) return res.status(404).send('password is required');
      if (!confirm_password)
        return res.status(404).send('Confirm password is required');
      if (password !== confirm_password)
        return res.status(404).send('Password not match');

      let user = await User.findOne({ email: email });
      console.log(' get user ===', user);
      if (user) {
        return res.status(400).send('User already exist');
      }
      user = new User({
        username,
        email,
        password,
        confirm_password,
      });
      //Encrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      user.confirm_password = await bcrypt.hash(confirm_password, salt);
      await user.save();
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
      console.log(' token ======>', user.token);
      return res
        .status(200)
        .send({ msg: 'User create successfully', user: user });
    } catch (err) {
      console.log('++++++ Server error ++++++', err);
    }
  }
  // GET ALL USER
  if (method === 'GET') {
    try {
      const users = await User.find();
      return res
        .status(200)
        .send({ msg: 'All users fetched successfully', data: users });
    } catch (err) {
      console.log('++++++ Server error ++++++', err);
    }
  }
};
export default handlerUser;
